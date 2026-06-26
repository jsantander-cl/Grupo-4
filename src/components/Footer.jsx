export default function Footer() {
  return (
    <footer className="bg-[#F5F2F0] border-t border-gray-200 mt-auto py-12">
      <div className="w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-bold text-gray-800">CulinaryNest</div>
          <p className="text-xs text-gray-500">© 2024 CulinaryNest. A reliable culinary partner for home cooking.</p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A0026]">Compañía</span>
            <a className="text-xs text-gray-600 hover:text-[#8A0026] hover:underline transition-colors" href="#">Career</a>
            <a className="text-xs text-gray-600 hover:text-[#8A0026] hover:underline transition-colors" href="#">Support</a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-bold uppercase tracking-wider text-[#8A0026]">Legal</span>
            <a className="text-xs text-gray-600 hover:text-[#8A0026] hover:underline transition-colors" href="#">Privacy Policy</a>
            <a className="text-xs text-gray-600 hover:text-[#8A0026] hover:underline transition-colors" href="#">Terms of Service</a>
            <a className="text-xs text-gray-600 hover:text-[#8A0026] hover:underline transition-colors" href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}