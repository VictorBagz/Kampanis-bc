# Service Pages Update Template

This template shows the changes needed to update all service pages (bag-services.html, key-services.html, plus-services.html, shoe-services.html, products.html) to match the home page navigation and footer design.

## 1. Update Head Section

Replace the existing CSS links section with:

```html
<!-- CSS Files -->
<link rel="stylesheet" href="css/wp-emoji-styles.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/wp-block-library.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/classic-theme-styles.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/global-styles.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/contact-form-7.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/sweetalert.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/woocommerce.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/wp-store-locator.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/betheme.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/animations.css" type="text/css" media="all" />
<!-- FontAwesome Icons CDN -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />

<!-- AOS (Animate On Scroll) Library -->
<link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
<script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
<link rel="stylesheet" href="css/fontawesome.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/jplayer.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/responsive.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/fonts.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/dynamic-styles.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/child-theme.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/custom-styles.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/header-styles.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/layout-fix.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/revolution-slider.css" type="text/css" media="all" />
<link rel="stylesheet" href="css/premium-styles.css" type="text/css" media="all" />

<!-- JavaScript Files -->
<script src="js/jquery.min.js"></script>
<script src="js/jquery-migrate.min.js"></script>
<script src="js/sweetalert.min.js"></script>
<script src="js/design.js"></script>
<script src="js/woocommerce-scripts.js"></script>
<script src="js/google-analytics.js"></script>
```

## 2. Add Content Visibility Fix

Add this before the service-specific styles:

```html
<!-- Content Visibility Fix -->
<style>
    /* Ensure content is visible */
    .service-hero,
    .service-content {
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
        transform: none !important;
    }
    
    /* Ensure video content is visible */
    .video-wrapper,
    .video-wrapper iframe {
        opacity: 1 !important;
        visibility: visible !important;
        display: block !important;
    }
    
    /* Ensure grids display properly */
    .services-grid,
    .videos-grid {
        display: grid !important;
    }
</style>
```

## 3. Update Navigation Section

Replace the existing navigation with the premium navigation from alterations.html (lines 352-544).

## 4. Update Footer Scripts

Replace the existing scripts before `</body>` with:

```html
<!-- Main Navigation -->
<script src="js/main-navigation.js"></script>

<!-- Premium Navigation -->
<script src="js/premium-navigation.js"></script>

<!-- Scroll Animations -->
<script src="js/scroll-animations.js"></script>

<!-- Manual Scroll Controls -->
<script src="js/scroll-controls.js"></script>

<!-- Gallery Controls -->
<script src="js/gallery-controls.js"></script>

<!-- Enhanced Scroll Animations -->
<script src="js/scroll-animations-enhanced.js"></script>
```

## 5. Key Changes Summary

- **CSS**: Added `premium-styles.css` for consistent styling
- **Navigation**: Full premium navigation with mobile overlay
- **JavaScript**: Added all required scripts for navigation and animations
- **Visibility**: Added CSS fixes to ensure content displays properly
- **Footer**: Uses the same footer structure as home page

## 6. Service-Specific Active Links

For each page, update the active navigation link:
- **bag-services.html**: Services should be active
- **key-services.html**: Services should be active
- **plus-services.html**: Services should be active
- **shoe-services.html**: Services should be active
- **products.html**: Services should be active

## 7. Files That Need Updates

1. bag-services.html
2. key-services.html  
3. plus-services.html
4. shoe-services.html
5. products.html

Each file should follow the same pattern as the completed alterations.html file.
