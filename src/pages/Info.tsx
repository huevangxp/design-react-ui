export default function Info() {
  return (
    <section id="info" className="flex flex-col gap-10 border-t border-b border-[#d3d8e2] dark:border-[#22252a] py-16 md:py-8 animate-fade-up">
      <div className="flex flex-col gap-4">
        <div className="font-mono text-xs text-[#ff4d00] tracking-wider">// SYSTEM SPECS & FAQ //</div>
        <h2 className="text-[32px] font-black leading-tight tracking-tight text-[#0f1013] dark:text-[#e2e4e9]">TECHNICAL INFORMATION</h2>
        <p className="text-[#5a6270] dark:text-[#8b919d] text-[15px] leading-relaxed max-w-[640px]">
          DISCOVER SYSTEM WORKFLOWS, CARE INSTRUCTIONS FOR REINFORCED TEXTILES, AND RETURN POLICIES.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-6 hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200">
          <h3 className="font-mono font-bold text-sm text-[#ff4d00] mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            01 / HOW DO I CARE FOR TEXTILES?
          </h3>
          <p className="text-[#5a6270] dark:text-[#8b919d] text-sm leading-relaxed">
            MACHINE WASH COLD ON DELICATE CYCLE WITH MILD DETERGENT. AIR DRY ONLY. DO NOT BLEACH OR DRY CLEAN TO PROTECT ADVANCED COMPRESSION MATERIALS.
          </p>
        </div>

        <div className="bg-white dark:bg-[#14161b] border border-[#d3d8e2] dark:border-[#22252a] p-6 hover:border-[#5a6270] dark:hover:border-[#8b919d] transition-all duration-200">
          <h3 className="font-mono font-bold text-sm text-[#ff4d00] mb-2 flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            02 / WHAT IS THE RETURN POLICY?
          </h3>
          <p className="text-[#5a6270] dark:text-[#8b919d] text-sm leading-relaxed">
            WE ACCEPT RETURNS WITHIN 14 DAYS OF ORDER ARRIVAL. ALL RETURNED ITEMS MUST BE UNWORN, UNWASHED, AND HAVE ORIGINAL ACCENT TAGS SECURED.
          </p>
        </div>
      </div>
    </section>
  );
}
