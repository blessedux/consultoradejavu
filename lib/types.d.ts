declare module 'locomotive-scroll' {
  export interface LocomotiveScrollOptions {
    el?: HTMLElement | null;
    name?: string;
    offset?: [number, number];
    repeat?: boolean;
    smooth?: boolean;
    smoothMobile?: boolean;
    direction?: string;
    inertia?: number;
    class?: string;
    scrollbarClass?: string;
    scrollingClass?: string;
    draggingClass?: string;
    smoothClass?: string;
    initClass?: string;
    getSpeed?: boolean;
    getDirection?: boolean;
    lerp?: number;
    multiplier?: number;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    reloadOnContextChange?: boolean;
    smartphone?: {
      smooth?: boolean;
      direction?: string;
      multiplier?: number;
      touchMultiplier?: number;
    };
    tablet?: {
      smooth?: boolean;
      direction?: string;
      multiplier?: number;
      touchMultiplier?: number;
    };
  }

  export default class LocomotiveScroll {
    constructor(options?: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    stop(): void;
    start(): void;
    scrollTo(target: string | number | HTMLElement, options?: { offset?: number; duration?: number; disableLerp?: boolean; callback?: () => void }): void;
    on(event: string, func: (args?: any) => void): void;
  }
} 