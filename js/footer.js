const footerTemplate = `
<footer class="footer">
  <div class="footer-glow"></div>
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="image/logo-1copy copy.png" alt="جامعة الكنوز">
        <div class="footer-uni-name" data-t="uni_name_ar">جامعة الكنوز</div>
        <p data-t="footer_desc">مؤسسة أكاديمية متميزة تسعى إلى تحقيق التميز في التعليم والبحث العلمي.</p>
        <div class="footer-social">
          <a href="#"><i class="fa-brands fa-facebook-f"></i></a>
          <a href="#"><i class="fa-brands fa-x-twitter"></i></a>
          <a href="#"><i class="fa-brands fa-youtube"></i></a>
          <a href="#"><i class="fa-brands fa-instagram"></i></a>
          <a href="#"><i class="fa-brands fa-telegram"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-t="footer_links1">روابط سريعة</h4>
        <div class="footer-links">
          <a href="index.html"><i class="fa-solid fa-chevron-left"></i><span>الرئيسية</span></a>
          <a href="about.html"><i class="fa-solid fa-chevron-left"></i><span>عن الجامعة</span></a>
          <a href="news.html"><i class="fa-solid fa-chevron-left"></i><span>الأخبار</span></a>
          <a href="admission.html"><i class="fa-solid fa-chevron-left"></i><span>القبول</span></a>
          <a href="students.html"><i class="fa-solid fa-chevron-left"></i><span>بوابة الطلاب</span></a>
          <a href="gallery.html"><i class="fa-solid fa-chevron-left"></i><span>المعرض</span></a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-t="footer_links2">الكليات</h4>
        <div class="footer-links">
          <a href="dept-dentistry.html"><i class="fa-solid fa-chevron-left"></i><span>طب الأسنان</span></a>
          <a href="dept-pharmacy.html"><i class="fa-solid fa-chevron-left"></i><span>الصيدلة</span></a>
          <a href="dept-engineering.html"><i class="fa-solid fa-chevron-left"></i><span>هندسة تقنيات الحاسوب</span></a>
          <a href="dept-law.html"><i class="fa-solid fa-chevron-left"></i><span>القانون</span></a>
          <a href="departments.html"><i class="fa-solid fa-chevron-left"></i><span>المزيد من الكليات</span></a>
        </div>
      </div>
      <div class="footer-col">
        <h4 data-t="footer_links3">تواصل معنا</h4>
        <div>
          <div class="footer-contact-item"><i class="fa-solid fa-phone"></i><span data-t="contact1_value">+964 780 000 0000</span></div>
          <div class="footer-contact-item"><i class="fa-solid fa-envelope"></i><span data-t="contact2_value">info@alkunooz.edu.iq</span></div>
          <div class="footer-contact-item"><i class="fa-solid fa-clock"></i><span data-t="contact3_value">الأحد – الخميس: 8ص – 4م</span></div>
          <div class="footer-contact-item"><i class="fa-solid fa-location-dot"></i><span data-t="contact4_value">العراق — البصرة</span></div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <span data-t="footer_copy">© 2026 جامعة الكنوز. جميع الحقوق محفوظة.</span>
      <div class="footer-bottom-links">
        <a href="#">سياسة الخصوصية</a>
        <a href="#">شروط الاستخدام</a>
        <a href="contact.html">اتصل بنا</a>
      </div>
    </div>
  </div>
</footer>
`;

document.addEventListener('DOMContentLoaded', () => {
  // Always append footer to the body
  document.body.insertAdjacentHTML('beforeend', footerTemplate);

  // Trigger translation pass for the newly injected elements
  if (typeof updatePageLanguage === 'function') {
    const currentLang = localStorage.getItem('ku-lang') || 'ar';
    updatePageLanguage(currentLang);
  }
});
