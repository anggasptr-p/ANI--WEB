const navbarHTML = `
<nav class="fixed top-0 left-0 w-full z-[100] bg-white/95 backdrop-blur-md border-b border-stone-100">
    <div class="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        </div>
        <a href="index.html" class="flex items-center space-x-2 group">
            <div class="w-8 h-8 text-emerald-950 group-hover:text-amber-700 transition">
                <svg viewBox="0 0 100 100" fill="currentColor"><path d="M50,15 L85,75 L15,75 Z" stroke="currentColor" stroke-width="2" fill="none"/></svg>
            </div>
            <div class="flex flex-col border-l border-stone-200 pl-2 text-left">
                <span class="font-brand text-lg text-emerald-900 leading-none uppercase">Jun's</span>
                <span class="text-[7px] font-bold text-amber-700 tracking-[0.3em] uppercase italic">Agrifarm</span>
            </div>
        </a>

        <button onclick="toggleMenu()" class="group flex flex-col items-end space-y-1.5 p-2 focus:outline-none">
            <div id="line1" class="w-8 h-0.5 bg-emerald-950 group-hover:bg-amber-700 transition-all duration-300"></div>
            <div id="line2" class="w-5 h-0.5 bg-emerald-950 group-hover:bg-amber-700 transition-all duration-300"></div>
            <div id="line3" class="w-8 h-0.5 bg-emerald-950 group-hover:bg-amber-700 transition-all duration-300"></div>
        </button>
    </div>
</nav>

<div id="nav-menu" class="fixed inset-0 z-[110] bg-emerald-950 translate-x-full transition-transform duration-500 ease-in-out flex flex-col justify-center items-center">
    <button onclick="toggleMenu()" class="absolute top-8 right-8 text-white text-3xl font-light hover:text-amber-500 transition">✕</button>
    
    <div class="flex flex-col space-y-8 text-center">
        <a href="index.html" class="text-white text-4xl font-serif italic hover:text-amber-500 transition">Home</a>
        <a href="about.html" class="text-white text-3xl font-serif italic hover:text-amber-500 transition">Our Story</a>
        <a href="agraris.html" class="text-white text-3xl font-serif italic hover:text-amber-500 transition">Agri Unit</a>
        <a href="premium.html" class="text-white text-3xl font-serif italic hover:text-amber-500 transition">Premium Gold</a>
        <a href="shop.html" class="text-white text-3xl font-serif italic hover:text-amber-500 transition underline underline-offset-8 decoration-amber-500">Shop</a>
        <a href="admin-juns.html" class="text-emerald-800 text-[10px] font-bold uppercase tracking-[0.5em] pt-10">Admin Access</a>
    </div>
</div>
`;

// Ganti baris document.getElementById paling bawah jadi ini:
const navPlace = document.getElementById('navbar-placeholder');
if (navPlace) {
    navPlace.innerHTML = navbarHTML;
} else {
    console.error("Gagal nemu id 'navbar-placeholder' di HTML lo, Ler!");
}

// Fungsi Global buat Toggle
window.toggleMenu = function() {
    const menu = document.getElementById('nav-menu');
    menu.classList.toggle('translate-x-full');
};
