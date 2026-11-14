import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';
import { RotateCcw, Eye, Snowflake, Sun, Building2, Layers } from 'lucide-react';

type CameraPresetId = 'overview' | 'hvac' | 'solar' | 'structure';

interface CameraPreset {
  id: CameraPresetId;
  labelEn: string;
  labelAr: string;
  position: [number, number, number];
  target: [number, number, number];
}

const CAMERA_PRESETS: CameraPreset[] = [
  {
    id: 'overview',
    labelEn: 'Full Campus',
    labelAr: 'المجمع الكامل',
    position: [13.5, 8.2, 14.5],
    target: [0, 1.4, 0],
  },
  {
    id: 'hvac',
    labelEn: 'HVAC & MEP',
    labelAr: 'التكييف والميكانيك',
    position: [-8.5, 6.4, 9.2],
    target: [-2.4, 2.5, 0.4],
  },
  {
    id: 'solar',
    labelEn: 'Solar & Power',
    labelAr: 'الطاقة الشمسية',
    position: [9.5, 7.6, -7.2],
    target: [2.2, 2.2, -1.2],
  },
  {
    id: 'structure',
    labelEn: 'Steel & Civil',
    labelAr: 'الهياكل والمدني',
    position: [2.4, 5.2, 13.8],
    target: [0.4, 2.0, 0.2],
  },
];

// Reusable module-scope math helpers (zero GC inside animation loop)
const _tempVecA = new THREE.Vector3();
const _tempVecB = new THREE.Vector3();
const _tempMat4 = new THREE.Matrix4();
const _tempQuat = new THREE.Quaternion();
const _tempScale = new THREE.Vector3(1, 1, 1);

function createBlueprintGridTexture(): THREE.CanvasTexture {
  const size = 512;
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#090f1d';
    ctx.fillRect(0, 0, size, size);

    // Sub-grid lines
    ctx.strokeStyle = 'rgba(51, 65, 85, 0.42)';
    ctx.lineWidth = 1;
    const step = 32;
    for (let i = 0; i <= size; i += step) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, size);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(size, i);
      ctx.stroke();
    }

    // Major CAD datum lines
    ctx.strokeStyle = 'rgba(240, 90, 36, 0.25)';
    ctx.lineWidth = 1.5;
    for (let i = 0; i <= size; i += 128) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, size);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(size, i);
      ctx.stroke();
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(6, 6);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createSolarCellTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#0b1d3a';
    ctx.fillRect(0, 0, 256, 256);

    ctx.strokeStyle = '#38bdf8';
    ctx.globalAlpha = 0.35;
    ctx.lineWidth = 2;
    for (let x = 0; x <= 256; x += 32) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 256);
      ctx.stroke();
    }
    for (let y = 0; y <= 256; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(256, y);
      ctx.stroke();
    }
    ctx.globalAlpha = 0.14;
    ctx.fillStyle = '#93c5fd';
    for (let x = 4; x < 256; x += 32) {
      for (let y = 4; y < 256; y += 64) {
        ctx.fillRect(x, y, 24, 56);
      }
    }
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function createContactShadowTexture(): THREE.CanvasTexture {
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');
  if (ctx) {
    const grad = ctx.createRadialGradient(128, 128, 18, 128, 128, 124);
    grad.addColorStop(0, 'rgba(2, 6, 23, 0.72)');
    grad.addColorStop(0.6, 'rgba(2, 6, 23, 0.32)');
    grad.addColorStop(1, 'rgba(2, 6, 23, 0)');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);
  }
  const tex = new THREE.CanvasTexture(canvas);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

interface HeroEngineering3DProps {
  isRtl?: boolean;
  title?: string;
}

export const HeroEngineering3D: React.FC<HeroEngineering3DProps> = ({ isRtl = false }) => {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activePreset, setActivePreset] = useState<CameraPresetId>('overview');
  const [webglFailed, setWebglFailed] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const targetCamPosRef = useRef(new THREE.Vector3(...CAMERA_PRESETS[0].position));
  const targetLookAtRef = useRef(new THREE.Vector3(...CAMERA_PRESETS[0].target));
  const isTransitioningRef = useRef(false);
  const autoRotateEnabledRef = useRef(true);
  const [autoRotateUi, setAutoRotateUi] = useState(true);

  const selectPreset = (presetId: CameraPresetId) => {
    const found = CAMERA_PRESETS.find((p) => p.id === presetId);
    if (!found) return;
    setActivePreset(presetId);
    targetCamPosRef.current.set(...found.position);
    targetLookAtRef.current.set(...found.target);
    isTransitioningRef.current = true;
  };

  const toggleAutoRotate = () => {
    const next = !autoRotateEnabledRef.current;
    autoRotateEnabledRef.current = next;
    setAutoRotateUi(next);
  };

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // Probe WebGL support & detect software WebGL
    let isSoftwareGl = false;
    try {
      const probeCanvas = document.createElement('canvas');
      const gl = probeCanvas.getContext('webgl2') || probeCanvas.getContext('webgl');
      if (!gl) {
        setWebglFailed(true);
        return;
      }
      const ext = gl.getExtension('WEBGL_debug_renderer_info');
      const param = ext ? ext.UNMASKED_RENDERER_WEBGL : gl.RENDERER;
      const gpu = String(gl.getParameter(param) || '');
      gl.getExtension('WEBGL_lose_context')?.loseContext();
      isSoftwareGl = /SwiftShader|llvmpipe|softpipe|Software|Basic Render/i.test(gpu);
    } catch {
      setWebglFailed(true);
      return;
    }

    const width = container.clientWidth || 1200;
    const height = container.clientHeight || 500;

    // Scene & atmospheric horizon fog
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#090f1d');
    scene.fog = new THREE.FogExp2('#090f1d', 0.024);

    // Camera
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 120);
    camera.position.set(...CAMERA_PRESETS[0].position);

    // Renderer
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        antialias: !isSoftwareGl,
        powerPreference: 'high-performance',
        alpha: false,
      });
    } catch {
      setWebglFailed(true);
      return;
    }

    renderer.setSize(width, height);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.setPixelRatio(
      isSoftwareGl ? 1 : isMobile ? Math.min(window.devicePixelRatio, 1.5) : Math.min(window.devicePixelRatio, 2),
    );
    renderer.shadowMap.enabled = !isSoftwareGl && !isMobile;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    const canvas = renderer.domElement;
    canvas.style.display = 'block';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.touchAction = 'pan-y';
    container.appendChild(canvas);

    const handleContextLost = (e: Event) => {
      e.preventDefault();
      setWebglFailed(true);
    };
    const handleContextRestored = () => {
      setWebglFailed(false);
    };
    canvas.addEventListener('webglcontextlost', handleContextLost);
    canvas.addEventListener('webglcontextrestored', handleContextRestored);

    // Studio IBL environment
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    const roomEnv = new RoomEnvironment();
    const envTarget = pmremGenerator.fromScene(roomEnv, 0.04);
    scene.environment = envTarget.texture;
    roomEnv.dispose();
    pmremGenerator.dispose();

    // 3-Point Warm/Cool Studio Lighting
    const hemiLight = new THREE.HemisphereLight(0x93c5fd, 0x1e293b, 0.85);
    scene.add(hemiLight);

    const keyLight = new THREE.DirectionalLight(0xfff1dc, 2.4);
    keyLight.position.set(14, 18, 12);
    if (!isSoftwareGl && !isMobile) {
      keyLight.castShadow = true;
      keyLight.shadow.mapSize.set(1024, 1024);
      keyLight.shadow.camera.near = 2;
      keyLight.shadow.camera.far = 45;
      const d = 11;
      keyLight.shadow.camera.left = -d;
      keyLight.shadow.camera.right = d;
      keyLight.shadow.camera.top = d;
      keyLight.shadow.camera.bottom = -d;
      keyLight.shadow.bias = -0.0005;
      keyLight.shadow.normalBias = 0.02;
    }
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xf97316, 1.35);
    rimLight.position.set(-14, 9, -12);
    scene.add(rimLight);

    const coolAccentLight = new THREE.PointLight(0x38bdf8, 1.6, 26, 1.6);
    coolAccentLight.position.set(-6, 5, 8);
    scene.add(coolAccentLight);

    // OrbitControls (zoom disabled so vertical page scrolling stays natural)
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(...CAMERA_PRESETS[0].target);
    controls.enableDamping = !isSoftwareGl;
    controls.dampingFactor = 0.06;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.minPolarAngle = 0.35;
    controls.maxPolarAngle = Math.PI / 2 - 0.1;
    controls.autoRotate = !isSoftwareGl && !prefersReducedMotion;
    controls.autoRotateSpeed = 0.55;

    const onControlsStart = () => {
      isTransitioningRef.current = false;
    };
    controls.addEventListener('start', onControlsStart);

    // Track disposable resources
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];
    const textures: THREE.Texture[] = [];

    const trackGeo = <T extends THREE.BufferGeometry>(g: T): T => {
      geometries.push(g);
      return g;
    };
    const trackMat = <T extends THREE.Material>(m: T): T => {
      materials.push(m);
      return m;
    };
    const trackTex = <T extends THREE.Texture>(t: T): T => {
      textures.push(t);
      return t;
    };

    // Procedural Textures with max anisotropy
    const maxAniso = renderer.capabilities.getMaxAnisotropy();
    const gridTex = trackTex(createBlueprintGridTexture());
    gridTex.anisotropy = maxAniso;

    const solarTex = trackTex(createSolarCellTexture());
    solarTex.anisotropy = maxAniso;

    const shadowTex = trackTex(createContactShadowTexture());

    // Material Library (calibrated roughness & metalness contrast >= 0.25)
    const matDarkConcrete = trackMat(
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.85, metalness: 0.08 }),
    );
    const matLightConcrete = trackMat(
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, roughness: 0.72, metalness: 0.05 }),
    );
    const matBrushedSteel = trackMat(
      new THREE.MeshPhysicalMaterial({
        color: 0x94a3b8,
        roughness: 0.22,
        metalness: 0.92,
        anisotropy: 0.7,
      }),
    );
    const matDarkGunmetal = trackMat(
      new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.38, metalness: 0.82 }),
    );
    const matBrandOrange = trackMat(
      new THREE.MeshStandardMaterial({ color: 0xf05a24, roughness: 0.32, metalness: 0.45 }),
    );
    const matBrandAmber = trackMat(
      new THREE.MeshStandardMaterial({ color: 0xf5a623, roughness: 0.28, metalness: 0.55 }),
    );
    const matGlass = trackMat(
      new THREE.MeshPhysicalMaterial({
        color: 0x7dd3fc,
        roughness: 0.08,
        metalness: 0.1,
        transmission: isSoftwareGl ? 0 : 0.65,
        transparent: true,
        opacity: isSoftwareGl ? 0.45 : 0.88,
        ior: 1.5,
        clearcoat: 1.0,
      }),
    );
    const matSolarPanel = trackMat(
      new THREE.MeshPhysicalMaterial({
        map: solarTex,
        roughness: 0.18,
        metalness: 0.65,
        clearcoat: 0.9,
        clearcoatRoughness: 0.12,
      }),
    );
    const matEmissiveOrange = trackMat(
      new THREE.MeshStandardMaterial({
        color: 0xf97316,
        emissive: 0xf05a24,
        emissiveIntensity: 1.8,
        roughness: 0.2,
      }),
    );
    const matEmissiveCyan = trackMat(
      new THREE.MeshStandardMaterial({
        color: 0x38bdf8,
        emissive: 0x0284c7,
        emissiveIntensity: 1.5,
        roughness: 0.2,
      }),
    );

    // 1. CAD Blueprint Ground Plane & Contact Shadow
    const groundGeo = trackGeo(new THREE.PlaneGeometry(75, 75));
    const groundMat = trackMat(
      new THREE.MeshStandardMaterial({ map: gridTex, roughness: 0.9, metalness: 0.15 }),
    );
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    const shadowPlane = new THREE.Mesh(
      trackGeo(new THREE.PlaneGeometry(17, 15)),
      trackMat(
        new THREE.MeshBasicMaterial({
          map: shadowTex,
          transparent: true,
          depthWrite: false,
          opacity: 0.65,
        }),
      ),
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = 0.02;
    scene.add(shadowPlane);

    // Master Campus Group
    const campus = new THREE.Group();
    scene.add(campus);

    // Base Architectural Plinth
    const plinth = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(12.2, 0.36, 9.6)), matDarkConcrete);
    plinth.position.y = 0.18;
    plinth.receiveShadow = true;
    campus.add(plinth);

    const plinthTrim = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(12.35, 0.08, 9.75)), matBrandOrange);
    plinthTrim.position.y = 0.37;
    campus.add(plinthTrim);

    // 2. Main Corporate Engineering HQ Pavilion (Architectural Glass + Steel Exoskeleton)
    const mainTowerGroup = new THREE.Group();
    mainTowerGroup.position.set(0.6, 0.38, 0.2);
    campus.add(mainTowerGroup);

    // Core structure (6-part composite architectural mass)
    const coreBlock = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(5.2, 3.6, 4.0)), matLightConcrete);
    coreBlock.position.set(0, 1.8, 0);
    coreBlock.castShadow = true;
    coreBlock.receiveShadow = true;
    mainTowerGroup.add(coreBlock);

    // Glass Curtain Facade Bays
    const glassFacade = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(4.8, 3.1, 4.14)), matGlass);
    glassFacade.position.set(0, 1.82, 0);
    mainTowerGroup.add(glassFacade);

    // Structural Steel Exoskeleton Columns & Horizontal Mullions
    const colGeo = trackGeo(new THREE.BoxGeometry(0.18, 3.9, 0.18));
    const colPositions: [number, number][] = [
      [-2.65, -2.08],
      [-0.88, -2.08],
      [0.88, -2.08],
      [2.65, -2.08],
      [-2.65, 2.08],
      [-0.88, 2.08],
      [0.88, 2.08],
      [2.65, 2.08],
    ];
    colPositions.forEach(([cx, cz]) => {
      const col = new THREE.Mesh(colGeo, matDarkGunmetal);
      col.position.set(cx, 1.95, cz);
      col.castShadow = true;
      mainTowerGroup.add(col);
    });

    // Horizontal architectural spandrels
    const beamGeo = trackGeo(new THREE.BoxGeometry(5.55, 0.14, 4.32));
    [1.15, 2.35, 3.65].forEach((by) => {
      const beam = new THREE.Mesh(beamGeo, matDarkGunmetal);
      beam.position.set(0, by, 0);
      mainTowerGroup.add(beam);
    });

    // Cantilevered Brushed Aluminum Roof Canopy with Brand Accent Edge
    const roofDeck = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(6.0, 0.22, 4.8)), matBrushedSteel);
    roofDeck.position.set(0, 3.92, 0);
    roofDeck.castShadow = true;
    mainTowerGroup.add(roofDeck);

    const roofAccent = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(6.08, 0.08, 4.88)), matBrandOrange);
    roofAccent.position.set(0, 4.05, 0);
    mainTowerGroup.add(roofAccent);

    // 3. HVAC Chiller Plant & Process Piping Wing (Left Side - Div 01 & 03)
    const hvacWing = new THREE.Group();
    hvacWing.position.set(-3.4, 0.38, 0.6);
    campus.add(hvacWing);

    const hvacPad = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(3.2, 0.25, 4.4)), matDarkConcrete);
    hvacPad.position.y = 0.125;
    hvacPad.receiveShadow = true;
    hvacWing.add(hvacPad);

    // Two Commercial Centrifugal Chillers with Rotating Fan Assemblies
    const fanRotors: THREE.Group[] = [];
    const chillerHousingGeo = trackGeo(new THREE.BoxGeometry(1.25, 1.3, 1.75));
    const fanRingGeo = trackGeo(new THREE.TorusGeometry(0.42, 0.05, 12, 24));
    const bladeGeo = trackGeo(new THREE.BoxGeometry(0.72, 0.03, 0.14));

    [-1.05, 1.05].forEach((cz) => {
      const chiller = new THREE.Mesh(chillerHousingGeo, matBrushedSteel);
      chiller.position.set(-0.3, 0.9, cz);
      chiller.castShadow = true;
      hvacWing.add(chiller);

      // Louver band
      const louver = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.28, 0.45, 1.5)), matDarkGunmetal);
      louver.position.set(-0.3, 0.95, cz);
      hvacWing.add(louver);

      // Shroud Ring on Top
      const ring = new THREE.Mesh(fanRingGeo, matDarkGunmetal);
      ring.rotation.x = Math.PI / 2;
      ring.position.set(-0.3, 1.58, cz);
      hvacWing.add(ring);

      // Rotating 4-blade Turbine Fan
      const rotor = new THREE.Group();
      rotor.position.set(-0.3, 1.56, cz);
      for (let b = 0; b < 2; b++) {
        const blade = new THREE.Mesh(bladeGeo, matBrandOrange);
        blade.rotation.y = (b * Math.PI) / 2;
        blade.rotation.x = 0.22;
        rotor.add(blade);
      }
      const hub = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.11, 0.11, 0.1, 16)), matBrandAmber);
      rotor.add(hub);
      hvacWing.add(rotor);
      fanRotors.push(rotor);
    });

    // MEP Insulated Process Piping Manifold connecting Chillers to Main Tower (TubeGeometry)
    const pipeCurve1 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.3, 0.9, -0.15),
      new THREE.Vector3(0.8, 0.9, -0.15),
      new THREE.Vector3(1.2, 2.2, -0.15),
      new THREE.Vector3(1.85, 2.2, -0.15),
    ]);
    const pipeCurve2 = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-0.3, 0.65, 0.45),
      new THREE.Vector3(0.65, 0.65, 0.45),
      new THREE.Vector3(1.05, 1.65, 0.45),
      new THREE.Vector3(1.85, 1.65, 0.45),
    ]);

    const pipeMesh1 = new THREE.Mesh(trackGeo(new THREE.TubeGeometry(pipeCurve1, 28, 0.11, 12, false)), matBrushedSteel);
    const pipeMesh2 = new THREE.Mesh(trackGeo(new THREE.TubeGeometry(pipeCurve2, 28, 0.09, 12, false)), matBrandOrange);
    pipeMesh1.castShadow = true;
    pipeMesh2.castShadow = true;
    hvacWing.add(pipeMesh1, pipeMesh2);

    // 4. Solar PV Microgrid & Power Generation Array (Right Wing - Div 06 & 08)
    const energyWing = new THREE.Group();
    energyWing.position.set(4.1, 0.38, -0.8);
    campus.add(energyWing);

    // Soundproof Containerized Power Generator Unit
    const genBody = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(2.1, 1.15, 1.3)), matBrandAmber);
    genBody.position.set(0, 0.58, 2.1);
    genBody.castShadow = true;
    energyWing.add(genBody);

    const genBase = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(2.25, 0.18, 1.45)), matDarkGunmetal);
    genBase.position.set(0, 0.09, 2.1);
    energyWing.add(genBase);

    const genExhaust = new THREE.Mesh(
      trackGeo(new THREE.CylinderGeometry(0.08, 0.08, 0.65, 12)),
      matBrushedSteel,
    );
    genExhaust.position.set(0.65, 1.4, 2.1);
    energyWing.add(genExhaust);

    // Elevated Steel Solar Canopy Frame + Photovoltaic Arrays
    const solarStandGeo = trackGeo(new THREE.CylinderGeometry(0.06, 0.07, 1.6, 8));
    [
      [-0.85, -1.5],
      [0.85, -1.5],
      [-0.85, 0.3],
      [0.85, 0.3],
    ].forEach(([sx, sz]) => {
      const leg = new THREE.Mesh(solarStandGeo, matDarkGunmetal);
      leg.position.set(sx, 0.8, sz);
      energyWing.add(leg);
    });

    const solarRack = new THREE.Group();
    solarRack.position.set(0, 1.68, -0.6);
    solarRack.rotation.x = 0.28; // Optimal tilt toward sun
    energyWing.add(solarRack);

    const solarFrame = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(2.45, 0.08, 2.5)), matBrushedSteel);
    solarRack.add(solarFrame);

    const pvSurface = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(2.3, 0.095, 2.35)), matSolarPanel);
    pvSurface.position.y = 0.01;
    solarRack.add(pvSurface);

    // Rooftop Solar Panels on Main HQ Roof
    const roofSolarGroup = new THREE.Group();
    roofSolarGroup.position.set(0.4, 4.18, -0.6);
    mainTowerGroup.add(roofSolarGroup);
    [-1.4, 0, 1.4].forEach((rx) => {
      const panel = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(1.15, 0.05, 1.6)), matSolarPanel);
      panel.position.set(rx, 0.2, 0);
      panel.rotation.x = 0.25;
      roofSolarGroup.add(panel);
    });

    // 5. Telecommunications & Smart Telemetry Lattice Mast (Div 13)
    const mastGroup = new THREE.Group();
    mastGroup.position.set(-2.0, 4.08, -1.35);
    mainTowerGroup.add(mastGroup);

    const mastPole = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.05, 0.14, 2.8, 8)), matBrushedSteel);
    mastPole.position.y = 1.4;
    mastGroup.add(mastPole);

    // Crossbar & Microwave Dishes
    const mastArm = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.95, 0.05, 0.05)), matDarkGunmetal);
    mastArm.position.y = 2.05;
    mastGroup.add(mastArm);

    const dishGeo = trackGeo(new THREE.CylinderGeometry(0.24, 0.06, 0.14, 16));
    [-0.42, 0.42].forEach((dx, idx) => {
      const dish = new THREE.Mesh(dishGeo, matLightConcrete);
      dish.position.set(dx, 2.05, 0.12);
      dish.rotation.x = Math.PI / 2;
      dish.rotation.z = idx === 0 ? 0.35 : -0.35;
      mastGroup.add(dish);
    });

    const beaconOrb = new THREE.Mesh(trackGeo(new THREE.SphereGeometry(0.09, 14, 14)), matEmissiveOrange);
    beaconOrb.position.y = 2.85;
    mastGroup.add(beaconOrb);

    // Expanding telemetry signal ring from mast
    const signalRing = new THREE.Mesh(
      trackGeo(new THREE.TorusGeometry(0.55, 0.02, 8, 36)),
      trackMat(new THREE.MeshBasicMaterial({ color: 0xf97316, transparent: true, opacity: 0.65 })),
    );
    signalRing.rotation.x = Math.PI / 2;
    signalRing.position.y = 2.82;
    mastGroup.add(signalRing);

    // 6. Precision Structural Steel Truss Gantry Arch (Div 12)
    const gantryGroup = new THREE.Group();
    gantryGroup.position.set(0.6, 0.38, 3.25);
    campus.add(gantryGroup);

    const gantryLegGeo = trackGeo(new THREE.BoxGeometry(0.16, 2.6, 0.16));
    [-2.4, 2.4].forEach((gx) => {
      const post = new THREE.Mesh(gantryLegGeo, matBrandOrange);
      post.position.set(gx, 1.3, 0);
      post.castShadow = true;
      gantryGroup.add(post);
    });
    const gantryHeader = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(5.2, 0.2, 0.22)), matDarkGunmetal);
    gantryHeader.position.set(0, 2.6, 0);
    gantryGroup.add(gantryHeader);

    // Moving Overhead Hoist Trolley on the Steel Gantry
    const trolley = new THREE.Group();
    trolley.position.set(0, 2.42, 0);
    const trolleyCar = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.42, 0.18, 0.34)), matBrandAmber);
    const trolleyHookCable = new THREE.Mesh(trackGeo(new THREE.CylinderGeometry(0.018, 0.018, 0.55, 8)), matBrushedSteel);
    trolleyHookCable.position.y = -0.32;
    const trolleyLoad = new THREE.Mesh(trackGeo(new THREE.BoxGeometry(0.35, 0.22, 0.28)), matBrushedSteel);
    trolleyLoad.position.y = -0.62;
    trolley.add(trolleyCar, trolleyHookCable, trolleyLoad);
    gantryGroup.add(trolley);

    // 7. Smart Digital Engineering Telemetry Orbit Rings & Instanced Energy Nodes
    const orbitRingGroup = new THREE.Group();
    orbitRingGroup.position.set(0.4, 2.0, 0);
    campus.add(orbitRingGroup);

    const outerHalo = new THREE.Mesh(
      trackGeo(new THREE.TorusGeometry(6.85, 0.028, 10, isMobile ? 64 : 110)),
      trackMat(new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.35 })),
    );
    outerHalo.rotation.x = Math.PI / 2 - 0.14;
    orbitRingGroup.add(outerHalo);

    const innerHalo = new THREE.Mesh(
      trackGeo(new THREE.TorusGeometry(5.6, 0.022, 10, isMobile ? 56 : 96)),
      trackMat(new THREE.MeshBasicMaterial({ color: 0x38bdf8, transparent: true, opacity: 0.3 })),
    );
    innerHalo.rotation.x = Math.PI / 2 + 0.12;
    orbitRingGroup.add(innerHalo);

    // Instanced Data/Energy Flow Pulses along MEP & Power Loops
    const pulseCount = 24;
    const pulseGeo = trackGeo(new THREE.SphereGeometry(0.065, 10, 10));
    const pulseInstances = new THREE.InstancedMesh(pulseGeo, matEmissiveCyan, pulseCount);
    pulseInstances.frustumCulled = false;
    campus.add(pulseInstances);

    const busPath = new THREE.CatmullRomCurve3(
      [
        new THREE.Vector3(4.1, 0.9, 1.3),
        new THREE.Vector3(4.1, 0.55, -0.4),
        new THREE.Vector3(2.8, 0.55, -0.4),
        new THREE.Vector3(0.6, 1.2, -1.8),
        new THREE.Vector3(-2.4, 1.2, -1.8),
        new THREE.Vector3(-3.4, 0.85, 0.6),
        new THREE.Vector3(-1.8, 0.6, 2.6),
        new THREE.Vector3(2.4, 0.6, 2.6),
      ],
      true,
    );

    // Pre-compile shaders on hardware GPUs to prevent initial frame hitch
    if (!isSoftwareGl) {
      renderer.compile(scene, camera);
    }

    setIsReady(true);

    // Resize Observer for exact container fitting
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', handleResize);

    // Animation Loop with Software-WebGL Pacing
    const clock = new THREE.Clock();
    let frameId = 0;
    let disposed = false;

    function afterDraw(cb: () => void) {
      const gl = renderer.getContext() as WebGL2RenderingContext;
      if (!gl || typeof gl.fenceSync !== 'function') {
        frameId = window.setTimeout(cb, 80);
        return;
      }
      const sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
      gl.flush();
      const poll = () => {
        if (disposed) {
          if (sync) gl.deleteSync(sync);
          return;
        }
        const state = sync && gl.getSyncParameter(sync, gl.SYNC_STATUS);
        if (state === gl.UNSIGNALED) {
          frameId = window.setTimeout(poll, 5);
        } else {
          if (sync) gl.deleteSync(sync);
          frameId = window.setTimeout(cb, 80);
        }
      };
      frameId = window.setTimeout(poll, 5);
    }

    function tick() {
      if (disposed) return;

      const delta = Math.min(clock.getDelta(), 0.05);
      const elapsed = clock.getElapsedTime();

      // Continuous subtle engineering motions (skipped if user prefers reduced motion)
      if (!prefersReducedMotion) {
        // 1. HVAC Chiller Turbine Fans spinning smoothly
        fanRotors[0].rotation.y += delta * 4.5;
        fanRotors[1].rotation.y -= delta * 4.2;

        // 2. Structural Steel Gantry Hoist gliding gently back and forth
        trolley.position.x = Math.sin(elapsed * 0.48) * 1.55;

        // 3. Telemetry Beacon & Expanding Signal Ring
        const ringPhase = (elapsed * 0.55) % 1;
        const ringScale = 0.25 + ringPhase * 1.65;
        signalRing.scale.set(ringScale, ringScale, 1);
        (signalRing.material as THREE.MeshBasicMaterial).opacity = (1 - ringPhase) * 0.6;
        matEmissiveOrange.emissiveIntensity = 1.3 + Math.sin(elapsed * 3.0) * 0.6;

        // 4. Orbital Engineering Blueprint Rings
        outerHalo.rotation.z = elapsed * 0.12;
        innerHalo.rotation.z = -elapsed * 0.16;

        // 5. Instanced Power & Data Flow Nodes traveling around the campus loop
        for (let i = 0; i < pulseCount; i++) {
          const t = (elapsed * 0.085 + i / pulseCount) % 1;
          busPath.getPointAt(t, _tempVecA);
          _tempMat4.compose(_tempVecA, _tempQuat, _tempScale);
          pulseInstances.setMatrixAt(i, _tempMat4);
        }
        pulseInstances.instanceMatrix.needsUpdate = true;
      }

      // Smooth exponential camera preset transitions
      if (isTransitioningRef.current) {
        camera.position.x = THREE.MathUtils.damp(camera.position.x, targetCamPosRef.current.x, 4.5, delta);
        camera.position.y = THREE.MathUtils.damp(camera.position.y, targetCamPosRef.current.y, 4.5, delta);
        camera.position.z = THREE.MathUtils.damp(camera.position.z, targetCamPosRef.current.z, 4.5, delta);

        controls.target.x = THREE.MathUtils.damp(controls.target.x, targetLookAtRef.current.x, 4.5, delta);
        controls.target.y = THREE.MathUtils.damp(controls.target.y, targetLookAtRef.current.y, 4.5, delta);
        controls.target.z = THREE.MathUtils.damp(controls.target.z, targetLookAtRef.current.z, 4.5, delta);

        if (
          _tempVecB.copy(camera.position).distanceTo(targetCamPosRef.current) < 0.06 &&
          controls.target.distanceTo(targetLookAtRef.current) < 0.04
        ) {
          isTransitioningRef.current = false;
        }
      }

      controls.autoRotate = !isSoftwareGl && !prefersReducedMotion && autoRotateEnabledRef.current;
      controls.update();

      renderer.render(scene, camera);

      if (isSoftwareGl) {
        afterDraw(tick);
      } else {
        frameId = requestAnimationFrame(tick);
      }
    }

    if (isSoftwareGl) {
      renderer.render(scene, camera);
      afterDraw(tick);
    } else {
      frameId = requestAnimationFrame(tick);
    }

    return () => {
      disposed = true;
      cancelAnimationFrame(frameId);
      clearTimeout(frameId);
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      controls.removeEventListener('start', onControlsStart);
      controls.dispose();
      canvas.removeEventListener('webglcontextlost', handleContextLost);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored);

      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      textures.forEach((t) => t.dispose());
      envTarget.dispose();
      renderer.dispose();
      if (canvas.parentNode === container) {
        container.removeChild(canvas);
      }
    };
  }, []);

  const presetIcons: Record<CameraPresetId, React.ReactNode> = {
    overview: <Eye className="w-3.5 h-3.5" />,
    hvac: <Snowflake className="w-3.5 h-3.5" />,
    solar: <Sun className="w-3.5 h-3.5" />,
    structure: <Building2 className="w-3.5 h-3.5" />,
  };

  return (
    <div className="relative w-full h-[290px] sm:h-[390px] md:h-[470px] lg:h-[530px] rounded-2xl overflow-hidden shadow-xl border border-slate-200/80 bg-slate-950 select-none">
      {/* Fallback / Progressive Backdrop Image (Zero blank screen before WebGL paints or if WebGL fails) */}
      {(!isReady || webglFailed) && (
        <img
          src="/assets/images/hero_tecknowave_building_1794054778502.jpg"
          alt="GG Tecknowave Engineering & Industrial Complex"
          className="absolute inset-0 w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
      )}

      {/* Dedicated Isolated WebGL Canvas Mount */}
      {!webglFailed && <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />}

      {/* Minimal Top-Left Interactive Cue (Solid rgba, no backdrop-blur over WebGL, no pulsing dots) */}
      {!webglFailed && (
        <div
          className={`pointer-events-none absolute top-3.5 ${isRtl ? 'right-3.5' : 'left-3.5'} z-10 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/85 border border-slate-700/80 text-[11px] font-semibold text-slate-200 shadow-md`}
        >
          <Layers className="w-3.5 h-3.5 text-orange-500 shrink-0" />
          <span className="whitespace-nowrap">
            {isRtl
              ? 'نموذج هندسي تفاعلي ثلاثي الأبعاد — اسحب للتدوير'
              : 'Interactive 3D Engineering Twin — Drag to Orbit'}
          </span>
        </div>
      )}

      {/* Compact Bottom-Center Inspection Dock (Zero viewport obstruction, zero backdrop-blur) */}
      {!webglFailed && (
        <div className="absolute bottom-3.5 left-1/2 -translate-x-1/2 z-10 max-w-[94%] overflow-x-auto">
          <div className="flex items-center gap-1 p-1 rounded-xl bg-slate-950/90 border border-slate-700/80 shadow-xl">
            {CAMERA_PRESETS.map((preset) => {
              const isActive = activePreset === preset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => selectPreset(preset.id)}
                  className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg text-[11px] font-bold transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-orange-600 text-white shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/90'
                  }`}
                >
                  {presetIcons[preset.id]}
                  <span>{isRtl ? preset.labelAr : preset.labelEn}</span>
                </button>
              );
            })}

            <div className="w-px h-4 bg-slate-700 mx-0.5 shrink-0" />

            <button
              type="button"
              onClick={toggleAutoRotate}
              title={isRtl ? 'إيقاف/تشغيل الدوران التلقائي' : 'Toggle Auto-Orbit'}
              className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-[11px] font-bold transition-colors whitespace-nowrap shrink-0 ${
                autoRotateUi
                  ? 'text-amber-400 hover:bg-slate-800/90'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800/90'
              }`}
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">
                {autoRotateUi
                  ? isRtl
                    ? 'دوران'
                    : 'Auto'
                  : isRtl
                    ? 'ثابت'
                    : 'Paused'}
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
