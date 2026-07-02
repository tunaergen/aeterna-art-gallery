// ÜRÜN VERİTABANI (GERÇEKÇİ REPRODÜKSİYON FİYATLARIYLA)
const products = {
    // Popüler ürünler (çok satanlar)
    popular: [
        { artist: "Johannes Vermeer", title: "İnci Küpeli Kız", year: 1665, price: 3314, oldPrice: 3899, discount: 15, type: "tablo", badge: null, img: "inci-kupeli-kiz.png", detailPage: "inci-kupeli-kiz.html" },
        { artist: "Vincent van Gogh", title: "Yıldızlı Gece", year: 1889, price: 5499, oldPrice: null, discount: null, type: "tablo", badge: null, img: "yildizli-gece.png", detailPage: "yildizli-gece.html" },
        { artist: "Leonardo da Vinci", title: "Mona Lisa", year: 1503, price: 4999, oldPrice: null, discount: null, type: "tablo", badge: "sold", img: "mona-lisa.png", detailPage: "mona-lisa.html" },
        { artist: "Edvard Munch", title: "Çığlık", year: 1893, price: 4080, oldPrice: 4799, discount: 15, type: "tablo", badge: null, img: "ciglik.png", detailPage: "ciglik.html" }
    ],
    
    // RÖNESANS DÖNEMİ
    ronesans: {
        tablolar: [
            { artist: "Leonardo da Vinci", title: "Mona Lisa", year: 1503, price: 4999, oldPrice: null, discount: null, type: "tablo", badge: "sold", img: "mona-lisa.png", detailPage: "mona-lisa.html" },
            { artist: "Leonardo da Vinci", title: "Son Akşam Yemeği", year: 1498, price: 4499, oldPrice: 5292, discount: 15, type: "tablo", badge: null, img: "son-aksam-yemegi.png", detailPage: "son-aksam-yemegi.html" },
            { artist: "Michelangelo", title: "Adem'in Yaratılışı", year: 1512, price: 4943, oldPrice: null, discount: null, type: "tablo", badge: null, img: "ademin-yaratilisi.png", detailPage: "ademin-yaratilisi.html" },
            { artist: "Raphael", title: "Atina Okulu", year: 1511, price: 5354, oldPrice: 6299, discount: 15, type: "tablo", badge: null, img: "atina-okulu.png", detailPage: "atina-okulu.html" }
        ]
    },

    // BAROK DÖNEMİ
    barok: {
        tablolar: [
            { artist: "Caravaggio", title: "Aziz Matta'nın Çağrısı", year: 1600, price: 3499, oldPrice: 4117, discount: 15, type: "tablo", badge: null, img: "aziz-matta.png", detailPage: "aziz-matta.html" },
            { artist: "Rembrandt", title: "Gece Devriyesi", year: 1642, price: 5999, oldPrice: null, discount: null, type: "tablo", badge: null, img: "gece-devriyesi.png", detailPage: "gece-devriyesi.html" },
            { artist: "Johannes Vermeer", title: "İnci Küpeli Kız", year: 1665, price: 3314, oldPrice: 3899, discount: 15, type: "tablo", badge: null, img: "inci-kupeli-kiz.png", detailPage: "inci-kupeli-kiz.html"},
            { artist: "Peter Paul Rubens", title: "Üç Güzeller", year: 1635, price: 3899, oldPrice: null, discount: null, type: "tablo", badge: "sold", img: "uc-guzeller.png", detailPage: "uc-guzeller.html" }
        ]
    }, 
    
    // ROKOKO DÖNEMİ
    rokoko: {
        tablolar: [
            { artist: "Jean-Honoré Fragonard", title: "Salıncak", year: 1767, price: 3699, oldPrice: 4351, discount: 15, type: "tablo", badge: null, img: "salincak.png", detailPage: "salincak.html" },
            { artist: "François Boucher", title: "Madame de Pompadour", year: 1756, price: 3499, oldPrice: null, discount: null, type: "tablo", badge: "sold", img: "madame-pompadour.png", detailPage: "madame-pompadour.html" },
            { artist: "Jean-Antoine Watteau", title: "Cythera'ya Hac", year: 1717, price: 3199, oldPrice: null, discount: null, type: "tablo", badge: null, img: "cytheraya-hac.png", detailPage: "cytheraya-hac.html" },
            { artist: "Giovanni Tiepolo", title: "Kleopatra'nın Şöleni", year: 1744, price: 4299, oldPrice: null, discount: null, type: "tablo", badge: null, img: "kleopatra.png", detailPage: "kleopatra.html" }
        ]
    },
    
    // NEOKLASİZM
    noklasik: {
        tablolar: [
            { artist: "Jacques-Louis David", title: "Horatii'lerin Yemini", year: 1784, price: 4999, oldPrice: null, discount: null, type: "tablo", badge: null, img: "horatiiler.png", detailPage: "horatiiler.html" },
            { artist: "Jean-Auguste Ingres", title: "Büyük Odalık", year: 1814, price: 3655, oldPrice: 4299, discount: 15, type: "tablo", badge: null, img: "buyuk-odalik.png", detailPage: "buyuk-odalik.html" },
            { artist: "Élisabeth Vigée Le Brun", title: "Marie Antoinette Portresi", year: 1783, price: 4499, oldPrice: null, discount: null, type: "tablo", badge: null, img: "marie-antoinette.png", detailPage: "marie-antoinette.html" },
            { artist: "Benjamin West", title: "Wolfe'un Ölümü", year: 1770, price: 4199, oldPrice: null, discount: null, type: "tablo", badge: null, img: "wolfeun-olum.png", detailPage: "wolfeun-olum.html" }
        ]
    },
    
    // ROMANTİZM
    romantizm: {
        tablolar: [
            { artist: "Eugène Delacroix", title: "Halka Yol Gösteren Özgürlük", year: 1830, price: 6499, oldPrice: null, discount: null, type: "tablo", badge: null, img: "ozgurluk.png", detailPage: "ozgurluk.html" },
            { artist: "Caspar David Friedrich", title: "Sis Denizi Üzerinde Gezgin", year: 1818, price: 4399, oldPrice: 5175, discount: 15, type: "tablo", badge: null, img: "gezgin.png", detailPage: "gezgin.html" },
            { artist: "J.M.W. Turner", title: "Savaşçı Temeraire", year: 1839, price: 5299, oldPrice: null, discount: null, type: "tablo", badge: null, img: "temeraire.png", detailPage: "temeraire.html" },
            { artist: "Théodore Géricault", title: "Medusa'nın Salı", year: 1819, price: 7499, oldPrice: null, discount: null, type: "tablo", badge: "sold", img: "medusa.png", detailPage: "medusa.html" }
        ]
    },
    
    // İZLENİMCİLİK
    izlenimcilik: {
        tablolar: [
            { artist: "Claude Monet", title: "Nilüferler", year: 1906, price: 5999, oldPrice: null, discount: null, type: "tablo", badge: "sold", img: "niluferler.png", detailPage: "niluferler.html" },
            { artist: "Pierre-Auguste Renoir", title: "Moulin de la Galette", year: 1876, price: 6499, oldPrice: null, discount: null, type: "tablo", badge: null, img: "moulin.png", detailPage: "moulin.html" },
            { artist: "Edgar Degas", title: "Dans Sınıfı", year: 1874, price: 4899, oldPrice: null, discount: null, type: "tablo", badge: null, img: "dans-sinifi.png", detailPage: "dans-sinifi.html" },
            { artist: "Berthe Morisot", title: "Beşik", year: 1872, price: 3999, oldPrice: null, discount: null, type: "tablo", badge: null, img: "besik.png", detailPage: "besik.html" }
        ]
    }
};

// SEPET SAYACI
let cartCount = 0;

// SAYFA YÜKLENDİĞİNDE
document.addEventListener('DOMContentLoaded', function() {
    // Popüler ürünleri yükle
    loadPopularProducts();
    
    // Tüm dönemleri yükle
    loadAllPeriods();
    
    // Back to top butonu kontrolü
    const backToTop = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });
    
    // Kategori linklerine tıklama olayı ekle
    document.querySelectorAll('nav a, .footer-col a[href^="#"]').forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

// POPÜLER ÜRÜNLERİ YÜKLE
function loadPopularProducts() {
    const grid = document.getElementById('popular-products');
    if (!grid) return;
    
    grid.innerHTML = products.popular.map(item => createArtCard(item)).join('');
}

// TÜM DÖNEMLERİ YÜKLE
function loadAllPeriods() {
    // Rönesans
    loadItems('ronesans-tablolar', products.ronesans.tablolar);
    
    // Barok
    loadItems('barok-tablolar', products.barok.tablolar);
    
    // Rokoko
    loadItems('rokoko-tablolar', products.rokoko.tablolar);
    
    // Neoklasik
    loadItems('noklasik-tablolar', products.noklasik.tablolar);
    
    // Romantizm
    loadItems('romantizm-tablolar', products.romantizm.tablolar);
    
    // İzlenimcilik
    loadItems('izlenimcilik-tablolar', products.izlenimcilik.tablolar);
}

// BELİRLİ BİR GRUBA ÜRÜNLERİ YÜKLE
function loadItems(elementId, items) {
    const grid = document.getElementById(elementId);
    if (!grid) return;
    
    grid.innerHTML = items.map(item => createArtCard(item)).join('');
}

// ART KARTI OLUŞTUR
function createArtCard(item) {
    const imgHtml = item.img 
        ? `<img src="${item.img}" alt="${item.title}" class="art-img" loading="lazy">`
        : `<div class="art-placeholder" style="background:${item.bg || '#1a1a1a'}">
            <span style="font-size:4rem;">${item.emoji || '🎨'}</span>
           </div>`;
    
    // İndirim badge'i
    let badgeHtml = '';
    if (item.badge === 'sold') {
        badgeHtml = '<div class="art-badge sold">Satıldı</div>';
    } else if (item.discount) {
        badgeHtml = `<div class="art-badge discount">%${item.discount} İndirim</div>`;
    } else if (item.badge === 'available') {
        badgeHtml = '<div class="art-badge available">Satılık</div>';
    }
    
    // Fiyat HTML'i (indirimli veya normal)
    let priceHtml = '';
    if (item.oldPrice) {
        priceHtml = `
            <div class="price-wrapper">
                <span class="art-old-price">₺${item.oldPrice.toLocaleString('tr-TR')}</span>
                <span class="art-new-price">₺${item.price.toLocaleString('tr-TR')}</span>
            </div>
        `;
    } else {
        priceHtml = `<span class="art-price">₺${item.price.toLocaleString('tr-TR')}</span>`;
    }
    
    // Favori durumunu kontrol et
    const favorites = JSON.parse(localStorage.getItem('aeterna_favorites') || '[]');
    const isFav = favorites.includes(item.title);
    
    // Özel karakterleri temizle
    const safeTitle = item.title.replace(/'/g, "\\'").replace(/"/g, '&quot;');
    
    return `
        <div class="art-card" onclick="window.location.href='${item.detailPage || 'detay.html?eser=' + encodeURIComponent(item.title)}'">
            <div class="art-img-wrap ${item.type === 'heykel' ? 'sculpture-wrap' : ''}">
                ${imgHtml}
            </div>
            ${badgeHtml}
            <!-- FAVORİ BUTONU -->
            <button class="fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation();toggleFavorite('${safeTitle}')">
                <i class="fas fa-heart"></i>
            </button>
            <div class="art-info">
                <div class="art-artist">${item.artist}</div>
                <div class="art-title">${item.title}</div>
                <div class="art-meta">${item.year} · ${item.type === 'tablo' ? 'Kanvas Tablo' : 'Heykel'}</div>
                <div class="art-price-row">
                    ${priceHtml}
                    ${item.badge === 'sold' 
                        ? `<button class="btn-add-cart-corner sold-out" disabled style="background:#5a5a5a; color:#8a8a8a; opacity:0.6; cursor:not-allowed; pointer-events:none;">
                            <i class="fas fa-times-circle"></i> Stokta Yok
                        </button>`
                        : `<button class="btn-add-cart-corner" onclick="event.stopPropagation();addToCart('${safeTitle}')">
                            <i class="fas fa-shopping-cart"></i> Sepete Ekle
                        </button>`
                    }
                </div>
            </div>
        </div>
    `;
}

// ===== FAVORİ SİSTEMİ =====

// Favorilere ekle/çıkar
function toggleFavorite(title) {
    let favorites = JSON.parse(localStorage.getItem('aeterna_favorites') || '[]');
    const index = favorites.indexOf(title);
    
    if (index > -1) {
        favorites.splice(index, 1);
        showToast(`"${title}" favorilerden çıkarıldı`);
    } else {
        favorites.push(title);
        showToast(`"${title}" favorilere eklendi`);
    }
    
    localStorage.setItem('aeterna_favorites', JSON.stringify(favorites));
    
    // Sayfadaki ilgili butonun durumunu güncelle
    updateFavoriteButtons();
}

// Tüm favori butonlarının durumunu güncelle
function updateFavoriteButtons() {
    const favorites = JSON.parse(localStorage.getItem('aeterna_favorites') || '[]');
    document.querySelectorAll('.fav-btn').forEach(btn => {
        const card = btn.closest('.art-card');
        if (card) {
            const titleElement = card.querySelector('.art-title');
            if (titleElement) {
                const title = titleElement.innerText;
                if (favorites.includes(title)) {
                    btn.classList.add('active');
                } else {
                    btn.classList.remove('active');
                }
            }
        }
    });
}

// SEPETE EKLE
function addToCart(title) {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    showToast(`"${title}" sepete eklendi!`);
}

// TOAST BİLDİRİM
let toastTimer;
function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');
    
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// AOS'u başlat
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    offset: 120
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


function addToCart(title) {
    // Ürünü products verilerinden bul
    let foundProduct = null;
    
    // Önce popular'da ara
    foundProduct = products.popular.find(p => p.title === title);
    
    // Bulamadıysa tüm dönemlerde ara
    if (!foundProduct) {
        const allPeriods = ['ronesans', 'barok', 'rokoko', 'noklasik', 'romantizm', 'izlenimcilik'];
        for (const period of allPeriods) {
            const periodData = products[period];
            if (periodData && periodData.tablolar) {
                foundProduct = periodData.tablolar.find(p => p.title === title);
                if (foundProduct) break;
            }
        }
    }
    
    if (foundProduct) {
        // Sepeti localStorage'dan al
        let cart = JSON.parse(localStorage.getItem('aeterna_cart') || '[]');
        
        // Aynı ürün var mı kontrol et
        const existingIndex = cart.findIndex(item => item.title === foundProduct.title);
        
        if (existingIndex > -1) {
            cart[existingIndex].quantity += 1;
        } else {
            cart.push({
                title: foundProduct.title,
                artist: foundProduct.artist,
                year: foundProduct.year,
                price: foundProduct.oldPrice ? foundProduct.price : foundProduct.price,
                img: foundProduct.img,
                detailPage: foundProduct.detailPage,
                quantity: 1
            });
        }
        
        localStorage.setItem('aeterna_cart', JSON.stringify(cart));
        updateCartCount();
        showToast(`"${title}" sepete eklendi!`);
    } else {
        showToast(`Ürün bulunamadı!`);
    }
}

// Sepet sayısını güncelle
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('aeterna_cart') || '[]');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountSpan = document.getElementById('cart-count');
    if (cartCountSpan) cartCountSpan.textContent = totalItems;
}

// Sayfa yüklendiğinde sepet sayısını göster
document.addEventListener('DOMContentLoaded', function() {
    updateCartCount();

});

// Kullanıcı dropdown menüsü
document.addEventListener('DOMContentLoaded', function() {
    const userBtn = document.getElementById('userBtn');
    const userDropdown = document.getElementById('userDropdown');
    
    if (userBtn && userDropdown) {
        // Butona tıklayınca dropdown'ı aç/kapa
        userBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            userDropdown.classList.toggle('active');
        });
        
        // Sayfanın herhangi bir yerine tıklayınca dropdown'ı kapat
        document.addEventListener('click', function(e) {
            if (!userBtn.contains(e.target) && !userDropdown.contains(e.target)) {
                userDropdown.classList.remove('active');
            }
        });
        
        // ESC tuşuna basınca dropdown'ı kapat
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && userDropdown.classList.contains('active')) {
                userDropdown.classList.remove('active');
            }
        });
    }
});

// ===== KULLANICI GİRİŞ KONTROLÜ =====
function updateUserUI() {
    const currentUser = localStorage.getItem('aeterna_current_user');
    const userBtn = document.getElementById('userBtn');
    const dropdownItems = document.querySelectorAll('.dropdown-menu-items li a');
    
    if (currentUser) {
        const user = JSON.parse(currentUser);
        
        // Kullanıcı butonunu değiştir (profil resmi veya ismin ilk harfi)
        if (userBtn) {
            userBtn.innerHTML = `<i class="fas fa-user-check"></i>`;
            userBtn.style.color = 'var(--gold)';
        }
        
        // Dropdown menüde Giriş Yap ve Kayıt Ol'u gizle, Çıkış Yap'ı göster
        dropdownItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === 'giris.html' || href === 'kayit.html') {
                item.style.display = 'none';
            }
            if (item.id === 'logoutBtn') {
                item.style.display = 'flex';
            }
        });
    } else {
        // Kullanıcı giriş yapmamışsa normal görünüm
        if (userBtn) {
            userBtn.innerHTML = `<i class="far fa-user-circle"></i>`;
            userBtn.style.color = '';
        }
        
        dropdownItems.forEach(item => {
            const href = item.getAttribute('href');
            if (href === 'giris.html' || href === 'kayit.html') {
                item.style.display = 'flex';
            }
            if (item.id === 'logoutBtn') {
                item.style.display = 'none';
            }
        });
    }
}

// ===== ÇIKIŞ YAP =====
function logout() {
    localStorage.removeItem('aeterna_current_user');
    updateUserUI();
    showToast('Çıkış yapıldı!');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 500);
}

// Sayfa her yüklendiğinde kullanıcı durumunu kontrol et
document.addEventListener('DOMContentLoaded', function() {
    updateUserUI();
    // ... diğer kodlar ...
});

// Arama ve filtreleme
document.addEventListener('DOMContentLoaded', function() {
    const searchBtn = document.getElementById('searchBtn');
    const searchDropdown = document.getElementById('searchDropdown');
    const closeSearch = document.getElementById('closeSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    let currentFilter = 'all';
    let allProducts = [];
    
    function collectAllProducts() {
        const productsList = [];
        const seenTitles = new Set();
        
        // Rönesans
        if (products.ronesans && products.ronesans.tablolar) {
            products.ronesans.tablolar.forEach(p => {
                if (!seenTitles.has(p.title)) {
                    seenTitles.add(p.title);
                    productsList.push({...p, period: 'ronesans'});
                }
            });
        }
        
        // Barok
        if (products.barok && products.barok.tablolar) {
            products.barok.tablolar.forEach(p => {
                if (!seenTitles.has(p.title)) {
                    seenTitles.add(p.title);
                    productsList.push({...p, period: 'barok'});
                }
            });
        }
        
        // Rokoko
        if (products.rokoko && products.rokoko.tablolar) {
            products.rokoko.tablolar.forEach(p => {
                if (!seenTitles.has(p.title)) {
                    seenTitles.add(p.title);
                    productsList.push({...p, period: 'rokoko'});
                }
            });
        }
        
        // Neoklasik
        if (products.noklasik && products.noklasik.tablolar) {
            products.noklasik.tablolar.forEach(p => {
                if (!seenTitles.has(p.title)) {
                    seenTitles.add(p.title);
                    productsList.push({...p, period: 'noklasik'});
                }
            });
        }
        
        // Romantizm
        if (products.romantizm && products.romantizm.tablolar) {
            products.romantizm.tablolar.forEach(p => {
                if (!seenTitles.has(p.title)) {
                    seenTitles.add(p.title);
                    productsList.push({...p, period: 'romantizm'});
                }
            });
        }
        
        // İzlenimcilik
        if (products.izlenimcilik && products.izlenimcilik.tablolar) {
            products.izlenimcilik.tablolar.forEach(p => {
                if (!seenTitles.has(p.title)) {
                    seenTitles.add(p.title);
                    productsList.push({...p, period: 'izlenimcilik'});
                }
            });
        }
        
        return productsList;
    }
    
    // Arama yap
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        let filtered = allProducts;
        
        if (currentFilter !== 'all') {
            filtered = filtered.filter(p => p.period === currentFilter);
        }
        
        if (query) {
            const searchTerms = query.split(' ');
            filtered = filtered.filter(p => {
                const searchText = (p.title + ' ' + p.artist).toLowerCase();
                return searchTerms.every(term => searchText.includes(term));
            });
        }
        
        displayResults(filtered, query);
    }
    
    // Sonuçları göster (YÖNLENDİRME EKLENDİ)
    function displayResults(results, query) {
        if (results.length === 0) {
            searchResults.innerHTML = `<p class="search-hint">"${query || 'eser'}" bulunamadı</p>`;
            return;
        }
        
        // Hazır detay sayfası olan eserler (TÜRKÇE İSİMLERLE)
        const detailPages = {
            "İnci Küpeli Kız": "inci-kupeli-kiz.html",
            "Yıldızlı Gece": "yildizli-gece.html",
            "Mona Lisa": "mona-lisa.html",
            "Çığlık": "ciglik.html"
        };
        
        searchResults.innerHTML = results.slice(0, 10).map(item => {
            const detailUrl = detailPages[item.title] ? detailPages[item.title] : `detay.html?eser=${encodeURIComponent(item.title)}`;
            return `
                <div class="search-result-item" onclick="window.location.href='${detailUrl}'">
                    <div class="result-title">${item.title}</div>
                    <div class="result-artist">${item.artist} · ${item.year}</div>
                </div>
            `;
        }).join('');
        
        if (results.length > 10) {
            searchResults.innerHTML += `<p class="search-hint">+${results.length - 10} sonuç daha...</p>`;
        }
    }
    
    // Aç/kapa işlemleri
    if (searchBtn && searchDropdown) {
        searchBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            searchDropdown.classList.toggle('active');
            if (searchDropdown.classList.contains('active')) {
                allProducts = collectAllProducts();
                searchInput.value = '';
                currentFilter = 'all';
                filterBtns.forEach(btn => {
                    if (btn.dataset.period === 'all') btn.classList.add('active');
                    else btn.classList.remove('active');
                });
                searchResults.innerHTML = '<p class="search-hint">Arama yapmak için yazın...</p>';
                searchInput.focus();
            }
        });
        
        if (closeSearch) {
            closeSearch.addEventListener('click', () => {
                searchDropdown.classList.remove('active');
            });
        }
        
        document.addEventListener('click', (e) => {
            if (!searchBtn.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.classList.remove('active');
            }
        });
        
        searchInput.addEventListener('input', performSearch);
        
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                currentFilter = btn.dataset.period;
                performSearch();
            });
        });
    }
});

// Destek Chat (Intent-based - hazır soru-cevap)
document.addEventListener('DOMContentLoaded', function() {
    const supportBtn = document.getElementById('supportBtn');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const chatInput = document.getElementById('chatInput');
    const sendChatBtn = document.getElementById('sendChatBtn');
    const chatMessages = document.getElementById('chatMessages');
    
    // Soru-cevap havuzu (intent-based)
    const botResponses = {
        // Giriş ve Kayıt ile ilgili cevaplar
        'giriş yap': "Siteye giriş yapmak için: 1) Sağ üst köşedeki 👤 ikonuna tıklayın, 2) 'Giriş Yap' seçeneğini seçin, 3) E-posta ve şifrenizi girin. Hesabınız yoksa 'Kayıt Ol'butonunu kullanabilirsiniz.",
        'giriş': "ÆTERNA hesabınıza giriş yapmak için sağ üst köşedeki kullanıcı ikonuna tıklayıp 'Giriş Yap' butonunu seçin. E-posta adresiniz ve şifrenizle kolayca giriş yapabilirsiniz.",
        'kayıt ol': "Yeni hesap oluşturmak için: 1) Sağ üstteki 👤 ikonuna tıklayın, 2) 'Kayıt Ol' butonunu seçin, 3) Ad, e-posta ve şifre bilgilerinizi girin. Kayıt olduktan sonra otomatik olarak giriş yapabilirsiniz.",
        'kayıt': "ÆTERNA'ya üye olmak tamamen ücretsizdir! Üye olduğunuzda siparişlerinizi takip edebilir, favori eserlerinizi kaydedebilir ve özel kampanyalardan haberdar olabilirsiniz. Kayıt olmak için sağ üstteki 👤 ikonuna tıklamanız yeterli.",
        'şifremi unuttum': "Şifrenizi mi unuttunuz? 'Giriş Yap' butonunun altında bulunan 'Şifremi Unuttum' linkine tıklayarak şifre sıfırlama e-postası alabilirsiniz. Yardıma ihtiyacınız varsa info@aeterna.art adresinden bize ulaşın.",
        'hesabım': "Hesabınıza giriş yaptıktan sonra sağ üstteki kullanıcı ikonuna tıklayarak siparişlerim, favorilerim, adres bilgilerim ve hesap ayarlarıma erişebilirsiniz.",
        'çıkış yap': "Hesabınızdan çıkış yapmak için sağ üst köşedeki kullanıcı ikonuna tıklayın ve açılan menüden 'Çıkış Yap' butonunu seçin. Güvenli çıkış için her zaman bu yöntemi kullanmanızı öneririz.",

        // Kargo - 'kargo takip' için ayrı cevap
        'kargo takip': "Siparişiniz kargoya verildiğinde takip numaranız e-posta ile gönderilecektir. Kargonuzu MNG Kargo, Aras Kargo veya tercih ettiğiniz firmanın web sitesinden takip edebilirsiniz.",
        'kargo': "Kargo seçeneklerimiz: MNG Kargo (Ücretsiz), Aras Kargo (₺49,90), Yurtiçi Kargo (₺29,90), PTT Kargo (₺19,90). Siparişiniz onaylandıktan sonra 2-5 iş günü içinde teslim edilir.",
        'teslimat': "Tahmini teslimat süremiz 2-5 iş günüdür. Kargo tercihinize göre süre değişebilir.",
        
        // İade - 'iade politikası' için ayrı cevap
        'iade politikası': "Satın aldığınız eserden memnun kalmazsanız, teslim tarihinden itibaren 14 gün içinde iade edebilirsiniz. İade işlemleri için müşteri hizmetlerimize ulaşmanız yeterlidir.",
        'iade': "Ürünleri 14 gün içinde iade edebilirsiniz. İade talebi için müşteri hizmetlerimize ulaşın.",
        
        // Ödeme
        'ödeme': "Kredi kartı, banka kartı ve havale/EFT ile ödeme yapabilirsiniz. Tüm ödemeler 256-bit SSL ile güvence altındadır.",
        'taksit': "Kredi kartınıza 3 taksite kadar imkan sunuyoruz.",
        
        // İletişim
        'iletişim': "Bize info@aeterna.art adresinden veya +90 212 555 0101 numaralı telefondan ulaşabilirsiniz.",
        'mağaza': "Merkez mağazamız İstanbul'da bulunmaktadır. Hafta içi 09:00-17:30, Cumartesi 09:00-17:30, Pazar 11:00-19:00 saatleri arasında ziyaret edebilirsiniz.",
        
        // Eserler
        'eser': "Tablolarımız usta ressamlar tarafından el işçiliği ile yağlı boya olarak üretilmektedir. Dijital baskı bulunmamaktadır.",
        'orijinallik': "Her eser orijinallik sertifikası ile birlikte teslim edilmektedir.",
        'özel sipariş': "İstediğiniz boyutta ve ölçülerde özel sipariş alabiliriz. Detay için bize ulaşın.",
        
        // Varsayılan
        'merhaba': "Merhaba! Size nasıl yardımcı olabilirim? Kargo, iade, ödeme veya eserler hakkında sorularınızı cevaplayabilirim.",
        'yardım': "Yardım alabileceğiniz konular: Kargo, İade, Ödeme, İletişim, Eserler, Orijinallik Sertifikası",
        'teşekkür': "Rica ederim! Başka bir sorunuz varsa lütfen sormaktan çekinmeyin. İyi günler dilerim!",
        'güle güle': "Görüşmek üzere! Sanat dolu günler dilerim."
    };
    
    function getBotResponse(message) {
        const lowerMsg = message.toLowerCase().trim();
        
        // Anahtar kelime eşleştirmesi
        for (const [key, response] of Object.entries(botResponses)) {
            if (lowerMsg.includes(key)) {
                return response;
            }
        }
        
        return 'Üzgünüm, bu konuda size yardımcı olamıyorum. Lütfen info@aeterna.art adresine e-posta gönderin veya müşteri hizmetlerimizi arayın.';
    }
    
    function addMessage(text, isUser = false) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `chat-message ${isUser ? 'user' : 'bot'}`;
        messageDiv.textContent = text;
        chatMessages.appendChild(messageDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }
    
    function sendMessage() {
        const message = chatInput.value.trim();
        if (!message) return;
        
        addMessage(message, true);
        chatInput.value = '';
        
        // Bot yanıtı gecikmeli göster (gerçekçilik için)
        setTimeout(() => {
            const response = getBotResponse(message);
            addMessage(response, false);
        }, 500);
    }
    
    // Event listeners
    if (supportBtn && chatWindow) {
        supportBtn.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
            if (chatWindow.classList.contains('active') && chatMessages.children.length === 1) {
                // Hoş geldin mesajı zaten var
            }
        });
        
        if (closeChat) {
            closeChat.addEventListener('click', () => {
                chatWindow.classList.remove('active');
            });
        }
        
        sendChatBtn.addEventListener('click', sendMessage);
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') sendMessage();
        });
        
        document.addEventListener('click', (e) => {
            if (!supportBtn.contains(e.target) && !chatWindow.contains(e.target)) {
                chatWindow.classList.remove('active');
            }
        });
    }
});

// ===== ERİŞİLEBİLİRLİK ARAMA PANELİ =====
document.addEventListener('DOMContentLoaded', function() {
    const triggerBtn = document.getElementById('accessibilityTriggerBtn');
    const overlay = document.getElementById('accessibilityOverlay');
    const closeBtn = document.getElementById('accessibilityClose');
    const searchInput = document.getElementById('accessibilityInput');
    const resultsContainer = document.getElementById('accessibilityResults');
    const filterChips = document.querySelectorAll('.accessibility-filter-chip');
    
    if (!triggerBtn || !overlay) return;
    
    let currentFilter = 'all';
    let allArtworks = [];
    let currentSelectedIndex = -1;
    
    function collectAllArtworks() {
        allArtworks = [];
        const seenTitles = new Set();
        
        // Rönesans
        if (products.ronesans && products.ronesans.tablolar) {
            products.ronesans.tablolar.forEach(item => {
                if (!seenTitles.has(item.title)) {
                    seenTitles.add(item.title);
                    allArtworks.push({
                        title: item.title,
                        artist: item.artist,
                        year: item.year,
                        period: "Rönesans",
                        periodKey: "rönesans",
                        price: item.price
                    });
                }
            });
        }
        
        // Barok
        if (products.barok && products.barok.tablolar) {
            products.barok.tablolar.forEach(item => {
                if (!seenTitles.has(item.title)) {
                    seenTitles.add(item.title);
                    allArtworks.push({
                        title: item.title,
                        artist: item.artist,
                        year: item.year,
                        period: "Barok",
                        periodKey: "barok",
                        price: item.price
                    });
                }
            });
        }
        
        // Rokoko
        if (products.rokoko && products.rokoko.tablolar) {
            products.rokoko.tablolar.forEach(item => {
                if (!seenTitles.has(item.title)) {
                    seenTitles.add(item.title);
                    allArtworks.push({
                        title: item.title,
                        artist: item.artist,
                        year: item.year,
                        period: "Rokoko",
                        periodKey: "rokoko",
                        price: item.price
                    });
                }
            });
        }
        
        // Neoklasizm
        if (products.noklasik && products.noklasik.tablolar) {
            products.noklasik.tablolar.forEach(item => {
                if (!seenTitles.has(item.title)) {
                    seenTitles.add(item.title);
                    allArtworks.push({
                        title: item.title,
                        artist: item.artist,
                        year: item.year,
                        period: "Neoklasizm",
                        periodKey: "neoklasizm",
                        price: item.price
                    });
                }
            });
        }
        
        // Romantizm
        if (products.romantizm && products.romantizm.tablolar) {
            products.romantizm.tablolar.forEach(item => {
                if (!seenTitles.has(item.title)) {
                    seenTitles.add(item.title);
                    allArtworks.push({
                        title: item.title,
                        artist: item.artist,
                        year: item.year,
                        period: "Romantizm",
                        periodKey: "romantizm",
                        price: item.price
                    });
                }
            });
        }
        
        // İzlenimcilik
        if (products.izlenimcilik && products.izlenimcilik.tablolar) {
            products.izlenimcilik.tablolar.forEach(item => {
                if (!seenTitles.has(item.title)) {
                    seenTitles.add(item.title);
                    allArtworks.push({
                        title: item.title,
                        artist: item.artist,
                        year: item.year,
                        period: "İzlenimcilik",
                        periodKey: "izlenimcilik",
                        price: item.price
                    });
                }
            });
        }
    }
    
    function performSearch() {
        const query = searchInput.value.toLowerCase().trim();
        let filtered = allArtworks;
        if (currentFilter !== 'all') {
            filtered = filtered.filter(item => item.periodKey === currentFilter);
        }
        if (query) {
            filtered = filtered.filter(item => 
                item.title.toLowerCase().includes(query) ||
                (item.artist && item.artist.toLowerCase().includes(query)) ||
                item.period.toLowerCase().includes(query)
            );
        }
        currentSelectedIndex = -1;
        
        if (filtered.length === 0) {
            resultsContainer.innerHTML = `<div class="accessibility-placeholder"><i class="fas fa-frown"></i><p>"${query || 'Aradığınız'}" için sonuç bulunamadı</p></div>`;
            return;
        }
        
        resultsContainer.innerHTML = filtered.map((item, idx) => `
            <div class="accessibility-result-item" data-period="${item.periodKey}" data-title="${item.title}" data-index="${idx}" tabindex="0">
                <div style="flex:1;">
                    <div class="accessibility-result-title">${escapeHtml(item.title)}</div>
                    <div class="accessibility-result-period">${item.period} • ${item.artist}</div>
                    <div class="accessibility-result-price">₺${(item.price || 0).toLocaleString('tr-TR')}</div>
                </div>
            </div>
        `).join('');
        
        document.querySelectorAll('.accessibility-result-item').forEach(result => {
            result.addEventListener('click', () => {
                const title = result.querySelector('.accessibility-result-title').innerText;
                selectArtwork(title);
            });
        });
    }
    
    function selectArtwork(title) {
        overlay.classList.remove('active');
        goToDetailPage(title);
    }   
        
    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>]/g, m => m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;');
    }
    
    function updateFilterButtons() {
        filterChips.forEach(chip => {
            if (chip.dataset.filter === currentFilter) {
                chip.classList.add('active');
            } else {
                chip.classList.remove('active');
            }
        });
    }
    
    // Butona tıklama
    triggerBtn.addEventListener('click', () => {
        collectAllArtworks();
        overlay.classList.add('active');
        searchInput.value = '';
        currentFilter = 'all';
        updateFilterButtons();
        resultsContainer.innerHTML = `<div class="accessibility-placeholder"><i class="fas fa-search"></i><p>Bir sanat eseri arayın...</p><span>Toplam ${allArtworks.length} eser mevcut</span></div>`;
        searchInput.focus();
    });
    
    // Kapatma
    if (closeBtn) closeBtn.addEventListener('click', () => overlay.classList.remove('active'));
    overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.classList.remove('active'); });
    
    // Arama inputu
    searchInput.addEventListener('input', performSearch);
    
    // Filtre butonları
    filterChips.forEach(chip => {
        chip.addEventListener('click', () => {
            currentFilter = chip.dataset.filter;
            updateFilterButtons();
            performSearch();
        });
    });
    
    // ESC ile kapatma
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            overlay.classList.remove('active');
            triggerBtn.focus();
        }
    });
    
    setTimeout(collectAllArtworks, 500);

    // Klavye navigasyonu için
    function handleKeyboardNavigation(e) {
        if (!overlay.classList.contains('active')) return;
        
        const resultItems = document.querySelectorAll('.accessibility-result-item');
        if (resultItems.length === 0) return;
        
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            currentSelectedIndex = Math.min(currentSelectedIndex + 1, resultItems.length - 1);
            updateSelectedItem(resultItems);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            currentSelectedIndex = Math.max(currentSelectedIndex - 1, 0);
            updateSelectedItem(resultItems);
        } else if (e.key === 'Enter' && currentSelectedIndex >= 0) {
            e.preventDefault();
            const selected = resultItems[currentSelectedIndex];
            const title = selected.querySelector('.accessibility-result-title').innerText;
            selectArtwork(title);
        }
    }

    function updateSelectedItem(items) {
        items.forEach((item, idx) => {
            if (idx === currentSelectedIndex) {
                item.style.background = 'rgba(201, 168, 76, 0.2)';
                item.scrollIntoView({ block: 'nearest' });
                item.setAttribute('tabindex', '0');
                item.focus();
            } else {
                item.style.background = '';
                item.removeAttribute('tabindex');
            }
        });
    }

    // Event listener ekle
    document.addEventListener('keydown', handleKeyboardNavigation);
});

// ===== DETAY SAYFASINA YÖNLENDİRME =====
function goToDetailPage(title) {
    // Hazır sayfası olan eserler
    const detailPages = {
        "İnci Küpeli Kız": "inci-kupeli-kiz.html",
        "Yıldızlı Gece": "yildizli-gece.html",
        "Mona Lisa": "mona-lisa.html",
        "Çığlık": "ciglik.html"
    };
    
    if (detailPages[title]) {
        window.location.href = detailPages[title];
    } else {
        // Genel detay sayfasına yönlendir (opsiyonel)
        window.location.href = `detay.html?eser=${encodeURIComponent(title)}`;
    }
}