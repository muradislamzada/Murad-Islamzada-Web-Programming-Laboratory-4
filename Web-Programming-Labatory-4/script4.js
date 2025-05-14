const melumatlar = {
  "Təhsil": [
    "Azərbaycan Texniki Universiteti - İnformasiya Təhlükəsizliyi (1-ci kurs, 2024 - Davam edir)"
  ],
  "Bacarıqlar": [
    "✔Proqramlaşdırma dilləri (Python, C++, Java və s.)",
    "✔Frontend Texnologiyaları (HTML, CSS və s.)",
    "✔Ofis Proqramları (MS Word, MS Excel, MS PowerPoint)"
  ],
  "İş Təcrübəsi": ["Praktikaya Gediləcək"],
  "Haqqımda": [
    "Mən dəqiq, çevik və komanda ilə işləməyə həvəsli biriyəm. Verilən tapşırıqların öhdəsindən yüksək səviyyədə gəlmək üçün daim çalışıram. İşləyəcəyim vəzifə üçün bütün bacarıq və keyfiyyətlərimi səmərəli şəkildə istifadə etməyə və bu işə həvəslə yanaşmağa hazıram. Həmçinin, yeni təcrübə imkanlarını dəyərləndirməyə və biliklərimi genişləndirməyə maraqlıyam."
  ],
  "Şəxsi Keyfiyyətlər": [
    "✔Yüksək iş etikası",
    "✔Problemlərin səmərəli həlli",
    "✔Analitik düşünmək",
    "✔Təqdimat bacarıqları",
    "✔Yüksək ünsiyyət bacarığı",
    "✔Stressə davamlı",
    "✔Kollektiv ilə işləmə"
  ],
  "Hobbi və Maraqlar": [
    "İdman ilə məşğul olmaq, futbol oynamaq, inkişaf üçün əlavə biliklər əldə etməyə çalışmaq."
  ]
};
const şəxsiMəlumatlar = {
  ad: "Murad Islamzada",
  email: "muradislamzada@gmail.com",
  doğumTarixi: "",
  təsvir: "",
  ünvan: "Bakı, Qaradağ rayonu, Sahil Qəsəbəsi",
  telefon: "050 993 81 06"
};
function adDoğrulaması(ad) {
  if (ad.trim() === "") {
    return "Ad boş ola bilməz";
  }
  if (ad.length < 3) {
    return "Ad ən azı 3 simvol olmalıdır";
  }
  return "";
}
function emailDoğrulaması(email) {
  email = email.trim();
  if (email === "") {
    return "Email boş ola bilməz";
  }
  if (!email.includes("@") || !email.includes(".")) {
    return "Düzgün email formatı daxil edin";
  }
  return "";
}
function tarixDoğrulaması(tarix) {
  if (tarix.trim() === "") {
    return "Tarix seçilməlidir";
  }
  const seçilənTarix = new Date(tarix);
  const bugün = new Date();
  if (seçilənTarix > bugün) {
    return "Doğum tarixi gələcəkdə ola bilməz";
  }
  return "";
}
function təsvirDoğrulaması(təsvir) {
  if (təsvir.trim() === "") {
    return "Təsvir boş ola bilməz";
  }
  if (təsvir.length > 200) {
    return "Təsvir 200 simvoldan çox ola bilməz";
  }
  return "";
}
function localStorageYaddaSaxla() {
  localStorage.setItem('şəxsiMəlumatlar', JSON.stringify(şəxsiMəlumatlar));
  localStorage.setItem('cvMəlumatları', JSON.stringify(melumatlar));
}
function localStorageOxu() {
  const şəxsi = JSON.parse(localStorage.getItem('şəxsiMəlumatlar') || '{}');
  const cv = JSON.parse(localStorage.getItem('cvMəlumatları') || '{}');
  Object.assign(şəxsiMəlumatlar, şəxsi);
  Object.assign(melumatlar, cv);
}
function formaMəlumatlarınıDoldur() {
  document.getElementById('ad').value = şəxsiMəlumatlar.ad;
  document.getElementById('email').value = şəxsiMəlumatlar.email;
  document.getElementById('doğum-tarixi').value = şəxsiMəlumatlar.doğumTarixi;
  document.getElementById('təsvir').value = şəxsiMəlumatlar.təsvir;
  document.getElementById('ünvan').value = şəxsiMəlumatlar.ünvan;
  document.getElementById('telefon').value = şəxsiMəlumatlar.telefon;
  const təsvirSahəsi = document.getElementById('təsvir');
  if (təsvirSahəsi) {
    document.getElementById('təsvirSay').textContent = `${təsvirSahəsi.value.length}/200`;
  }
  məlumatlarıGörüntülə();
}
function məlumatlarıGörüntülə() {
  if (şəxsiMəlumatlar.doğumTarixi) {
    document.getElementById('doğum-tarixi-göstər').textContent = şəxsiMəlumatlar.doğumTarixi;
  }
  document.getElementById('telefon-göstər').textContent = şəxsiMəlumatlar.telefon;
  document.getElementById('email-göstər').textContent = şəxsiMəlumatlar.email;
  document.getElementById('ünvan-göstər').textContent = şəxsiMəlumatlar.ünvan;
}
window.onload = function () {
  localStorageOxu();
  formaMəlumatlarınıDoldur();
  const təsvirSahəsi = document.getElementById('təsvir');
  if (təsvirSahəsi) {
    təsvirSahəsi.addEventListener('input', function() {
      document.getElementById('təsvirSay').textContent = `${this.value.length}/200`;
    });
  }
  const şəxsiForm = document.getElementById('şəxsi-form');
  if (şəxsiForm) {
    şəxsiForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let formDoğrudur = true;
      const ad = document.getElementById('ad').value;
      const adXətası = adDoğrulaması(ad);
      document.getElementById('adError').textContent = adXətası;
      if (adXətası) {
        document.getElementById('ad').classList.add('invalid-input');
        formDoğrudur = false;
      } else {
        document.getElementById('ad').classList.remove('invalid-input');
      }
      const email = document.getElementById('email').value;
      const emailXətası = emailDoğrulaması(email);
      document.getElementById('emailError').textContent = emailXətası;
      if (emailXətası) {
        document.getElementById('email').classList.add('invalid-input');
        formDoğrudur = false;
      } else {
        document.getElementById('email').classList.remove('invalid-input');
      }
      const tarix = document.getElementById('doğum-tarixi').value;
      const tarixXətası = tarixDoğrulaması(tarix);
      document.getElementById('tarixError').textContent = tarixXətası;
      if (tarixXətası) {
        document.getElementById('doğum-tarixi').classList.add('invalid-input');
        formDoğrudur = false;
      } else {
        document.getElementById('doğum-tarixi').classList.remove('invalid-input');
      }
      const təsvir = document.getElementById('təsvir').value;
      const təsvirXətası = təsvirDoğrulaması(təsvir);
      document.getElementById('təsvirError').textContent = təsvirXətası;
      if (təsvirXətası) {
        document.getElementById('təsvir').classList.add('invalid-input');
        formDoğrudur = false;
      } else {
        document.getElementById('təsvir').classList.remove('invalid-input');
      }
      if (formDoğrudur) {
        şəxsiMəlumatlar.ad = ad;
        şəxsiMəlumatlar.email = email;
        şəxsiMəlumatlar.doğumTarixi = tarix;
        şəxsiMəlumatlar.təsvir = təsvir;
        şəxsiMəlumatlar.ünvan = document.getElementById('ünvan').value;
        şəxsiMəlumatlar.telefon = document.getElementById('telefon').value;
        localStorageYaddaSaxla();
        məlumatlarıGörüntülə();
        alert("Məlumatlar uğurla yadda saxlanıldı!");
      }
    });
  }
  const bolmeler = document.getElementsByClassName("bolme");
  for (let i = 0; i < bolmeler.length; i++) {
    const bolme = bolmeler[i];
    const h2 = bolme.getElementsByTagName("h2")[0];
    const basliq = h2.textContent;
    const icerik = bolme.getElementsByClassName("icerik")[0];
    const btn = bolme.getElementsByClassName("elave-et")[0];
    const input = bolme.getElementsByClassName("yeni-məlumat")[0];
    if (melumatlar[basliq]) {
      icerikYenilə(icerik, melumatlar[basliq], basliq);
    }
    h2.onclick = function () {
      if (icerik.style.display === "none") {
        icerik.style.display = "block";
      } else {
        icerik.style.display = "none";
      }
    };
    btn.onclick = function () {
      const məlumat = input.value;
      if (məlumat !== "") {
        if (!melumatlar[basliq]) {
          melumatlar[basliq] = [];
        }
        melumatlar[basliq].push(məlumat);
        icerikYenilə(icerik, melumatlar[basliq], basliq);
        input.value = "";
        localStorageYaddaSaxla();
      }
    };
  }
};
function icerikYenilə(icerik, məlumatSiyahısı, basliq) {
  icerik.innerHTML = "";
  if (məlumatSiyahısı.length > 0) {
    if (basliq === "Bacarıqlar" || basliq === "Şəxsi Keyfiyyətlər") {
      const ul = document.createElement("ul");
      for (let j = 0; j < məlumatSiyahısı.length; j++) {
        const li = document.createElement("li");
        li.textContent = məlumatSiyahısı[j];
        li.onclick = function () {
          const yeni = prompt("Məlumatı dəyiş:", li.textContent);
          if (yeni) {
            məlumatSiyahısı[j] = yeni;
            li.textContent = yeni;
            localStorageYaddaSaxla();
          }
        };
        ul.appendChild(li);
      }
      icerik.appendChild(ul);
    } else {
      for (let j = 0; j < məlumatSiyahısı.length; j++) {
        const p = document.createElement("p");
        p.textContent = məlumatSiyahısı[j];
        p.onclick = function () {
          const yeni = prompt("Məlumatı dəyiş:", p.textContent);
          if (yeni) {
            məlumatSiyahısı[j] = yeni;
            p.textContent = yeni;
            localStorageYaddaSaxla();
          }
        };
        icerik.appendChild(p);
      }
    }
  }
}
