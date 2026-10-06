// EZ Reports Interactive Script
document.addEventListener('DOMContentLoaded', () => {
  // 1. FAQ Accordion Logic
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    if (!btn) return;
    
    btn.addEventListener('click', () => {
      const isOpen = item.classList.contains('is-open');
      
      // Close all other items
      faqItems.forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('is-open');
          const otherBtn = otherItem.querySelector('.faq-question-btn');
          const otherIcon = otherItem.querySelector('.faq-toggle-icon');
          if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          if (otherIcon) otherIcon.textContent = '+';
        }
      });
      
      // Toggle current
      if (isOpen) {
        item.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        const icon = item.querySelector('.faq-toggle-icon');
        if (icon) icon.textContent = '+';
      } else {
        item.classList.add('is-open');
        btn.setAttribute('aria-expanded', 'true');
        const icon = item.querySelector('.faq-toggle-icon');
        if (icon) icon.textContent = '−';
      }
    });
  });

  // 2. Interactive Analysis Simulator Modal
  const openDemoBtn = document.getElementById('openDemoBtn');
  const demoModal = document.getElementById('demoModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const dropzoneSim = document.getElementById('dropzoneSim');
  const simOutput = document.getElementById('simOutput');
  const sampleChips = document.querySelectorAll('.sim-chip');

  if (openDemoBtn && demoModal) {
    openDemoBtn.addEventListener('click', () => {
      demoModal.classList.add('is-active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeModalBtn && demoModal) {
    closeModalBtn.addEventListener('click', () => {
      demoModal.classList.remove('is-active');
      document.body.style.overflow = '';
    });

    demoModal.addEventListener('click', (e) => {
      if (e.target === demoModal) {
        demoModal.classList.remove('is-active');
        document.body.style.overflow = '';
      }
    });
  }

  // Handle sample file click in simulator
  sampleChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      e.stopPropagation();
      const sample = chip.getAttribute('data-sample');
      simulateAnalysis(sample);
    });
  });

  if (dropzoneSim) {
    dropzoneSim.addEventListener('click', () => {
      simulateAnalysis('financials');
    });
  }

  function simulateAnalysis(type) {
    if (!simOutput) return;
    
    // Animate processing state
    const title = document.getElementById('simReportTitle');
    const meta = document.getElementById('simReportMeta');
    const summary = document.getElementById('simReportSummary');
    const metric1 = document.getElementById('metric1');
    const metric2 = document.getElementById('metric2');
    const metric3 = document.getElementById('metric3');

    if (type === 'consulting') {
      if (title) title.textContent = 'Client Advisory Deliverable: Consulting Hours & Billing Audit';
      if (meta) meta.textContent = 'Analyzed 1 CSV export • 864 logged consultant entries';
      if (summary) summary.innerHTML = 'Total billable project hours reached <strong>1,840.5 hrs</strong> across 8 active customer accounts. Realized blended hourly yield registered at <strong>$185.00/hr</strong> with zero non-reconciled billable leaks.';
      if (metric1) metric1.textContent = '$340,492';
      if (metric2) metric2.textContent = '94.6%';
      if (metric3) metric3.textContent = '1,840.5h';
    } else {
      if (title) title.textContent = 'Executive Summary: Q3 Client Financial Performance';
      if (meta) meta.textContent = 'Analyzed 3 linked workbooks • 1,420 rows calculated';
      if (summary) summary.innerHTML = 'Total realized client billings reached <strong>$148,250</strong> across 14 engagements, demonstrating an <strong>18.4% YoY surge</strong> driven by advisory retainers. Average project cycle duration decreased from 28.4 days to 21.1 days.';
      if (metric1) metric1.textContent = '$148,250';
      if (metric2) metric2.textContent = '74.2%';
      if (metric3) metric3.textContent = '91.8%';
    }

    simOutput.classList.remove('is-ready');
    void simOutput.offsetWidth; // Trigger reflow
    simOutput.classList.add('is-ready');
  }

  // 3. Mobile menu toggler
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      if (navLinks.style.display === 'flex') {
        navLinks.style.display = 'none';
      } else {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '72px';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.background = '#FFFFFF';
        navLinks.style.padding = '20px';
        navLinks.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
        navLinks.style.borderBottom = '1px solid #E2E8F0';
      }
    });
  }

  // 4. Smooth Anchor Scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

  // 5. Hero White & Blue Theme Toggle
  const heroThemeToggle = document.getElementById('heroThemeToggle');
  const heroWrapper = document.querySelector('.hero-wrapper-blue');
  if (heroThemeToggle && heroWrapper) {
    heroThemeToggle.addEventListener('click', () => {
      const isWhiteMode = heroWrapper.classList.toggle('theme-white-mode');
      if (isWhiteMode) {
        heroThemeToggle.textContent = '🎨 Theme: Crisp White & Blue';
        heroThemeToggle.style.background = '#FFFFFF';
        heroThemeToggle.style.color = '#1D4ED8';
      } else {
        heroThemeToggle.textContent = '🎨 Theme: Royal Blue & White';
        heroThemeToggle.style.background = '#2563EB';
        heroThemeToggle.style.color = '#FFFFFF';
      }
    });
  }

  // 6. Modern Hero Executive Dashboard Controller
  const heroTabs = document.querySelectorAll('.chart-tab-btn');
  const curvePath = document.getElementById('chartCurvePath');
  const areaPath = document.getElementById('chartAreaPath');
  const targetLine = document.getElementById('chartTargetLine');
  const guideLine = document.getElementById('chartGuideLine');
  const chartPoints = document.querySelectorAll('.chart-point');
  const chartTooltip = document.getElementById('chartTooltip');
  const tooltipVal = document.getElementById('tooltipVal');
  const tooltipGrowth = document.getElementById('tooltipGrowth');
  const tooltipSub = document.getElementById('tooltipSub');
  const tooltipBadge = document.getElementById('tooltipBadge');
  const tooltipTrace = document.getElementById('tooltipTrace');
  const heroKpi1 = document.getElementById('heroKpi1');
  const heroKpi1Trend = document.getElementById('heroKpi1Trend');
  const heroKpi2 = document.getElementById('heroKpi2');
  const heroKpi2Trend = document.getElementById('heroKpi2Trend');
  const heroChartSubtitle = document.getElementById('heroChartSubtitle');
  const heroFindingQuote = document.getElementById('heroFindingQuote');
  const heroClientList = document.getElementById('heroClientList');
  const timelineLabels = document.querySelectorAll('.chart-timeline-labels span');

  const datasetMetrics = {
    revenue: {
      subtitle: 'Monthly Revenue Performance',
      curve: 'M 15 120 C 85 110, 140 92, 205 78 C 265 64, 305 78, 350 28 C 390 -8, 420 42, 445 34',
      area: 'M 15 120 C 85 110, 140 92, 205 78 C 265 64, 305 78, 350 28 C 390 -8, 420 42, 445 34 L 445 142 L 15 142 Z',
      target: 'M 15 100 C 90 85, 180 75, 270 60 C 340 50, 400 44, 445 38',
      peakIndex: 4,
      peakX: 350,
      peakY: 28,
      points: [
        { x: 15, y: 120, val: '$18,400', growth: '+4.2%', trace: 'Sheet1!C15', label: 'May', sub: 'Northwind · Row 15' },
        { x: 95, y: 108, val: '$23,600', growth: '+7.8%', trace: 'Sheet1!C19', label: 'Jun', sub: 'Northwind · Row 19' },
        { x: 180, y: 84, val: '$31,250', growth: '+12.1%', trace: 'Sheet1!C22', label: 'Jul', sub: 'Northwind · Row 22' },
        { x: 265, y: 68, val: '$38,900', growth: '+14.6%', trace: 'Sheet1!C25', label: 'Aug', sub: 'Northwind · Row 25' },
        { x: 350, y: 28, val: '$48,290', growth: '+18.4% YoY', trace: 'Sheet1!C28', label: 'Sep (Peak)', sub: 'Northwind Traders · Query #18' },
        { x: 445, y: 34, val: '$44,810', growth: '+16.2%', trace: 'Sheet1!C32', label: 'Oct', sub: 'Northwind · Row 32' }
      ],
      kpi1: '$148,250',
      kpi1Trend: '+24.8%',
      kpi2: '$185/hr',
      kpi2Trend: '+11.2%',
      finding: '“Top 2 clients generate 57% of quarterly revenue. High retention in Northwind Traders protects bottom line with zero billing leaks.”',
      clients: [
        { avatar: 'NT', name: 'Northwind Traders', amount: '$48,290', growth: '+18.4%', width: '86%' },
        { avatar: 'AC', name: 'Acme Advisory', amount: '$36,150', growth: '+8.1%', width: '64%' },
        { avatar: 'GL', name: 'Globex Financial', amount: '$29,480', growth: '+5.6%', width: '52%' }
      ]
    },
    margin: {
      subtitle: 'Gross Margin Realization %',
      curve: 'M 15 90 C 85 82, 140 76, 205 60 C 265 48, 305 35, 350 20 C 390 10, 420 22, 445 25',
      area: 'M 15 90 C 85 82, 140 76, 205 60 C 265 48, 305 35, 350 20 C 390 10, 420 22, 445 25 L 445 142 L 15 142 Z',
      target: 'M 15 80 C 90 70, 180 58, 270 48 C 340 40, 400 32, 445 30',
      peakIndex: 4,
      peakX: 350,
      peakY: 20,
      points: [
        { x: 15, y: 90, val: '54.2%', growth: '+2.1%', trace: 'Sheet1!E15', label: 'May', sub: 'Advisory Retainers' },
        { x: 95, y: 82, val: '58.7%', growth: '+3.5%', trace: 'Sheet1!E19', label: 'Jun', sub: 'Advisory Retainers' },
        { x: 180, y: 76, val: '64.1%', growth: '+6.2%', trace: 'Sheet1!E22', label: 'Jul', sub: 'Advisory Retainers' },
        { x: 265, y: 60, val: '69.8%', growth: '+8.9%', trace: 'Sheet1!E25', label: 'Aug', sub: 'Advisory Retainers' },
        { x: 350, y: 20, val: '76.4%', growth: '+12.6% YoY', trace: 'Sheet1!E28', label: 'Sep (Peak)', sub: 'Margin Expansion · Query #24' },
        { x: 445, y: 25, val: '74.2%', growth: '+10.4%', trace: 'Sheet1!E32', label: 'Oct', sub: 'Advisory Retainers' }
      ],
      kpi1: '68.5%',
      kpi1Trend: '+8.4%',
      kpi2: '$210/hr',
      kpi2Trend: '+14.5%',
      finding: '“Blended gross margin expanded to 76.4% in September as fixed-fee strategy work eclipsed hourly implementation tasks.”',
      clients: [
        { avatar: 'NT', name: 'Northwind Traders', amount: '76.4%', growth: '+12.6%', width: '92%' },
        { avatar: 'AC', name: 'Acme Advisory', amount: '68.2%', growth: '+7.4%', width: '74%' },
        { avatar: 'GL', name: 'Globex Financial', amount: '61.5%', growth: '+4.8%', width: '60%' }
      ]
    },
    hours: {
      subtitle: 'Billable Advisory Hours Tracked',
      curve: 'M 15 105 C 85 96, 140 85, 205 70 C 265 52, 305 60, 350 25 C 390 15, 420 30, 445 36',
      area: 'M 15 105 C 85 96, 140 85, 205 70 C 265 52, 305 60, 350 25 C 390 15, 420 30, 445 36 L 445 142 L 15 142 Z',
      target: 'M 15 95 C 90 82, 180 72, 270 60 C 340 52, 400 48, 445 42',
      peakIndex: 4,
      peakX: 350,
      peakY: 25,
      points: [
        { x: 15, y: 105, val: '124 hrs', growth: '+5.0%', trace: 'Sheet2!D15', label: 'May', sub: 'Audited Timesheets' },
        { x: 95, y: 96, val: '168 hrs', growth: '+8.2%', trace: 'Sheet2!D19', label: 'Jun', sub: 'Audited Timesheets' },
        { x: 180, y: 85, val: '215 hrs', growth: '+11.5%', trace: 'Sheet2!D22', label: 'Jul', sub: 'Audited Timesheets' },
        { x: 265, y: 70, val: '264 hrs', growth: '+15.2%', trace: 'Sheet2!D25', label: 'Aug', sub: 'Audited Timesheets' },
        { x: 350, y: 25, val: '318 hrs', growth: '+22.4% YoY', trace: 'Sheet2!D28', label: 'Sep (Peak)', sub: 'Capacity Utilization: 94%' },
        { x: 445, y: 36, val: '290 hrs', growth: '+18.1%', trace: 'Sheet2!D32', label: 'Oct', sub: 'Audited Timesheets' }
      ],
      kpi1: '1,379 hrs',
      kpi1Trend: '+16.5%',
      kpi2: '94.2%',
      kpi2Trend: '+6.8%',
      finding: '“Total billable utilization held at 94.2% with zero unreconciled timesheet entries across 8 consultant engagements.”',
      clients: [
        { avatar: 'NT', name: 'Northwind Traders', amount: '318 hrs', growth: '+22.4%', width: '90%' },
        { avatar: 'AC', name: 'Acme Advisory', amount: '242 hrs', growth: '+12.1%', width: '70%' },
        { avatar: 'GL', name: 'Globex Financial', amount: '198 hrs', growth: '+8.5%', width: '56%' }
      ]
    }
  };

  function updateDashboardMetric(metricKey) {
    const data = datasetMetrics[metricKey];
    if (!data) return;

    // 1. Update Curve & Area Paths
    if (curvePath) curvePath.setAttribute('d', data.curve);
    if (areaPath) areaPath.setAttribute('d', data.area);
    if (targetLine) targetLine.setAttribute('d', data.target);

    // 2. Update KPI numbers
    if (heroKpi1) heroKpi1.textContent = data.kpi1;
    if (heroKpi1Trend) heroKpi1Trend.textContent = data.kpi1Trend;
    if (heroKpi2) heroKpi2.textContent = data.kpi2;
    if (heroKpi2Trend) heroKpi2Trend.textContent = data.kpi2Trend;
    if (heroChartSubtitle) heroChartSubtitle.textContent = data.subtitle;
    if (heroFindingQuote) heroFindingQuote.innerHTML = data.finding;

    // 3. Update Points
    chartPoints.forEach((pt, idx) => {
      const ptData = data.points[idx];
      if (ptData) {
        pt.setAttribute('cx', ptData.x);
        pt.setAttribute('cy', ptData.y);
        pt.setAttribute('data-val', ptData.val);
        pt.setAttribute('data-growth', ptData.growth);
        pt.setAttribute('data-trace', ptData.trace);
        pt.setAttribute('data-label', ptData.label);
        pt.setAttribute('data-sub', ptData.sub);
        
        if (idx === data.peakIndex) {
          pt.classList.add('active-peak');
        } else {
          pt.classList.remove('active-peak');
        }
      }
    });

    // 4. Update Guide line & Tooltip position
    if (guideLine) {
      guideLine.setAttribute('x1', data.peakX);
      guideLine.setAttribute('x2', data.peakX);
      guideLine.setAttribute('y1', data.peakY);
    }

    if (chartTooltip) {
      const peak = data.points[data.peakIndex];
      chartTooltip.style.left = `${(data.peakX / 460) * 100}%`;
      chartTooltip.style.top = `${data.peakY - 14}px`;
      if (tooltipBadge) tooltipBadge.innerHTML = `${peak.label} &bull; Q3`;
      if (tooltipTrace) tooltipTrace.textContent = peak.trace;
      if (tooltipVal) tooltipVal.textContent = peak.val;
      if (tooltipGrowth) tooltipGrowth.textContent = peak.growth;
      if (tooltipSub) tooltipSub.textContent = peak.sub;
    }

    // 5. Update Client List
    if (heroClientList) {
      heroClientList.innerHTML = data.clients.map(c => `
        <div class="client-row-item">
          <div class="client-row-meta">
            <div class="client-badge-info">
              <span class="client-avatar">${c.avatar}</span>
              <span class="client-row-name">${c.name}</span>
            </div>
            <span class="client-row-amount">${c.amount} <span class="badge-growth">${c.growth}</span></span>
          </div>
          <div class="client-progress-track">
            <div class="client-progress-fill" style="width: ${c.width};"></div>
          </div>
        </div>
      `).join('');
    }
  }

  // Bind tab click events
  heroTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      heroTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const metric = tab.getAttribute('data-metric');
      updateDashboardMetric(metric);
    });
  });

  // Bind hover/click interaction on points
  chartPoints.forEach(pt => {
    pt.addEventListener('mouseenter', () => {
      const cx = parseFloat(pt.getAttribute('cx'));
      const cy = parseFloat(pt.getAttribute('cy'));
      const val = pt.getAttribute('data-val');
      const growth = pt.getAttribute('data-growth');
      const trace = pt.getAttribute('data-trace');
      const label = pt.getAttribute('data-label');
      const sub = pt.getAttribute('data-sub');

      chartPoints.forEach(p => p.classList.remove('active-peak'));
      pt.classList.add('active-peak');

      if (guideLine) {
        guideLine.setAttribute('x1', cx);
        guideLine.setAttribute('x2', cx);
        guideLine.setAttribute('y1', cy);
      }

      if (chartTooltip) {
        chartTooltip.style.left = `${(cx / 460) * 100}%`;
        chartTooltip.style.top = `${cy - 14}px`;
        if (tooltipBadge) tooltipBadge.innerHTML = `${label} &bull; Q3`;
        if (tooltipTrace) tooltipTrace.textContent = trace;
        if (tooltipVal) tooltipVal.textContent = val;
        if (tooltipGrowth) tooltipGrowth.textContent = growth;
        if (tooltipSub) tooltipSub.textContent = sub;
      }
    });
  });

  // Interactive trace link copy/toast effect
  const traceLink = document.querySelector('.finding-trace-link');
  if (traceLink) {
    traceLink.addEventListener('click', () => {
      const originalText = traceLink.innerHTML;
      traceLink.innerHTML = `
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
        <span style="color:#93C5FD;">Cell Provenance Copied to Clipboard!</span>
      `;
      setTimeout(() => {
        traceLink.innerHTML = originalText;
      }, 2000);
    });
  }

// 7. Professional Motion: header elevation on scroll
  const header = document.querySelector('.header');
  const onScrollHeader = () => {
    if (!header) return;
    header.classList.toggle('is-scrolled', window.scrollY > 12);
  };
  window.addEventListener('scroll', onScrollHeader, { passive: true });
  onScrollHeader();

  // 8. Professional Motion: scroll reveal (IntersectionObserver)
  const revealTargets = document.querySelectorAll(
    '.who-cards-section, .who-card-box, .how-it-works-section .step-card, ' +
    '.pricing-section, .pricing-card, .compare-section, .faq-section, ' +
    '.contact-banner, .metrics-box-card, .metric-item, section[id="contact"] > div'
  );
  revealTargets.forEach((el, i) => {
    if (el.classList.contains('reveal')) return;
    el.classList.add('reveal');
    // stagger: cards get incremental delay
    if (el.classList.contains('who-card-box') || el.classList.contains('step-card') || el.classList.contains('pricing-card')) {
      const idx = Array.from(el.parentElement.children).indexOf(el);
      el.style.setProperty('--reveal-delay', `${Math.min(idx * 0.08, 0.32)}s`);
    }
  });
  // Hero columns directional
  const heroLeft = document.querySelector('.hero-live-left');
  const heroRight = document.querySelector('.hero-live-right');
  if (heroLeft) { heroLeft.classList.add('reveal', 'reveal-left'); heroLeft.classList.add('in-view'); }
  if (heroRight) { heroRight.classList.add('reveal', 'reveal-right'); heroRight.classList.add('in-view'); }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // trigger progress bars inside
        entry.target.querySelectorAll('.client-progress-fill').forEach(bar => {
          const w = bar.style.width || getComputedStyle(bar).width;
          // preserve target width in --w once
          if (!bar.style.getPropertyValue('--w')) {
            const inlineW = bar.getAttribute('style')?.match(/width:\s*([^;]+)/)?.[1];
            if (inlineW) bar.style.setProperty('--w', inlineW.trim());
          }
        });
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Preserve progress-bar target widths for animation
  document.querySelectorAll('.client-progress-fill').forEach(bar => {
    const m = bar.getAttribute('style')?.match(/width:\s*([^;]+)/);
    if (m) bar.style.setProperty('--w', m[1].trim());
  });

  // 9. Professional Motion: count-up for hero metrics (~90 sec, 0, 25 MB, 16)
  const metricNums = document.querySelectorAll('.metrics-box-card .metric-big-num');
  const parseMetric = (text) => {
    const t = text.trim();
    if (t.startsWith('~')) return { prefix: '~', num: parseFloat(t.replace(/[^0-9.]/g, '')), suffix: t.replace(/[~0-9.\s]/g, ' ').trim().replace(/\s+/g, ' ') ? ' ' + t.replace(/^[~\d.\s]+/, '') : '', raw: t };
    if (/^\d/.test(t)) return { prefix: '', num: parseFloat(t.replace(/[^0-9.]/g, '')), suffix: t.replace(/^[\d.\s]+/, ''), raw: t };
    return null;
  };
  const animateCount = (el) => {
    const parsed = parseMetric(el.textContent);
    if (!parsed || isNaN(parsed.num)) return;
    if (el.dataset.counted) return;
    el.dataset.counted = '1';
    el.classList.add('counting');
    const target = parsed.num;
    const dur = 1200;
    const start = performance.now();
    const step = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      const formatted = target % 1 !== 0 ? val.toFixed(1) : Math.round(val).toString();
      el.textContent = `${parsed.prefix}${formatted}${parsed.suffix ? (parsed.suffix.startsWith(' ') ? parsed.suffix : ' ' + parsed.suffix) : ''}`.replace(/\s+/g, ' ').trim() === '' ? el.textContent : `${parsed.prefix}${formatted}${parsed.suffix}`;
      // restore exact raw at end
      if (p === 1) { el.textContent = parsed.raw; el.classList.remove('counting'); }
      else requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  const metricIO = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { animateCount(e.target); metricIO.unobserve(e.target); } });
  }, { threshold: 0.4 });
  metricNums.forEach(el => metricIO.observe(el));

  // 10. Professional Motion: subtle tilt on report card (desktop only, very slight)
  const card = document.querySelector('.analysis-report-card');
  if (card && window.matchMedia('(pointer: fine)').matches) {
    card.classList.add('tilt');
    let raf = null;
    card.addEventListener('mousemove', (e) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        card.style.transform = `perspective(900px) rotateX(${(-py * 4).toFixed(2)}deg) rotateY(${(px * 6).toFixed(2)}deg) translateY(-4px)`;
      });
    });
    card.addEventListener('mouseleave', () => {
      if (raf) cancelAnimationFrame(raf);
      card.style.transform = '';
    });
  }

  
});

