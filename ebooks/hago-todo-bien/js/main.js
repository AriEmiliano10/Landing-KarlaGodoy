/**
 * Ebook Karla Godoy - "Hago Todo Bien y No Pierdo Grasa"
 * Script de Navegación, Interacción y Exportación Editorial
 */

document.addEventListener('DOMContentLoaded', () => {
  const coverPreview = new URLSearchParams(location.search).get('preview') === 'cover';
  document.body.classList.toggle('cover-preview', coverPreview);
  const pages = document.querySelectorAll('.ebook-page');
  const pageSelect = document.getElementById('page-select');
  const pageCounter = document.getElementById('page-counter');
  const printBtn = document.getElementById('btn-print');
  const zoomSelect = document.getElementById('zoom-select');
  const viewport = document.getElementById('ebook-viewport');
  const tocLinks = document.querySelectorAll('.toc-item');

  // Inicializar selector de páginas en la barra de herramientas
  if (pageSelect && pages.length > 0) {
    pages.forEach((page, index) => {
      const pageNum = index + 1;
      const title = page.getAttribute('data-title') || `Página ${pageNum}`;
      const option = document.createElement('option');
      option.value = page.id || `page-${pageNum}`;
      option.textContent = `${String(pageNum).padStart(2, '0')}. ${title}`;
      pageSelect.appendChild(option);
    });

    pageSelect.addEventListener('change', (e) => {
      const targetId = e.target.value;
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

  // Botón de imprimir / exportar a PDF
  if (printBtn) {
    printBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Ajustar las hojas A4 al lector sin alterar su composición editorial.
  if (zoomSelect && viewport) {
    const applyZoom = () => {
      const scale = zoomSelect.value === 'fit'
        ? Math.min(1, (document.documentElement.clientWidth - (coverPreview ? 0 : 24)) / 794, coverPreview ? window.innerHeight / 1123 : 1)
        : Number(zoomSelect.value);
      pages.forEach(page => { page.style.zoom = scale; });
    };
    zoomSelect.value = 'fit';
    zoomSelect.addEventListener('change', applyZoom);
    window.addEventListener('resize', applyZoom);
    applyZoom();
  }
  // Enlaces del índice
  tocLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').replace('#', '');
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Detector de página visible con IntersectionObserver
  if ('IntersectionObserver' in window && pageCounter) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const pageIndex = Array.from(pages).indexOf(entry.target) + 1;
          pageCounter.textContent = `Página ${pageIndex} de ${pages.length}`;
          if (pageSelect) {
            pageSelect.value = entry.target.id;
          }
        }
      });
    }, { threshold: 0.5 });

    pages.forEach(p => observer.observe(p));
  }

  // La propuesta permite probar los ejercicios solo durante esta visita.
  // No persistir respuestas personales o de salud en el navegador.
});