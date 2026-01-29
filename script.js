// 移动端菜单切换
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        });
    }

    // 响应式导航栏
    function adjustNavbar() {
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '100%';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = 'white';
            navLinks.style.boxShadow = '0 5px 15px rgba(0,0,0,0.1)';
            navLinks.style.padding = '20px 0';

            navLinks.querySelectorAll('li').forEach(li => {
                li.style.margin = '10px 0';
            });
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'row';
            navLinks.style.position = 'static';
            navLinks.style.backgroundColor = 'transparent';
            navLinks.style.boxShadow = 'none';
            navLinks.style.padding = '0';

            navLinks.querySelectorAll('li').forEach(li => {
                li.style.margin = '0 0 0 30px';
            });
        }
    }

    // 初始调整
    adjustNavbar();

    // 窗口大小改变时调整
    window.addEventListener('resize', adjustNavbar);

    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // 如果是页面内锚点链接
            if (href !== '#' && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });

                    // 移动端点击后关闭菜单
                    if (window.innerWidth <= 768) {
                        navLinks.style.display = 'none';
                    }
                }
            }
        });
    });

    // 卡片悬停效果增强
    const companyCards = document.querySelectorAll('.company-card');

    companyCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.company-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });

        card.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.company-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    // 表格行悬停效果
    const tableRows = document.querySelectorAll('.comparison-table tbody tr');

    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#f0f7ff';
        });

        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });

    // 页面滚动时导航栏阴影效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.08)';
        }
    });
});