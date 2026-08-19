// =====================================================
// COMPUTER SITE 1.0
// FINAL app.js
// =====================================================

// =====================================================
// DATABASE
// =====================================================

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
                    "امتیاز": 86
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
                    "امتیاز": 82
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
                    "امتیاز": 94
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
                    "امتیاز": 78
                }
            },
            {
                name: "RTX 4060",
                price: "قیمت نمونه",
                specs: {
                    "حافظه": "8GB",
                    "نوع حافظه": "GDDR6",
                    "مصرف": "115W",
                    "امتیاز": 87
                }
            },
            {
                name: "RX 7600",
                price: "قیمت نمونه",
                specs: {
                    "حافظه": "8GB",
                    "نوع حافظه": "GDDR6",
                    "مصرف": "165W",
                    "امتیاز": 84
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
                    "امتیاز": 48
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
                    "امتیاز": 92
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
                    "امتیاز": 76
                }
            },
            {
                name: "Samsung 980 1TB",
                price: "قیمت نمونه",
                specs: {
                    "ظرفیت": "1TB",
                    "نوع": "NVMe",
                    "خواندن": "3500MB/s",
                    "امتیاز": 87
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
                    "امتیاز": 65
                }
            },
            {
                name: "Seagate Barracuda 2TB",
                price: "قیمت نمونه",
                specs: {
                    "ظرفیت": "2TB",
                    "سرعت": "7200RPM",
                    "نوع": "SATA",
                    "امتیاز": 69
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
                    "امتیاز": 82
                }
            },
            {
                name: "B760 DDR4",
                price: "قیمت نمونه",
                specs: {
                    "سوکت": "LGA1700",
                    "RAM": "DDR4",
                    "PCIe": "4.0",
                    "امتیاز": 86
                }
            },
            {
                name: "B650 DDR5",
                price: "قیمت نمونه",
                specs: {
                    "سوکت": "AM5",
                    "RAM": "DDR5",
                    "PCIe": "5.0",
                    "امتیاز": 93
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
                    "امتیاز": 72
                }
            },
            {
                name: "650W Gold",
                price: "قیمت نمونه",
                specs: {
                    "توان": "650W",
                    "گواهی": "80+ Gold",
                    "امتیاز": 87
                }
            },
            {
                name: "750W Gold",
                price: "قیمت نمونه",
                specs: {
                    "توان": "750W",
                    "گواهی": "80+ Gold",
                    "امتیاز": 91
                }
            }
        ]
    },

    cooler: {
        name: "🌬️ CPU Cooler — فن و خنک‌کننده",
        icon: "🌬️",
        products: [
            {
                name: "DeepCool AK400",
                price: "قیمت نمونه",
                specs: {
                    "سرعت فن": "500-1850 RPM",
                    "اندازه فن": "120mm",
                    "صدا": "29 dBA",
                    "سازگاری": "Intel / AMD",
                    "امتیاز": 85
                }
            },
            {
                name: "DeepCool AK620",
                price: "قیمت نمونه",
                specs: {
                    "سرعت فن": "300-1850 RPM",
                    "اندازه فن": "120mm",
                    "صدا": "28 dBA",
                    "سازگاری": "Intel / AMD",
                    "امتیاز": 93
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
                    "امتیاز": 78
                }
            },
            {
                name: "140mm Silent Fan",
                price: "قیمت نمونه",
                specs: {
                    "اندازه": "140mm",
                    "صدا": "کم",
                    "امتیاز": 84
                }
            }
        ]
    },

    case: {
        name: "🖥️ Case — کیس",
        icon: "🖥️",
        products: [
            {
                name: "Gaming Airflow Case",
                price: "قیمت نمونه",
                specs: {
                    "فرم": "ATX",
                    "فن": "3 عدد",
                    "امتیاز": 81
                }
            },
            {
                name: "RGB Gaming Case",
                price: "قیمت نمونه",
                specs: {
                    "فرم": "ATX",
                    "فن": "4 عدد",
                    "RGB": "دارد",
                    "امتیاز": 88
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
                    "رسانایی": "8.5 W/mK",
                    "نوع": "Thermal Paste",
                    "امتیاز": 86
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
                    "امتیاز": 86
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
                    "امتیاز": 81
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
                    "امتیاز": 73
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
                    "اتصال": "USB",
                    "پشتیبانی": "DVD / CD",
                    "امتیاز": 68
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
                    "نرخ نوسازی": "75Hz",
                    "امتیاز": 77
                }
            },
            {
                name: "27 inch 1440p 144Hz",
                price: "قیمت نمونه",
                specs: {
                    "اندازه": "27 inch",
                    "رزولوشن": "2560×1440",
                    "نرخ نوسازی": "144Hz",
                    "امتیاز": 92
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
                    "امتیاز": 86
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
                    "امتیاز": 83
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
                    "امتیاز": 85
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
                    "امتیاز": 85
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
                    "امتیاز": 83
                }
            }
        ]
    }

};

// =====================================================
// LOGIN
// =====================================================

function loginUser() {

    const username =
        document.getElementById("username").value.trim();

    if (!username) {

        alert("لطفاً نام کاربری را وارد کن 😄");
        return;
    }

    enterSite("👤 " + username);
}

function loginGuest() {

    enterSite("👻 مهمان");
}

function enterSite(user) {

    const loginPage =
        document.getElementById("loginPage");

    const site =
        document.getElementById("site");

    if (loginPage) {
        loginPage.classList.add("hidden");
    }

    if (site) {
        site.classList.remove("hidden");
    }

    localStorage.setItem(
        "computerSiteUser",
        user
    );

    showPage("home");
}

// =====================================================
// PAGE NAVIGATION
// =====================================================

function showPage(pageId) {

    document
        .querySelectorAll(".page")
        .forEach(page => {

            page.classList.remove("active");

        });

    const page =
        document.getElementById(pageId);

    if (page) {

        page.classList.add("active");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }

    if (pageId === "parts") {

        loadParts();

    }

    if (pageId === "compare") {

        loadCompareCategories();

    }

}

// =====================================================
// PARTS
// =====================================================

function loadParts() {

    const grid =
        document.getElementById("partsGrid");

    if (!grid) return;

    grid.innerHTML = "";

    Object.entries(categories)
        .forEach(([key, category]) => {

            const card =
                document.createElement("div");

            card.className =
                "homeCard rgb";

            card.innerHTML = `

                <div class="emoji">
                    ${category.icon}
                </div>

                <h2>
                    ${escapeHTML(category.name)}
                </h2>

                <p>
                    ${category.products.length}
                    قطعه نمونه
                </p>

            `;

            card.addEventListener(
                "click",
                () => openCategory(key)
            );

            grid.appendChild(card);

        });

}

// =====================================================
// OPEN CATEGORY
// =====================================================

function openCategory(key) {

    const category =
        categories[key];

    if (!category) return;

    const title =
        document.getElementById("productsTitle");

    if (title) {

        title.textContent =
            category.name;

    }

    const search =
        document.getElementById("search");

    if (search) {

        search.value = "";

    }

    showPage("products");

    renderProducts(category.products, key);

}

// =====================================================
// PRODUCTS
// =====================================================

let currentCategory = null;

function renderProducts(products, categoryKey) {

    const grid =
        document.getElementById("productsGrid");

    if (!grid) return;

    if (categoryKey) {

        currentCategory =
            categoryKey;

    }

    grid.innerHTML = "";

    if (!products.length) {

        grid.innerHTML = `
            <div class="homeCard rgb">
                <h2>😢 چیزی پیدا نشد</h2>
                <p>عبارت دیگری را امتحان کن.</p>
            </div>
        `;

        return;
    }

    products.forEach(product => {

        const card =
            document.createElement("div");

        card.className =
            "homeCard rgb";

        let specsHTML = "";

        Object.entries(product.specs)
            .forEach(([name, value]) => {

                if (name === "امتیاز") return;

                specsHTML += `
                    <p>
                        <strong>
                            ${escapeHTML(name)}:
                        </strong>
                        ${escapeHTML(String(value))}
                    </p>
                `;

            });

        const score =
            product.specs.امتیاز || 0;

        card.innerHTML = `

            <div class="emoji">
                ${categories[currentCategory]?.icon || "🧩"}
            </div>

            <h2>
                ${escapeHTML(product.name)}
            </h2>

            ${specsHTML}

            <p>
                ⭐ امتیاز:
                <strong>${score}/100</strong>
            </p>

            <p>
                💰 ${escapeHTML(product.price)}
            </p>

            <button
                class="mainButton"
                data-product="${escapeHTML(product.name)}"
            >
                ⚔️ مقایسه
            </button>

        `;

        const button =
            card.querySelector("button");

        button.addEventListener(
            "click",
            event => {

                event.stopPropagation();

                selectForCompare(
                    product.name,
                    currentCategory
                );

            }
        );

        grid.appendChild(card);

    });

}

// =====================================================
// SEARCH
// =====================================================

function searchProduct() {

    if (!currentCategory) return;

    const input =
        document.getElementById("search");

    const query =
        input
            ? input.value.trim().toLowerCase()
            : "";

    const products =
        categories[currentCategory].products;

    const result =
        products.filter(product =>
            product.name
                .toLowerCase()
                .includes(query)
        );

    renderProducts(
        result,
        currentCategory
    );

}

// =====================================================
// COMPARE
// =====================================================

function loadCompareCategories() {

    const select =
        document.getElementById("compareCategory");

    if (!select) return;

    select.innerHTML = "";

    Object.entries(categories)
        .forEach(([key, category]) => {

            const option =
                document.createElement("option");

            option.value = key;

            option.textContent =
                category.name;

            select.appendChild(option);

        });

    loadCompare();

}

function loadCompare() {

    const categorySelect =
        document.getElementById("compareCategory");

    if (!categorySelect) return;

    const categoryKey =
        categorySelect.value;

    const category =
        categories[categoryKey];

    if (!category) return;

    const selects = [

        document.getElementById("compareOne"),

        document.getElementById("compareTwo"),

        document.getElementById("compareThree")

    ];

    selects.forEach(select => {

        if (!select) return;

        const isThird =
            select.id === "compareThree";

        select.innerHTML =
            isThird
                ? `<option value="-1">
                     بدون قطعه سوم
                   </option>`
                : "";

        category.products.forEach(
            (product, index) => {

                const option =
                    document.createElement("option");

                option.value =
                    index;

                option.textContent =
                    product.name;

                select.appendChild(option);

            }
        );

    });

}

function runCompare() {

    const categoryKey =
        document.getElementById("compareCategory").value;

    const category =
        categories[categoryKey];

    const one =
        Number(
            document.getElementById("compareOne").value
        );

    const two =
        Number(
            document.getElementById("compareTwo").value
        );

    const three =
        Number(
            document.getElementById("compareThree").value
        );

    if (
        one === two ||
        (three >= 0 && (three === one || three === two))
    ) {

        alert(
            "برای مقایسه، قطعات متفاوت انتخاب کن 🙂"
        );

        return;
    }

    const selected = [
        category.products[one],
        category.products[two]
    ];

    if (three >= 0) {

        selected.push(
            category.products[three]
        );

    }

    const result =
        document.getElementById("compareResult");

    result.innerHTML = "";

    const winner =
        [...selected].sort(
            (a, b) =>
                Number(b.specs.امتیاز || 0)
                -
                Number(a.specs.امتیاز || 0)
        )[0];

    selected.forEach(product => {

        const div =
            document.createElement("div");

        div.className =
            "homeCard rgb";

        let specs = "";

        Object.entries(product.specs)
            .forEach(([key, value]) => {

                specs += `
                    <p>
                        <strong>
                            ${escapeHTML(key)}:
                        </strong>
                        ${escapeHTML(String(value))}
                    </p>
                `;

            });

        const isWinner =
            product === winner;

        div.innerHTML = `

            <div class="emoji">
                ${isWinner ? "🏆" : "🧩"}
            </div>

            <h2>
                ${escapeHTML(product.name)}
            </h2>

            ${specs}

            ${
                isWinner
                    ? `
                        <h3>
                            🏆 برنده این مقایسه
                        </h3>
                      `
                    : ""
            }

        `;

        result.appendChild(div);

    });

}

// =====================================================
// SELECT PRODUCT FOR COMPARISON
// =====================================================

function selectForCompare(
    productName,
    categoryKey
) {

    showPage("compare");

    const categorySelect =
        document.getElementById("compareCategory");

    if (!categorySelect) return;

    categorySelect.value =
        categoryKey;

    loadCompare();

    const productIndex =
        categories[categoryKey]
            .products
            .findIndex(
                product =>
                    product.name === productName
            );

    const one =
        document.getElementById("compareOne");

    if (one && productIndex >= 0) {

        one.value =
            productIndex;

    }

}

// =====================================================
// BUILD COMPUTER
// =====================================================

function checkBuild() {

    const cpu =
        document.getElementById("buildCPU").value;

    const gpu =
        document.getElementById("buildGPU").value;

    const ram =
        document.getElementById("buildRAM").value;

    const ssd =
        document.getElementById("buildSSD").value;

    const psu =
        document.getElementById("buildPSU").value;

    const cooler =
        document.getElementById("buildCooler").value;

    let warnings = [];
    let good = [];

    // CPU / RAM platform

    if (
        cpu.includes("7600") &&
        ram.includes("DDR4")
    ) {

        warnings.push(
            "⚠️ Ryzen 5 7600 به مادربرد AM5 و RAM DDR5 نیاز دارد."
        );

    } else {

        good.push(
            "✅ ترکیب CPU و RAM قابل بررسی است."
        );

    }

    // GPU / PSU

    if (
        gpu.includes("4060") &&
        psu.includes("550W")
    ) {

        good.push(
            "✅ پاور 550W برای این نمونه کافی است."
        );

    }

    if (
        gpu.includes("RX 7600") &&
        psu.includes("550W")
    ) {

        good.push(
            "✅ پاور 550W برای این نمونه مناسب است."
        );

    }

    // SSD

    if (ssd) {

        good.push(
            "✅ حافظه SSD انتخاب شد."
        );

    }

    // Cooler

    if (cooler) {

        good.push(
            "🌬️ خنک‌کننده انتخاب شد."
        );

    }

    const result =
        document.getElementById("buildResult");

    if (!result) return;

    result.innerHTML = `

        <div class="homeCard rgb">

            <h2>
                🛠️ سیستم پیشنهادی تو
            </h2>

            <p>
                🧠 CPU:
                <strong>${escapeHTML(cpu)}</strong>
            </p>

            <p>
                🎮 GPU:
                <strong>${escapeHTML(gpu)}</strong>
            </p>

            <p>
                🧮 RAM:
                <strong>${escapeHTML(ram)}</strong>
            </p>

            <p>
                💾 SSD:
                <strong>${escapeHTML(ssd)}</strong>
            </p>

            <p>
                ⚡ PSU:
                <strong>${escapeHTML(psu)}</strong>
            </p>

            <p>
                🌬️ Cooler:
                <strong>${escapeHTML(cooler)}</strong>
            </p>

            <hr>

            ${good.map(item => `<p>${item}</p>`).join("")}

            ${warnings.map(item => `
                <p>${item}</p>
            `).join("")}

            <p>
                💡 برای سازگاری صددرصدی،
                مدل دقیق مادربرد هم باید انتخاب شود.
            </p>

        </div>

    `;

}

// =====================================================
// LIKE SYSTEM
// =====================================================

let likes =
    Number(
        localStorage.getItem(
            "computerSiteLikes"
        ) || 0
    );

function updateLikes() {

    const element =
        document.getElementById("likes");

    if (element) {

        element.textContent =
            likes;

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

// =====================================================
// COMMENTS
// =====================================================

let comments =
    JSON.parse(
        localStorage.getItem(
            "computerSiteComments"
        ) || "[]"
    );

function addComment() {

    const input =
        document.getElementById("comment");

    if (!input) return;

    const text =
        input.value.trim();

    if (!text) {

        alert(
            "اول کامنتت رو بنویس 😄"
        );

        return;

    }

    comments.push({

        text: text,

        date:
            new Date()
                .toLocaleString("fa-IR")

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

    if (!comments.length) {

        container.innerHTML = `
            <p>
                هنوز کامنتی ثبت نشده.
                اولین نفر باش! 😎
            </p>
        `;

        return;

    }

    comments
        .slice()
        .reverse()
        .forEach(comment => {

            const div =
                document.createElement("div");

            div.className =
                "homeCard";

            div.innerHTML = `

                <p>
                    💬
                    ${escapeHTML(comment.text)}
                </p>

                <small>
                    ${escapeHTML(comment.date)}
                </small>

            `;

            container.appendChild(div);

        });

}

// =====================================================
// SUPPORT
// =====================================================

function sendSupport() {

    const input =
        document.getElementById("supportText");

    const result =
        document.getElementById("supportResult");

    if (!input || !result) return;

    const text =
        input.value.trim();

    if (!text) {

        result.innerHTML = `
            <p>
                ⚠️ لطفاً مشکلت را بنویس.
            </p>
        `;

        return;

    }

    result.innerHTML = `

        <div class="homeCard rgb">

            <h2>
                ✅ پیام دریافت شد
            </h2>

            <p>
                ممنون که مشکل را گزارش کردی.
            </p>

            <p>
                📝 پیام تو ثبت شد.
            </p>

        </div>

    `;

    input.value = "";

}

// =====================================================
// SECURITY
// =====================================================

function escapeHTML(text) {

    const element =
        document.createElement("div");

    element.textContent =
        text;

    return element.innerHTML;

}

// =====================================================
// STARTUP
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateLikes();

        renderComments();

        // صفحه اصلی
        showPage("home");

        console.log(
            "⚡ Computer Site 1.0 is running!"
        );

    }
);