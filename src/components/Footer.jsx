export default function Footer() {
  return (
    <>
      <footer className="w-full py-stack-lg bg-surface-container-high dark:bg-surface-container-highest border-t border-surface-muted">
        <div className="flex flex-col md:flex-row justify-between items-start px-margin-desktop max-w-container-max mx-auto gap-stack-lg">
          <div className="max-w-xs">
            <a
              href="#"
              className="font-headline-sm text-headline-sm font-bold text-primary mb-4 block"
            >
              CulinaryNest
            </a>
            <p className="font-body-md text-body-md text-secondary opacity-90 mb-6">
              Nuestra misión es hacer que la cocina casera sea accesible,
              divertida y nutritiva para todas las familias.
            </p>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">face_nod</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">photo_camera</span>
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all"
              >
                <span className="material-symbols-outlined">smart_display</span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-gutter md:gap-stack-lg">
            <div className="flex flex-col gap-2">
              <span className="font-label-md text-label-md text-on-surface font-bold mb-2">
                Compañía
              </span>
              <a
                href="#"
                className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                About Us
              </a>
              <a
                href="#"
                className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                Contact
              </a>
              <a
                href="#"
                className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                Careers
              </a>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-label-md text-label-md text-on-surface font-bold mb-2">
                Legal
              </span>
              <a
                href="#"
                className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="font-body-md text-body-md text-on-surface-variant hover:text-secondary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-container-max mx-auto px-margin-desktop mt-stack-lg pt-stack-md border-t border-surface-muted flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body-md text-body-md text-on-surface-variant opacity-80">
            © 2024 CulinaryNest. All rights reserved. Nurturing your home
            cooking.
          </p>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              Hecho con amor por cocineros.
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
