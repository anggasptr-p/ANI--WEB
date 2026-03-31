const navbarHTML = `
<nav class="fixed top-0 left-0 right-0 w-full z-[100] bg-white/80 backdrop-blur-lg border-b border-stone-100">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        <a href="index.html" class="flex items-center space-x-3 group">
            <div class="w-10 h-10 border border-emerald-900 flex items-center justify-center rotate-45 group-hover:rotate-0 transition-all duration-500">
                <span class="text-emerald-900 font-serif text-xl -rotate-45 group-hover:rotate-0 transition-all duration-500 italic">J</span>
            </div>
            <div class="flex flex-col">
                <span class="font-serif text-lg text-emerald-950 leading-none tracking-tight">Jun's</span>
                <span class="text-[7px] font-black text-amber-800 tracking-[0.4em] uppercase italic">Agrifarm</span>
            </div>
        </a>

        <div class="hidden md:flex items-center space-x-10">
            <a href="index.html" class="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-emerald-900 transition">Home</a>
            <a href="agraris.html" class="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-400 hover:text-emerald-900 transition">Agraris</a>
            <a href="shop.html" class="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-900 border-b-2 border-amber-600 pb-1">Shop</a>
        </div>

        <button onclick="toggleMenu()" class="flex flex-col items-end space-y-1.5 p-2 group focus:outline-none">
            <div class="w-8 h-[1px] bg-emerald-950 group-hover:w-5 transition-all"></div>
            <div class="w-5 h-[1px] bg-emerald-950 group-hover:w-8 transition-all"></div>
            <div class="w-8 h-[1px] bg-emerald-950 transition-all"></div>
        </button>
    </div>
</nav>

<div id="nav-menu" class="fixed inset-0 z-[110] bg-stone-50 translate-y-full transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] flex flex-col justify-center items-center">
    <button onclick="toggleMenu()" class="absolute top-8 right-8 text-emerald-950 text-2xl font-light">✕</button>
    <div class="flex flex-col space-y-8 text-center">
        <a href="index.html" onclick="toggleMenu()" class="text-5xl font-serif italic text-emerald-950 hover:text-amber-700 transition">Home</a>
        <a href="agraris.html" onclick="toggleMenu()" class="text-5xl font-serif italic text-emerald-950 hover:text-amber-700 transition">Our Story</a>
        <a href="shop.html" onclick="toggleMenu()" class="text-5xl font-serif italic text-emerald-950 hover:text-amber-700 transition">Shop</a>
        <a href="admin-juns.html" onclick="toggleMenu()" class="text-[10px] font-bold uppercase tracking-[0.5em] text-stone-400 pt-12">Private Access</a>
    </div>
</div>
`;

// Render dengan Safety Check
const navTarget = document.getElementById('navbar-placeholder');
if (navTarget) {
    navTarget.innerHTML = navbarHTML;
}

// Fungsi Toggle dengan Animasi Body Lock
window.toggleMenu = function() {
    const menu = document.getElementById('nav-menu');
    const isHidden = menu.classList.contains('translate-y-full');
    
    if (isHidden) {
        menu.classList.remove('translate-y-full');
        document.body.style.overflow = 'hidden'; // Biar gak bisa scroll pas menu buka
    } else {
        menu.classList.add('translate-y-full');
        document.body.style.overflow = 'auto';
    }
};
