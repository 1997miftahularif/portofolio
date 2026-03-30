// ---------------------------------------------------
// DATA KARYA (EDIT KATEGORI & GAMBAR DI SINI)
// ---------------------------------------------------
const portfolioData = [
    {
        folderName: "Branding & Logo",
        icon: "fa-folder-open",
        works: [
            { title: "Takul Project", desc: "Agency Pribadi", img: "IMG_6519.jpg" },
            { title: "UMKM Logo", desc: "Dessert Yuk", img: "IMG_6526.jpg" },
            { title: "UMKM Logo", desc: "Syabell.id", img: "IMG_6527.jpg" },
            { title: "UMKM Logo", desc: "Zallin Store", img: "IMG_6525 2.jpg" },
            { title: "UMKM Logo", desc: "Up2u", img: "IMG_6525 3.jpg" },
            { title: "UMKM Logo", desc: "Mbak Ayoe", img: "IMG_6525 4.jpg" },
            { title: "UMKM Logo", desc: "Firman Kaboul", img: "IMG_6525 5.jpg" },
            { title: "UMKM Logo", desc: "Meidi", img: "IMG_6525.jpg" },
        ]
    },
    {
        folderName: "Social Media Design",
        icon: "fa-folder-open",
        works: [
            { title: "Feed Instagram", desc: "Poutcare", img: "PC 1.JPEG" },
            { title: "Feed Instagram", desc: "Poutcare", img: "PC 2.JPEG" },
            { title: "Feed Instagram", desc: "Poutcare", img: "PC 3.JPEG" },
            { title: "Feed Instagram", desc: "Poutcare", img: "PC 4.JPEG" },
            { title: "Feed Instagram", desc: "Poutcare", img: "PC 5.JPEG" },
            { title: "Feed Instagram", desc: "Poutcare", img: "PC 6.JPEG" },
            { title: "Feed Instagram", desc: "Poutcare", img: "PC 7.JPEG" },
            { title: "Feed Instagram", desc: "Poutcare", img: "PC 8.JPEG" },
        ]
    },
    {
        folderName: "Video Editing",
        icon: "fa-folder-open",
        works: [
            {
                title: "Instagram Konten",
                desc: "Poutcare",
                type: "video", // Tandai sebagai video
                // Gunakan gambar statis (jpg/png) untuk thumbnail folder. Jangan pakai .mov di img.
                img: "Sampul video.jpg", 
                src: "vd 1.mp4" // Sumber video asli
            },
				{
                title: "Instagram Konten",
                desc: "Poutcare",
                type: "video", // Tandai sebagai video
                // Gunakan gambar statis (jpg/png) untuk thumbnail folder. Jangan pakai .mov di img.
                img: "Sampul video.jpg", 
                src: "vd 2.MP4" // Sumber video asli
            },
				{
                title: "Instagram Konten",
                desc: "Poutcare",
                type: "video", // Tandai sebagai video
                // Gunakan gambar statis (jpg/png) untuk thumbnail folder. Jangan pakai .mov di img.
                img: "Sampul video.jpg", 
                src: "vd 3.MP4" // Sumber video asli
            },
{
                title: "Instagram Konten",
                desc: "Poutcare",
                type: "video", // Tandai sebagai video
                // Gunakan gambar statis (jpg/png) untuk thumbnail folder. Jangan pakai .mov di img.
                img: "Sampul video.jpg", 
                src: "vd 4.mp4" // Sumber video asli
            },
        ]
    },
    {
        folderName: "Sertifikat",
        icon: "fa-folder-open",
        works: [
            { title: "Sertifikat", desc: "Surat Keterangan Hasil Pemeriksaan Narkotika", img: "BNN.JPEG" },
				{ title: "Sertifikat", desc: "SEMNAS GENDER", img: "GENDER.JPEG" },
				{ title: "Sertifikat", desc: "Tim Digital JTF 2018", img: "JTF.JPEG" },
				{ title: "Sertifikat", desc: "Prakti Kerja Lapangan (Pelindo III Cabang Tanjung Perak)", img: "MAGANG.JPEG" },
				{ title: "Sertifikat", desc: "SOINA", img: "SOINA.JPEG" },
        ]
    }
];

// ---------------------------------------------------
// VARIABEL GLOBAL
// ---------------------------------------------------
let currentWorks = []; 
let currentIndex = 0;  

// Elemen DOM
const folderContainer = document.getElementById('folder-container');
const folderModal = document.getElementById('folder-modal');
const folderTitle = document.getElementById('folder-title');
const folderContentGrid = document.getElementById('folder-content-grid');
const lightboxModal = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxTitle = document.getElementById('lightbox-title');
const lightboxDesc = document.getElementById('lightbox-desc');

// ---------------------------------------------------
// 1. FUNGSI INISIALISASI (TAMPILKAN FOLDER)
// ---------------------------------------------------
function initPortfolio() {
    if (!folderContainer) return;
    let folderHTML = '';
    portfolioData.forEach((category, index) => {
        folderHTML += `
            <div class="folder-card" onclick="openFolder(${index})">
                <i class="fas ${category.icon} folder-icon"></i>
                <h3>${category.folderName}</h3>
                <p>${category.works.length} Karya</p>
            </div>
        `;
    });
    folderContainer.innerHTML = folderHTML;
}
document.addEventListener('DOMContentLoaded', initPortfolio);

// ---------------------------------------------------
// 2. FUNGSI BUKA FOLDER
// ---------------------------------------------------
function openFolder(index) {
    const category = portfolioData[index];
    currentWorks = category.works;
    
    folderTitle.innerText = category.folderName;
    
    let worksHTML = '';
    category.works.forEach((work, workIndex) => {
        worksHTML += `
            <div class="gallery-item" onclick="openLightbox(${workIndex})">
                <img src="${work.img}" alt="${work.title}">
                <div class="gallery-item-overlay">
                    <div>
                        <h4>${work.title}</h4>
                        <span>${work.desc}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    folderContentGrid.innerHTML = worksHTML;
    folderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeFolderModal() {
    folderModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// ---------------------------------------------------
// 3. FUNGSI LIGHTBOX (TAMPILAN BESAR)
// ---------------------------------------------------
function openLightbox(index) {
    currentIndex = index;
    updateLightboxContent();
    lightboxModal.classList.add('active');
}

function closeLightbox() {
    lightboxModal.classList.remove('active');
    
    // Pause video jika sedang ditutup
    const videoEl = document.getElementById('lightbox-video');
    if (videoEl) {
        videoEl.pause();
    }
}

function updateLightboxContent() {
    const work = currentWorks[currentIndex];
    lightboxTitle.innerText = work.title;
    lightboxDesc.innerText = work.desc;

    // Container parent (untuk menaruh video)
    const container = lightboxImg.parentElement;

    // 1. Sembunyikan gambar utama terlebih dahulu
    lightboxImg.style.display = 'none';

    // 2. Cek apakah ada elemen video, jika ada sembunyikan/dihilangkan
    let videoEl = document.getElementById('lightbox-video');
    
    if (work.type === 'video') {
        // --- LOGIKA VIDEO ---
        
        // Jika elemen video belum ada, buat baru
        if (!videoEl) {
            videoEl = document.createElement('video');
            videoEl.id = 'lightbox-video';
            videoEl.controls = true; // Tampilkan tombol play/pause
            videoEl.playsInline = true;
            container.appendChild(videoEl); // Masukkan ke dalam container
        }

        // Set sumber video dan tampilkan
        videoEl.src = work.src;
        videoEl.style.display = 'block';
        videoEl.load(); // Muat video
        
    } else {
        // --- LOGIKA GAMBAR ---
        
        // Jika bergeser ke gambar, sembunyikan video dan pause
        if (videoEl) {
            videoEl.pause();
            videoEl.style.display = 'none';
        }

        // Tampilkan gambar
        lightboxImg.src = work.img;
        lightboxImg.style.display = 'block';
        lightboxImg.style.opacity = 0;
        setTimeout(() => { lightboxImg.style.opacity = 1; }, 100);
    }
}

function changeSlide(direction) {
    // Pause video dulu jika sedang jalan sebelum pindah slide
    const videoEl = document.getElementById('lightbox-video');
    if (videoEl) videoEl.pause();

    currentIndex += direction;
    if (currentIndex >= currentWorks.length) currentIndex = 0;
    else if (currentIndex < 0) currentIndex = currentWorks.length - 1;
    updateLightboxContent();
}

// ---------------------------------------------------
// 4. EVENT LISTENERS (KLIK & SWIPE)
// ---------------------------------------------------
// Swipe Gesture
let touchStartX = 0;
lightboxModal.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; }, false);
lightboxModal.addEventListener('touchend', e => {
    let touchEndX = e.changedTouches[0].screenX;
    if (touchEndX < touchStartX - 50) changeSlide(1); // Swipe Left
    if (touchEndX > touchStartX + 50) changeSlide(-1); // Swipe Right
}, false);

// Klik area luar untuk tutup
folderModal.addEventListener('click', (e) => { if (e.target === folderModal) closeFolderModal(); });
lightboxModal.addEventListener('click', (e) => {
    if (e.target === lightboxModal || e.target.classList.contains('lightbox-img-container')) closeLightbox();
});

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (lightboxModal.classList.contains('active')) {
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'ArrowRight') changeSlide(1);
        if (e.key === 'Escape') closeLightbox();
    }
    if (folderModal.classList.contains('active')) {
        if (e.key === 'Escape') closeFolderModal();
    }
});

// ---------------------------------------------------
// 5. FUNGSI DASAR WEBSITE
// ---------------------------------------------------
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('nav a');

menuToggle.addEventListener('click', () => navLinks.classList.toggle('active'));

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if(targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('active');
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 200) current = section.getAttribute('id');
    });
    links.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') == '#' + current) link.classList.add('active');
    });
});

const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    alert(`Terima kasih ${name}! Pesan Anda telah terkirim.`);
    contactForm.reset();
});
/* ===========================
   FORM CONTACT - FORMSPREE
=========================== */

document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");

    if (form) {

        form.addEventListener("submit", async function (event) {

            event.preventDefault();

            const data = new FormData(form);

            try {

                const response = await fetch(
                    form.action,
                    {
                        method: form.method,
                        body: data,
                        headers: {
                            'Accept': 'application/json'
                        }
                    }
                );

                if (response.ok) {

                    status.innerHTML =
                        "✅ Pesan berhasil dikirim! Saya akan segera membalas.";

                    status.style.color = "#22c55e";

                    form.reset();

                } else {

                    const result = await response.json();

                    if (result.errors) {

                        status.innerHTML =
                            "❌ " +
                            result.errors
                                .map(error => error.message)
                                .join(", ");

                    } else {

                        status.innerHTML =
                            "❌ Terjadi kesalahan saat mengirim pesan.";

                    }

                    status.style.color = "#ef4444";

                }

            } catch (error) {

                status.innerHTML =
                    "❌ Tidak dapat mengirim pesan. Periksa koneksi internet.";

                status.style.color = "#ef4444";

            }

        });

    }

});
