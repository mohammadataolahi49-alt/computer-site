// ==========================================
// COMPUTER SITE 1.0
// JavaScript
// ==========================================

const categories = {
    cpu: {
        name: "🧠 CPU — پردازنده",
        icon: "🧠",
        products: [
            {
                name: "Intel Core i5-12400",
                price: "قیمت نمونه",
                specs: {
                    "هسته": "6",
                    "رشته": "12",
                    "فرکانس": "4.4 GHz",
                    "سوکت": "LGA1700",
                    "امتیاز": 82
                }
            },
            {
                name: "AMD Ryzen 5 5600",
                price: "قیمت نمونه",
                specs: {
                    "هسته": "6",
                    "رشته": "12",
                    "فرکانس": "4.4 GHz",
                    "سوکت": "AM4",
                    "امتیاز": 78
                }
            },
            {
                name: "AMD Ryzen 5 7600",
                price: "قیمت نمونه",
                specs: {
                    "هسته": "6",
                    "رشته": "12",
                    "فرکانس": "5.1 GHz",
                    "سوکت": "AM5",
                    "امتیاز": 90
                }
            }
        ]
    },

    gpu: {
        name: "🎮 GPU — کارت گرافیک",
        icon: "🎮",
        products: [
            {
                name: "RTX 3060",
                price: "قیمت نمونه",
                specs: {
                    "حافظه": "12GB",
                    "نوع حافظه": "GDDR6",
                    "مصرف": "170W",
                    "امتیاز": 76
                }
            },
            {
                name: "RTX 4060",
                price: "قیمت نمونه",
                specs: {
                    "حافظه": "8GB",
                    "نوع حافظه": "GDDR6",
                    "مصرف": "115W",
                    "امتیاز": 86
                }
            },
            {
                name: "RX 7600",
                price: "قیمت نمونه",
                specs: {
                    "حافظه": "8GB",
                    "نوع حافظه": "GDDR6",
                    "مصرف": "165W",
                    "امتیاز": 82
                }
            }
        ]
    },

    ram: {
        name: "🧮 RAM — حافظه رم",
        icon: "🧮",
        products: [
            {
                name: "Samsung DDR3 8GB",
                price: "قیمت نمونه",
                specs: {
                    "ظرفیت": "8GB",
                    "نسل": "DDR3",
                    "سرعت": "1600MHz",
                    "امتیاز": 45
                }
            },
            {
                name: "Kingston DDR4 16GB",
                price: "قیمت نمونه",
                specs: {
                    "ظرفیت": "16GB",
                    "نسل": "DDR4",
                    "سرعت": "3200MHz",
                    "امتیاز": 78
                }
            },
            {
                name: "Kingston DDR5 16GB",
                price: "قیمت نمونه",
                specs: {
                    "ظرفیت": "16GB",
                    "نسل": "DDR5",
                    "سرعت": "5600MHz",
                    "امتیاز": 91
                }
            }
        ]
    },

    ssd: {
        name: "💾 SSD",
        icon: "💾",
        products: [
            {
                name: "Kingston NV2 500GB",
                price: "قیمت نمونه",
                specs: {
                    "ظرفیت": "500GB",
                    "نوع": "NVMe",
                    "خواندن": "3500MB/s",
                    "امتیاز": 75
                }
            },
            {
                name: "Samsung 980 1TB",
                price: "قیمت نمونه",
                specs: {
                    "ظرفیت": "1TB",
                    "نوع": "NVMe",
                    "خواندن": "3500MB/s",
                    "امتیاز": 86
                }
            }
        ]
    },

    hdd: {
        name: "💽 HDD",
        icon: "💽",
        products: [
            {
                name: "WD Blue 1TB",
                price: "قیمت نمونه",
                specs: {
                    "ظرفیت": "1TB",
                    "سرعت": "7200RPM",
                    "نوع": "SATA",
                    "امتیاز": 60
                }
            },
            {
                name: "Seagate Barracuda 2TB",
                price: "قیمت نمونه",
                specs: {
                    "ظرفیت": "2TB",
                    "سرعت": "7200RPM",
                    "نوع": "SATA",
                    "امتیاز": 64
                }
            }
        ]
    },

    motherboard: {
        name: "🖥️ Motherboard — مادربرد",
        icon: "🖥️",
        products: [
            {
                name: "MSI B550",
                price: "قیمت نمونه",
                specs: {
                    "سوکت": "AM4",
                    "RAM": "DDR4",
                    "PCIe": "4.0",
                    "امتیاز": 80
                }
            },
            {
                name: "B760 DDR4",
                price: "قیمت نمونه",
                specs: {
                    "سوکت": "LGA1700",
                    "RAM": "DDR4",
                    "PCIe": "4.0",
                    "امتیاز": 84
                }
            },
            {
                name: "B650 DDR5",
                price: "قیمت نمونه",
                specs: {
                    "سوکت": "AM5",
                    "RAM": "DDR5",
                    "PCIe": "5.0",
                    "امتیاز": 92
                }
            }
        ]
    },

    psu: {
        name: "⚡ Power Supply — پاور",
        icon: "⚡",
        products: [
            {
                name: "550W Bronze",
                price: "قیمت نمونه",
                specs: {
                    "توان": "550W",
                    "گواهی": "80+ Bronze",
                    "امتیاز": 70
                }
            },
            {
                name: "650W Gold",
                price: "قیمت نمونه",
                specs: {
                    "توان": "650W",
                    "گواهی": "80+ Gold",
                    "امتیاز": 85
                }
            }
        ]
    },

    cooler: {
        name: "🌬️ CPU Cooler — خنک‌کننده",
        icon: "🌬️",
        products: [
            {
                name: "DeepCool AK400",
                price: "قیمت نمونه",
                specs: {
                    "سرعت فن": "500-1850 RPM",
                    "اندازه": "120mm",
                    "صدا": "29 dBA",
                    "سازگاری": "Intel / AMD",
                    "امتیاز": 84
                }
            },
            {
                name: "DeepCool AK620",
                price: "قیمت نمونه",
                specs: {
                    "سرعت فن": "300-1850 RPM",
                    "اندازه": "120mm",
                    "صدا": "28 dBA",
                    "سازگاری": "Intel / AMD",
                    "امتیاز": 92
                }
            }
        ]
    },

    case: {
        name: "🖥️ Case — کیس",
        icon: "🖥️",
        products: [
            {
                name: "Gaming Case Airflow",
                price: "قیمت نمونه",
                specs: {
                    "فرم": "ATX",
                    "فن": "3 عدد",
                    "امتیاز": 80
                }
            },
            {
                name: "RGB Gaming Case",
                price: "قیمت نمونه",
                specs: {
                    "فرم": "ATX",
                    "فن": "4 عدد",
                    "RGB": "دارد",
                    "امتیاز": 86
                }
            }
        ]
    },

    fan: {
        name: "🌀 Case Fans — فن کیس",
        icon: "🌀",
        products: [
            {
                name: "120mm RGB Fan",
                price: "قیمت نمونه",
                specs: {
                    "اندازه": "120mm",
                    "RGB": "دارد",
                    "امتیاز": 75
                }
            },
            {
                name: "140mm Silent Fan",
                price: "قیمت نمونه",
                specs: {
                    "اندازه": "140mm",
                    "صدا": "کم",
                    "امتیاز": 82
                }
            }
        ]
    },

    cable: {
        name: "🔌 Power Cable — کابل برق",
        icon: "🔌",
        products: [
            {
                name: "IEC C13 Power Cable",
                price: "قیمت نمونه",
                specs: {
                    "نوع": "C13",
                    "امتیاز": 70
                }
            }
        ]
    },

    thermal: {
        name: "🌡️ Thermal Paste — خمیر حرارتی",
        icon: "🌡️",
        products: [
            {
                name: "Arctic MX-4",
                price: "قیمت نمونه",
                specs: {
                    "نوع": "Thermal Paste",
                    "رسانایی": "8.5 W/mK",
                    "امتیاز": 85
                }
            }
        ]
    },

    wifi: {
        name: "📡 Wi-Fi Card — کارت Wi-Fi",
        icon: "📡",
        products: [
            {
                name: "Wi-Fi 6 Adapter",
                price: "قیمت نمونه",
                specs: {
                    "استاندارد": "Wi-Fi 6",
                    "Bluetooth": "دارد",
                    "امتیاز": 85
                }
            }
        ]
    },

    network: {
        name: "📶 Network Card — کارت شبکه",
        icon: "📶",
        products: [
            {
                name: "Gigabit Ethernet Card",
                price: "قیمت نمونه",
                specs: {
                    "سرعت": "1Gbps",
                    "اتصال": "PCIe",
                    "امتیاز": 80
                }
            }
        ]
    },

    sound: {
        name: "🔊 Sound Card — کارت صدا",
        icon: "🔊",
        products: [
            {
                name: "USB Sound Card",
                price: "قیمت نمونه",
                specs: {
                    "اتصال": "USB",
                    "امتیاز": 72
                }
            }
        ]
    },

    optical: {
        name: "💿 Optical Drive — DVD/CD",
        icon: "💿",
        products: [
            {
                name: "External DVD Writer",
                price: "قیمت نمونه",
                specs: {
                    "نوع": "USB",
                    "خواندن": "DVD/CD",
                    "امتیاز": 65
                }
            }
        ]
    },

    monitor: {
        name: "🖥️ Monitor — مانیتور",
        icon: "🖥️",
        products: [
            {
                name: "24 inch 1080p 75Hz",
                price: "قیمت نمونه",
                specs: {
                    "اندازه": "24 inch",
                    "رزولوشن": "1920×1080",
                    "نرخ": "75Hz",
                    "امتیاز": 75
                }
            },
            {
                name: "27 inch 1440p 144Hz",
                price: "قیمت نمونه",
                specs: {
                    "اندازه": "27 inch",
                    "رزولوشن": "2560×1440",
                    "نرخ": "144Hz",
                    "امتیاز": 90
                }
            }
        ]
    },

    keyboard: {
        name: "⌨️ Keyboard — کیبورد",
        icon: "⌨️",
        products: [
            {
                name: "Mechanical RGB Keyboard",
                price: "قیمت نمونه",
                specs: {
                    "نوع": "Mechanical",
                    "RGB": "دارد",
                    "امتیاز": 85
                }
            }
        ]
    },

    mouse: {
        name: "🖱️ Mouse — ماوس",
        icon: "🖱️",
        products: [
            {
                name: "Gaming Mouse 8000 DPI",
                price: "قیمت نمونه",
                specs: {
                    "DPI": "8000",
                    "نوع": "Gaming",
                    "امتیاز": 82
                }
            }
        ]
    },

    headset: {
        name: "🎧 Headset — هدست",
        icon: "🎧",
        products: [
            {
                name: "Gaming Headset 7.1",
                price: "قیمت نمونه",
                specs: {
                    "صدا": "7.1",
                    "میکروفون": "دارد",
                    "امتیاز": 83
                }
            }
        ]
    },

    microphone: {
        name: "🎙️ Microphone — میکروفون",
        icon: "🎙️",
        products: [
            {
                name: "USB Condenser Mic",
                price: "قیمت نمونه",
                specs: {
                    "اتصال": "USB",
                    "نوع": "Condenser",
                    "امتیاز": 84
                }
            }
        ]
    },

    controller: {
        name: "🎮 Game Controller — دسته بازی",
        icon: "🎮",
        products: [
            {
                name: "Wireless Game Controller",
                price: "قیمت نمونه",
                specs: {
                    "اتصال": "Wireless",
                    "لرزش": "دارد",
                    "امتیاز": 82
                }
            }
        ]
    }
};


// ==========================================
// LOGIN
// ==========================================

function login(type) {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value;

    if (type === "creator") {

        if (
            username === "محمد حسین عطاالهی" &&
            password === "1392Pq1404"
        ) {

            enterSite("👑 سازنده");

        } else {

            alert("نام کاربری یا رمز سازنده اشتباه است.");
        }

        return;
    }

    if (type === "user") {

        if (!username) {
            alert("لطفاً نام کاربری را وارد کن.");
            return;
        }

        enterSite("👤 " + username);
        return;
    }

    enterSite("👻 مهمان");
}


function enterSite(userType) {

    document.getElementById("loginPage")
        .classList.add("hidden");

    document.getElementById("site")
        .classList.remove("hidden");

    console.log("ورود:", userType);

    showPage("home");
}


// ==========================================
// PAGE SYSTEM
// ==========================================

function showPage(pageId) {

    document.querySelectorAll(".page")
        .forEach(page => page.classList.remove("active"));

    const page =
        document.getElementById(pageId);

    if (page) {
        page.classList.add("active");
        window.scrollTo(0, 0);
    }

    if (pageId === "categories") {
        loadCategories();
    }

    if (pageId === "compare") {
        loadCompareCategories();
    }
}


// ==========================================
// CATEGORIES
// ==========================================

function loadCategories() {

    const container =
        document.getElementById("categoryList");

    if (!container) return;

    container.innerHTML = "";

    Object.keys(categories).forEach(key => {

        const category = categories[key];

        const card =
            document.createElement("div");

        card.className =
            "category-card rgb";

        card.innerHTML = `
            <div class="category-icon">
                ${category.icon}
            </div>

            <h2>${category.name}</h2>

            <p>
                ${category.products.length}
                قطعه نمونه
            </p>
        `;

        card.onclick = () => {
            openCategory(key);
        };

        container.appendChild(card);
    });
}


// ==========================================
// CATEGORY PAGE
// ==========================================

function openCategory(categoryKey) {

    const category =
        categories[categoryKey];

    if (!category) return;

    document.getElementById("categoryTitle")
        .textContent = category.name;

    document.getElementById("search").value = "";

    showPage("products");

    renderProducts(category.products);
}


function renderProducts(products) {

    const container =
        document.getElementById("productList");

    container.innerHTML = "";

    if (products.length === 0) {

        container.innerHTML = `
            <div class="result">
                قطعه‌ای پیدا نشد 😢
            </div>
        `;

        return;
    }

    products.forEach((product, index) => {

        const card =
            document.createElement("div");

        card.className =
            "product-card rgb";

        let specs = "";

        Object.keys(product.specs)
            .forEach(key => {

                specs += `
                    <p>
                        <strong>${key}:</strong>
                        ${product.specs[key]}
                    </p>
                `;
            });

        card.innerHTML = `
            <h3>${product.name}</h3>

            ${specs}

            <div class="price">
                💰 ${product.price}
            </div>

            <div class="product-actions">

                <button onclick="selectForCompare('${product.name}')">
                    ⚔️ مقایسه
                </button>

                <button onclick="showProductInfo('${product.name}')">
                    ℹ️ مشخصات
                </button>

            </div>
        `;

        container.appendChild(card);
    });
}


// ==========================================
// SEARCH
// ==========================================

function searchProducts() {

    const search =
        document.getElementById("search")
            .value
            .toLowerCase();

    const categoryName =
        document.getElementById("categoryTitle")
            .textContent;

    let products = [];

    Object.values(categories).forEach(category => {

        if (category.name === categoryName) {
            products = category.products;
        }
    });

    const filtered =
        products.filter(product =>
            product.name
                .toLowerCase()
                .includes(search)
        );

    renderProducts(filtered);
}


// ==========================================
// PRODUCT INFO
// ==========================================

function showProductInfo(name) {

    let product = null;

    Object.values(categories).forEach(category => {

        const found =
            category.products.find(
                p => p.name === name
            );

        if (found) {
            product = found;
        }
    });

    if (!product) return;

    let message =
        "📦 " + product.name + "\n\n";

    Object.entries(product.specs)
        .forEach(([key, value]) => {

            message +=
                key + ": " + value + "\n";
        });

    alert(message);
}


// ==========================================
// COMPARE SYSTEM
// ==========================================

function loadCompareCategories() {

    const select =
        document.getElementById("compareCategory");

    if (!select) return;

    select.innerHTML = "";

    Object.keys(categories).forEach(key => {

        const option =
            document.createElement("option");

        option.value = key;

        option.textContent =
            categories[key].name;

        select.appendChild(option);
    });

    loadCompareProducts();
}


function loadCompareProducts() {

    const categoryKey =
        document.getElementById("compareCategory")
            .value;

    const products =
        categories[categoryKey].products;

    const selects = [
        document.getElementById("compare1"),
        document.getElementById("compare2"),
        document.getElementById("compare3")
    ];

    selects.forEach(select => {

        if (!select) return;

        select.innerHTML = "";

        if (select.id === "compare3") {

            const none =
                document.createElement("option");

            none.value = "-1";
            none.textContent =
                "بدون قطعه سوم";

            select.appendChild(none);
        }

        products.forEach((product, index) => {

            const option =
                document.createElement("option");

            option.value = index;

            option.textContent =
                product.name;

            select.appendChild(option);
        });
    });
}


function compareProducts() {

    const categoryKey =
        document.getElementById("compareCategory")
            .value;

    const products =
        categories[categoryKey].products;

    const indexes = [
        Number(document.getElementById("compare1").value),
        Number(document.getElementById("compare2").value)
    ];

    const third =
        Number(document.getElementById("compare3").value);

    if (third >= 0) {
        indexes.push(third);
    }

    const selected =
        indexes.map(index => products[index]);

    const winner =
        selected.reduce((best, current) => {

            const bestScore =
                Number(best.specs.امتیاز || 0);

            const currentScore =
                Number(current.specs.امتیاز || 0);

            return currentScore > bestScore
                ? current
                : best;

        });

    const result =
        document.getElementById("compareResult");

    result.innerHTML = "";

    selected.forEach(product => {

        const score =
            Number(product.specs.امتیاز || 0);

        const div =
            document.createElement("div");

        div.className =
            "compare-item " +
            (product === winner ? "winner" : "");

        div.innerHTML = `
            <h2>${product.name}</h2>

            <div class="score">
                ${score}/100
            </div>

            ${
                product === winner
                ? "<strong>🏆 برنده مقایسه</strong>"
                : ""
            }
        `;

        result.appendChild(div);
    });
}


function selectForCompare(name) {

    showPage("compare");

    loadCompareCategories();

    const categorySelect =
        document.getElementById("compareCategory");

    let categoryKey = null;

    Object.entries(categories)
        .forEach(([key, category]) => {

            if (
                category.products
                    .some(product => product.name === name)
            ) {
                categoryKey = key;
            }
        });

    if (!categoryKey) return;

    categorySelect.value = categoryKey;

    loadCompareProducts();

    const products =
        categories[categoryKey].products;

    const index =
        products.findIndex(
            product => product.name === name
        );

    document.getElementById("compare1").value =
        index;
}


// ==========================================
// COMPATIBILITY
// ==========================================

function checkCompatibility() {

    const cpu =
        document.getElementById("cpu").value;

    const ram =
        document.getElementById("ram").value;

    const result =
        document.getElementById("compatibility");

    let compatible = true;

    let messages = [];

    // CPU / Motherboard examples

    if (
        cpu.includes("5600")
    ) {
        messages.push("CPU روی پلتفرم AM4 است.");
    }

    if (
        cpu.includes("12400")
    ) {
        messages.push("CPU روی سوکت LGA1700 است.");
    }

    if (
        cpu.includes("7600")
    ) {
        messages.push("CPU روی پلتفرم AM5 است.");
    }

    // RAM

    if (ram.includes("DDR4")) {
        messages.push("RAM انتخابی DDR4 است.");
    }

    if (ram.includes("DDR5")) {
        messages.push("RAM انتخابی DDR5 است.");
    }

    if (ram.includes("DDR5") && cpu.includes("5600")) {
        compatible = false;
        messages.push(
            "⚠️ این ترکیب در حالت واقعی نیاز به مادربرد مناسب دارد."
        );
    }

    result.innerHTML = `
        <h2>
            ${
                compatible
                ? "✅ بررسی اولیه انجام شد"
                : "⚠️ نیاز به بررسی بیشتر"
            }
        </h2>

        <p>
            ${messages.join("<br>")}
        </p>

        <p>
            💡 این بررسی نمونه‌ای است؛
            سازگاری واقعی باید بر اساس مدل دقیق مادربرد،
            CPU و RAM بررسی شود.
        </p>
    `;
}


// ==========================================
// LIKE
// ==========================================

let likes =
    Number(localStorage.getItem("computerSiteLikes") || 0);

function updateLikes() {

    const counter =
        document.getElementById("likeCount");

    if (counter) {
        counter.textContent = likes;
    }
}

function likeSite() {

    likes++;

    localStorage.setItem(
        "computerSiteLikes",
        likes
    );

    updateLikes();
}


// ==========================================
// COMMENTS
// ==========================================

let comments =
    JSON.parse(
        localStorage.getItem("computerSiteComments") || "[]"
    );


function addComment() {

    const input =
        document.getElementById("commentText");

    const text =
        input.value.trim();

    if (!text) {

        alert("اول کامنتت رو بنویس 😄");
        return;
    }

    comments.push({
        text: text,
        date: new Date().toLocaleString("fa-IR")
    });

    localStorage.setItem(
        "computerSiteComments",
        JSON.stringify(comments)
    );

    input.value = "";

    renderComments();
}


function renderComments() {

    const container =
        document.getElementById("comments");

    if (!container) return;

    container.innerHTML = "";

    comments.forEach(comment => {

        const div =
            document.createElement("div");

        div.className = "comment";

        div.innerHTML = `
            💬 ${escapeHTML(comment.text)}
            <br>
            <small>${comment.date}</small>
        `;

        container.appendChild(div);
    });
}


// ==========================================
// SUPPORT
// ==========================================

function sendSupport() {

    const input =
        document.getElementById("supportText");

    const result =
        document.getElementById("supportResult");

    if (!input.value.trim()) {

        result.textContent =
            "لطفاً مشکل خودت را بنویس.";

        return;
    }

    result.innerHTML =
        "✅ درخواست پشتیبانی ثبت شد. ممنون که اطلاع دادی!";

    input.value = "";
}


// ==========================================
// SECURITY
// ==========================================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;
}


// ==========================================
// START
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    updateLikes();
    renderComments();

    console.log(
        "⚡ Computer Site 1.0 Loaded Successfully"
    );

});