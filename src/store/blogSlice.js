import { createSlice, createSelector } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

// Blog Components
import WhyIndianHandmade from "../content/blogs/WhyIndianHandmadeProducts";
import AustraliansFallingInLove from "../content/blogs/AustraliansFallingInLove";
import HandcraftedWithHeart from "../content/blogs/HandcraftedWithHeart";
import FromCraftTableToCart from "../content/blogs/FromCraftTableToCart";
import TheWorldIsYourMarketplace from "../content/blogs/TheWorldIsYourMarketplace";
import EcommerceOnlineShoppingOnSetuStore from "../content/blogs/EcommerceOnlineShoppingOnSetuStore";
import FromCartToDoorstep from "../content/blogs/FromCartToDoorstep";
import SustainabilityStrategiesForSetuStore from "../content/blogs/SustainabilityStrategiesForSetustore";

// Retailers Playbook Components
import GuideToSourcingAuthenticIndianProducts from "@/content/blogs/RetailersPlaybook.jsx/GuideToSourcingAuthenticIndianProducts";
import TopIndianProductCategories from "@/content/blogs/RetailersPlaybook.jsx/TopIndianProductCategories";
import CurateUniqueInStoreExperience from "@/content/blogs/RetailersPlaybook.jsx/CurateUniqueInStoreExperience";

// Seller Success & Growth Components
import CraftProductDescription from "@/content/blogs/SellerSuccess&Growth/CraftProductDescriptions";
import TopMistakesIndianSellersMake from "@/content/blogs/SellerSuccess&Growth/TopMistakesIndianSellersMake";
import UltimateLogisticsGuide from "@/content/blogs/SellerSuccess&Growth/UltimateLogisticsGuide";

// Tech & Marketplace Optimization Components
import DigitalTransformationIndia from "@/content/blogs/Tech&MarketplaceOptimization/DigitalTransformationIndia";
import BenefitsOfSourcingFromIndiaForAustralia from "@/content/blogs/Tech&MarketplaceOptimization/BenefitsOfSourcingFromIndiaForAustralia";

// ----------------------------
// 🧩 Initial State
// ----------------------------
const initialState = {
  categories: [
    {
      name: "Product Spotlight",
      slug: "product-spotlight",
      blogs: [
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "why-indian-handmade-products-are-winning-hearts",
          title:
            "Why Indian Handmade Products Are Winning Hearts in the Global Market",
          date: "July 29, 2025",
          thumbnail:
            "/images/why-indian-handmade-products-are-winning-hearts-thumb.jpg",
          mainImage:
            "/images/why-indian-handmade-products-are-winning-hearts.jpg",
          component: WhyIndianHandmade,
          seo: {
            title: "Why Indian Handmade Products Are Winning Hearts in the Global Market",
            description: "Discover how Indian handmade products are winning hearts globally and why supporting artisans matters.",
            keywords: "handmade, Indian crafts, global market, artisans, Setu Store",
            image: "/images/why-indian-handmade-products-are-winning-hearts.jpg"
          }
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "australians-falling-in-love-with-handmade-products",
          title:
            "Why Australians Are Falling in Love with Handmade Products Online",
          date: "June 12, 2025",
          thumbnail:
            "/images/australians-falling-in-love-with-handmade-products-thumb.webp",
          mainImage:
            "/images/australians-falling-in-love-with-handmade-products.webp",
          component: AustraliansFallingInLove,
          seo: {
            title: "Why Australians Are Falling in Love with Handmade Products Online | Setu Store",
            description: "Explore the growing trend of Australians embracing handmade products online, supporting local artisans, and choosing sustainable, unique items.",
            keywords: "handmade, Australian artisans, local crafts, sustainable products, unique gifts, Setu Store",
            image: "/images/australians-falling-in-love-with-handmade-products.webp"
          }
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "handcrafted-with-heart",
          title:
            "Handcrafted with Heart: Bringing Authentic Handmade Creations to Australian Home",
          date: "Aug 15, 2025",
          thumbnail: "/images/handcrafted-with-heart-thumb.webp",
          mainImage: "/images/handcrafted-with-heart.webp",
          component: HandcraftedWithHeart,
          seo: {
            title: "Handcrafted with Heart: Bringing Authentic Handmade Creations to Australian Homes | Setu Store",
            description: "Explore the charm of authentic handmade creations for Australian homes. Support local artisans, embrace sustainable products, and add unique, meaningful pieces to your living spaces.",
            keywords: "handmade, Australian homes, artisan crafts, sustainable products, unique decor, Setu Store",
            image: "/images/handcrafted-with-heart.webp"
          }
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "from-craft-table-to-cart",
          title:
            "From Craft Table to Cart: The Journey of a Handmade Product in Australia’s Online Market",
          date: "Sep 01, 2025",
          thumbnail: "/images/from-craft-table-to-cart-thumb.jpg",
          mainImage: "/images/from-craft-table-to-cart.jpg",
          component: FromCraftTableToCart,
          seo: {
            title: "From Craft Table to Cart: The Journey of Handmade Products in Australia’s Online Market | Setu Store",
            description: "Learn how handmade products make their way from artisans’ craft tables to Australian homes. Explore sustainable, unique, and artisan-made creations available online.",
            keywords: "handmade, Australian online market, artisan products, sustainable crafts, unique gifts, Setu Store",
            image: "/images/from-craft-table-to-cart.jpg"
          }
        },
      ],
    },
    {
      name: "Retailers Playbook",
      slug: "retailers-playbook",
      blogs: [
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "the-ultimate-guide-to-sourcing-authentic-indian-products-for-your-store",
          title: "The Ultimate Guide to Sourcing Authentic Indian Products for Your Store",
          date: "Oct 14, 2025",
          thumbnail: "/images/guide-to-sourcing-authentic-indian-products-thumb.jpg",
          mainImage: "/images/guide-to-sourcing-authentic-indian-products.jpg",
          component: GuideToSourcingAuthenticIndianProducts,
          seo: {
            title: "Sourcing Authentic Indian Products | Retailers Playbook | Setu Store",
            description: "Explore Setu Store — the trusted B2B marketplace connecting Australian retailers with authentic Indian manufacturers, wholesalers, and homemade product brands.",
            keywords: "Setu Store, Indian products wholesale, authentic Indian brands, homemade products, Indian manufacturers, Indian wholesalers, Indian handmade crafts, Retailers, local shops, B2B marketplace, Indian suppliers, artisan products, wholesale sourcing India, handmade goods",
            image: "/images/guide-to-sourcing-authentic-indian-products.jpg"
          }
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "top-indian-product-categories-trending-in-australia",
          title: "Top 10 Indian Product Categories Trending in Australia This Year",
          date: "Oct 14, 2025",
          thumbnail: "/images/top-indian-product-categories-trending-in-australia-thumb.avif",
          mainImage: "/images/top-indian-product-categories-trending-in-australia.avif",
          component: TopIndianProductCategories,
          seo: {
            title: "Top 10 Indian Product Trends in Australia 2025 | Retailers Playbook | Setu Store",
            description: "Discover the top 10 Indian product categories trending in Australia. Source textiles, jewelry, skincare, and more from Setu Store’s trusted Indian manufacturers and wholesalers.",
            keywords: "Setu Store, Indian products Australia, Indian manufacturers, Indian wholesalers, homemade brands, Indian crafts, Australian retailers, Indian textiles, Indian jewelry, Indian skincare, Indian activewear, Indian leather goods, wholesale marketplace, B2B sourcing, sustainable products Australia, local shops India",
            image: "/images/top-indian-product-categories-trending-in-australia.jpg"
          }
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "curate-unique-in-store-experience-with-indian-handcrafted-goods",
          title: "How to Curate a Unique In-Store Experience with Indian Handcrafted Goods",
          date: "Oct 14, 2025",
          thumbnail: "/images/curate-unique-in-store-experience-thumb.jpg",
          mainImage: "/images/curate-unique-in-store-experience.jpg",
          component: CurateUniqueInStoreExperience,
          seo: {
            title: "Curate Unique In-Store Experience with Indian Handcrafted Goods | Retailers Playbook | Setu Store",
            description: "Learn how Australian retailers can create a unique in-store experience using Indian handcrafted goods. Source authentic products from Setu Store’s verified Indian manufacturers and wholesalers.",
            keywords: "Setu Store, Indian handcrafted goods, in-store experience, Australian retailers, Indian manufacturers, Indian wholesalers, authentic Indian products, handmade crafts, local shops India, B2B marketplace, retail trends Australia, unique store concepts",
            image: "/images/curate-unique-in-store-experience.jpg"
          }
        }
      ],
    },
    {
      name: "Seller Success & Growth",
      slug: "seller-success-and-growth",
      blogs: [
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "crafting-product-descriptions-that-inspire-global-buyers",
          title: "How to Craft Product Descriptions That Inspire Global Buyers",
          date: "Oct 16, 2025",
          thumbnail: "/images/crafting-product-descriptions-that-inspire-global-buyers-thumb.jpg",
          mainImage: "/images/crafting-product-descriptions-that-inspire-global-buyers.jpg",
          component: CraftProductDescription,
          seo: {
            title: "How to Craft Product Descriptions That Inspire Global Buyers | Seller Success & Growth | Setu Store",
            description: "A step-by-step guide for Indian sellers on Setu Store: write product descriptions that convert international buyers — with templates, SEO keywords, localization tips, and a final checklist.",
            keywords: "product descriptions, ecommerce copywriting, international buyers, Setu Store, seller success, product listing tips",
            image: "/images/crafting-product-descriptions-that-inspire-global-buyers.jpg"
          }
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "top-mistakes-indian-sellers-make-when-expanding-overseas",
          title: "Top Mistakes Indian Sellers Make When Expanding Overseas",
          date: "Oct 17, 2025",
          thumbnail: "/images/top-mistakes-indian-sellers-make-thumb.jpg",
          mainImage: "/images/top-mistakes-indian-sellers-make.jpg",
          component: TopMistakesIndianSellersMake,
          seo: {
            title: "Top Mistakes Indian Sellers Make When Expanding Overseas | Seller Success & Growth | Setu Store",
            description: "Discover the most common mistakes Indian exporters make when expanding internationally — and learn proven strategies to overcome them. From cultural missteps to pricing errors, here’s how to build a successful global brand.",
            keywords: "Indian sellers abroad, export mistakes India, international selling tips, how to sell globally from India, Indian brands expansion, seller success global market",
            image: "/images/top-mistakes-indian-sellers-make.jpg"
          }
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "the-ultimate-logistics-guide-for-indian-sellers-expanding-overseas",
          title: "The Ultimate Logistics Guide for Indian Sellers Expanding Overseas",
          date: "Oct 17, 2025",
          thumbnail: "/images/ultimate-logistics-guide-for-indian-sellers-thumb.jpg",
          mainImage: "/images/ultimate-logistics-guide-for-indian-sellers.jpg",
          component: UltimateLogisticsGuide,
          seo: {
            title: "The Ultimate Logistics Guide for Indian Sellers Expanding Overseas | Seller Success & Growth | Setu Store",
            description: "Learn how to manage international shipping, customs, and fulfillment efficiently. This guide—powered by FedEx insights—helps Indian sellers master logistics for global success.",
            keywords: "FedEx India shipping guide, international logistics for Indian sellers, export shipping India, cross-border delivery FedEx, global fulfillment India, Setu Store logistics solutions",
            image: "/images/ultimate-logistics-guide-for-indian-sellers.jpg"
          }
        }
      ],
    },
    {
      name: "Tech & Marketplace Optimization",
      slug: "tech-marketplace-optimization",
      blogs: [
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "digital-shift-australias-journey-from-brick-and-mortar-to-ecommerce-powerhouse",
          title: "The Great Digital Shift: Inside Australia’s Journey from Brick-and-Mortar to eCommerce Powerhouse",
          date: "July 20, 2025",
          thumbnail: "/images/digital-shift-australias-journey-thumb.jpg",
          mainImage: "/images/digital-shift-australias-journey.jpg",
          component: DigitalTransformationIndia,
          seo: {
            title: "The Great Digital Shift: Inside Australia’s Journey from Brick-and-Mortar to eCommerce Powerhouse | Setu Store",
            description: "Discover how Australian retail has evolved from traditional storefronts to powerful online marketplaces. Learn how technology, data, and global sourcing (including from India) are driving a new era of digital commerce.",
            keywords: "australian retail digital transformation, ecommerce growth australia, online marketplace australia, offline to online retail shift, digital commerce trends, australian retailers tech adoption, setu store marketplace",
            image: "/images/digital-shift-australias-journey.jpg"
          }      
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "benefits-of-sourcing-from-india-for-australian-buyers",
          title: "Why Australian Businesses Benefit from Sourcing Products from India",
          date: "Nov 26, 2025",
          thumbnail: "/images/sourcing-india-au-main-thumb.webp",
          mainImage: "/images/sourcing-india-au-main.webp",
          component: BenefitsOfSourcingFromIndiaForAustralia,
          seo: {
            title: "Benefits of Sourcing from India for Australian Businesses | Setu Store",
            description: "Discover why Australian brands are increasingly sourcing from India. Learn about competitive pricing, superior craftsmanship, flexible MOQs, ethical manufacturing, and strong trade relations.",
            keywords: "sourcing from India, Australian buyers, India Australia trade, Indian manufacturers, wholesale India, private label India, Setu Store",
            image: "/images/sourcing-india-au-main.webp"
          }
        },
      ],
    },
    {
      name: "Trends & Market Insights",
      slug: "trends-market-insights",
      blogs: [
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "the-world-is-your-marketplace",
          title:
            "The World Is Your Marketplace: Why It’s Time to Sell Internationally",
          date: "June 12, 2025",
          thumbnail: "/images/the-world-is-your-marketplace-thumb.webp",
          mainImage: "/images/the-world-is-your-marketplace.webp",
          component: TheWorldIsYourMarketplace,
          seo: {
            title: "The World Is Your Marketplace: How to Sell Handmade Products Internationally | Setu Store",
            description: "Explore strategies for selling handmade and artisanal products globally. Learn how small businesses and artisans can reach international customers successfully.",
            keywords: "handmade, international sales, global market, artisanal products, cross-border eCommerce, Setu Store",
            image: "/images/the-world-is-your-marketplace.jpg"
          }
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "ecommerce-online-shopping-on-setu-store",
          title:
            "Ecommerce Online Shopping on Setu Store: Connecting the World, One Click at a Time",
          date: "May 03, 2025",
          thumbnail: "/images/ecommerce-online-shopping-on-setu-store-thumb.webp",
          mainImage: "/images/ecommerce-online-shopping-on-setu-store.webp",
          component: EcommerceOnlineShoppingOnSetuStore,
          seo: {
            title: "Ecommerce Online Shopping on Setu Store: Connecting the World, One Click at a Time",
            description: "Discover how Indian handmade products are winning hearts globally and why supporting artisans matters.",
            keywords: "handmade, Indian crafts, global market, artisans, Setu Store",
            image: "/images/why-indian-handmade-products-are-winning-hearts.jpg"
          }
        },
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "from-cart-to-doorstep",
          title:
            "From Cart to Doorstep: How Ecommerce is Changing the Way We Shop",
          date: "Aug 20, 2025",
          thumbnail: "/images/from-cart-to-doorstep-thumb.jpg",
          mainImage: "/images/from-cart-to-doorstep.jpg",
          component: FromCartToDoorstep,
          seo: {
            title: "Ecommerce Online Shopping on Setu Store: Discover Unique Handmade Products Globally",
            description: "Shop unique handmade and artisanal products from around the world on Setu Store. Support small businesses, discover authentic craftsmanship, and enjoy a global shopping experience.",
            keywords: "handmade, artisanal products, online shopping, global marketplace, Setu Store, support small businesses",
            image: "/images/ecommerce-online-shopping-on-setu-store.jpg"
          }
        },
      ],
    },
    {
      name: "Lifestyle & Culture",
      slug: "lifestyle-culture",
      blogs: [
        {
          id: uuidv4(),
          author: "Setu Store",
          slug: "sustainability-strategies-for-setustore",
          title:
            "Sustainability Strategies for SetuStore: Advancing Eco-Friendly Practices in Vendor-to-Customer Ecommerce",
          date: "April 10, 2025",
          thumbnail: "/images/sustainability-strategies-for-setustore-thumb.jpg",
          mainImage: "/images/sustainability-strategies-for-setustore.jpg",
          component: SustainabilityStrategiesForSetuStore,
          seo: {
            title: "Sustainability Strategies for SetuStore: Eco-Friendly Practices in Vendor-to-Customer Ecommerce",
            description: "Learn how SetuStore is promoting eco-friendly and sustainable practices in ecommerce. Discover strategies that support artisans, reduce environmental impact, and empower small businesses.",
            keywords: "sustainability, eco-friendly ecommerce, handmade products, SetuStore, vendor-to-customer, small business support, ethical practices",
            image: "/images/sustainability-strategies-for-setustore.jpg"
          }
        },
      ],
    },
  ],
};

// ----------------------------
// ⚙️ Slice
// ----------------------------
const blogSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    addBlog(state, action) {
      const { categorySlug, blog } = action.payload;
      const category = state.categories.find((c) => c.slug === categorySlug);
      if (category) {
        category.blogs.push(blog);
      }
    },
  },
});

export const { addBlog } = blogSlice.actions;

// ----------------------------
// 🔍 Selectors
// ----------------------------
const selectCategoriesState = (state) => state.blogs.categories;

// All categories
export const selectAllCategories = createSelector(
  [selectCategoriesState],
  (categories) => categories
);

// Get category by slug
export const selectCategoryBySlug = (slug) =>
  createSelector([selectCategoriesState], (categories) =>
    categories.find((c) => c.slug === slug)
  );

// Get blogs by category slug
export const selectBlogsByCategorySlug = (slug) =>
  createSelector([selectCategoriesState], (categories) => {
    const category = categories.find((c) => c.slug === slug);
    return category ? category.blogs : [];
  });

// Get single blog by slug
export const selectBlogBySlug = (slug) =>
  createSelector([selectCategoriesState], (categories) => {
    for (const category of categories) {
      const found = category.blogs.find((b) => b.slug === slug);
      if (found) return found;
    }
    return null;
  });

export default blogSlice.reducer;
