// CREDCO website content, layouts, and interactive components.
import {
  $n,
  A,
  An,
  Ct,
  D,
  Jn,
  Kt,
  M,
  N,
  P,
  Qn,
  Xn,
  Yn,
  Zn,
  _,
  ar,
  cr,
  dr,
  er,
  fr,
  gr,
  hr,
  ir,
  k,
  lr,
  mr,
  nr,
  or,
  pr,
  qn,
  rr,
  sr,
  tr,
  ur,
  vt,
  yr,
} from "./vendor.js";
import {
  SITE_ORIGIN,
  EMAIL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
} from "./site-config.js";
import { IMAGE_VARIANTS } from "./image-variants.js";

function isPhoneNumber(value) {
  const phone = value.trim();
  return (
    /^\+?[\d().\s-]+$/.test(phone) &&
    /^\d{8,15}$/.test(phone.replace(/\D/g, ""))
  );
}

function hasPhoneNumber(value) {
  const phone = value.match(/\+?\d[\d(). \-]{6,}[\d)]/);
  return phone !== null && isPhoneNumber(phone[0]);
}

var CredcoLogo = ({
    variant: e = `horizontal`,
    theme: t = `dark`,
    className: n = ``,
  }) => {
    let r = (0, _.useId)().replace(/:/g, ``),
      i = `credco-lit-${r}`,
      a = `credco-mid-${r}`,
      o = `credco-shade-${r}`,
      s = `credco-arc-${r}`,
      c = `credco-mask-${r}`,
      l = t === `dark`,
      u = l ? `text-[#FAF8F3]` : `text-[#0E0D0B]`,
      d = l ? `text-[#E9DFD0]/80` : `text-[#171613]/75`,
      f = l ? `text-[#E7CC83]` : `text-[#9A7421]`,
      p = (e) =>
        (0, P.jsxs)(`svg`, {
          viewBox: `0 0 76 62`,
          fill: `none`,
          xmlns: `http://www.w3.org/2000/svg`,
          className: e,
          "aria-hidden": `true`,
          children: [
            (0, P.jsxs)(`defs`, {
              children: [
                (0, P.jsxs)(`linearGradient`, {
                  id: i,
                  x1: `20`,
                  y1: `6`,
                  x2: `46`,
                  y2: `44`,
                  gradientUnits: `userSpaceOnUse`,
                  children: [
                    (0, P.jsx)(`stop`, {
                      offset: `0%`,
                      stopColor: l ? `#FAF0CA` : `#D9B55B`,
                    }),
                    (0, P.jsx)(`stop`, {
                      offset: `55%`,
                      stopColor: l ? `#E7CC83` : `#B88D2E`,
                    }),
                    (0, P.jsx)(`stop`, {
                      offset: `100%`,
                      stopColor: l ? `#C9A34A` : `#8E6919`,
                    }),
                  ],
                }),
                (0, P.jsxs)(`linearGradient`, {
                  id: a,
                  x1: `12`,
                  y1: `12`,
                  x2: `64`,
                  y2: `46`,
                  gradientUnits: `userSpaceOnUse`,
                  children: [
                    (0, P.jsx)(`stop`, {
                      offset: `0%`,
                      stopColor: l ? `#E7CC83` : `#C9A34A`,
                    }),
                    (0, P.jsx)(`stop`, {
                      offset: `100%`,
                      stopColor: l ? `#B88D2E` : `#8A6516`,
                    }),
                  ],
                }),
                (0, P.jsxs)(`linearGradient`, {
                  id: o,
                  x1: `39`,
                  y1: `8`,
                  x2: `54`,
                  y2: `42`,
                  gradientUnits: `userSpaceOnUse`,
                  children: [
                    (0, P.jsx)(`stop`, {
                      offset: `0%`,
                      stopColor: l ? `#C9A34A` : `#9E7621`,
                    }),
                    (0, P.jsx)(`stop`, {
                      offset: `100%`,
                      stopColor: l ? `#8B671B` : `#6A4C0C`,
                    }),
                  ],
                }),
                (0, P.jsxs)(`linearGradient`, {
                  id: s,
                  x1: `5`,
                  y1: `45`,
                  x2: `71`,
                  y2: `45`,
                  gradientUnits: `userSpaceOnUse`,
                  children: [
                    (0, P.jsx)(`stop`, {
                      offset: `0%`,
                      stopColor: l ? `#9E7621` : `#7D5B12`,
                    }),
                    (0, P.jsx)(`stop`, {
                      offset: `50%`,
                      stopColor: l ? `#F5E1A4` : `#C9A34A`,
                    }),
                    (0, P.jsx)(`stop`, {
                      offset: `100%`,
                      stopColor: l ? `#9E7621` : `#7D5B12`,
                    }),
                  ],
                }),
                (0, P.jsxs)(`mask`, {
                  id: c,
                  children: [
                    (0, P.jsx)(`rect`, {
                      width: `76`,
                      height: `62`,
                      fill: `white`,
                    }),
                    (0, P.jsx)(`rect`, {
                      x: `17.5`,
                      y: `26.5`,
                      width: `2.4`,
                      height: `7`,
                      fill: `black`,
                    }),
                    (0, P.jsx)(`rect`, {
                      x: `43`,
                      y: `21`,
                      width: `2.4`,
                      height: `7.5`,
                      fill: `black`,
                    }),
                    (0, P.jsx)(`rect`, {
                      x: `43`,
                      y: `30.8`,
                      width: `2.4`,
                      height: `4.8`,
                      fill: `black`,
                    }),
                  ],
                }),
              ],
            }),
            (0, P.jsxs)(`g`, {
              mask: `url(#${c})`,
              children: [
                (0, P.jsx)(`path`, {
                  d: `M12.5 42.5V23.8L25 14V40.4Z`,
                  fill: `url(#${a})`,
                }),
                (0, P.jsx)(`path`, {
                  d: `M28.5 39.8V17.4L39 7.2V39Z`,
                  fill: `url(#${i})`,
                }),
                (0, P.jsx)(`path`, {
                  d: `M39 7.2L49.5 16.4V39.8L39 39Z`,
                  fill: `url(#${o})`,
                }),
                (0, P.jsx)(`path`, {
                  d: `M53 40.4V20.5L63.5 26.8V42.5Z`,
                  fill: `url(#${a})`,
                }),
              ],
            }),
            (0, P.jsx)(`path`, {
              d: `M39 7.4V38.8`,
              stroke: l ? `#FAF0CA` : `#E7CC83`,
              strokeOpacity: `0.55`,
              strokeWidth: `0.9`,
            }),
            (0, P.jsx)(`path`, {
              d: `M5 49.5C23 39.4 53 39.4 71 49.5C53 43.3 23 43.3 5 49.5Z`,
              fill: `url(#${s})`,
            }),
          ],
        });
    return e === `mark`
      ? (0, P.jsx)(`span`, {
          className: `inline-flex items-center ${n}`,
          children: p(`h-9 w-11`),
        })
      : e === `compact`
        ? (0, P.jsxs)(`span`, {
            className: `inline-flex items-center gap-2.5 whitespace-nowrap shrink-0 ${n}`,
            children: [
              p(`h-8 w-10 sm:h-9 sm:w-11 shrink-0`),
              (0, P.jsxs)(`span`, {
                className: `flex flex-col leading-none`,
                children: [
                  (0, P.jsx)(`span`, {
                    className: `font-display text-lg sm:text-xl font-semibold tracking-[0.2em] leading-none ${u}`,
                    children: `CREDCO`,
                  }),
                  (0, P.jsx)(`span`, {
                    className: `mt-1 text-[7.5px] sm:text-[8.5px] uppercase tracking-[0.22em] font-medium ${f}`,
                    children: `Design & Construction`,
                  }),
                ],
              }),
            ],
          })
        : e === `full`
          ? (0, P.jsxs)(`div`, {
              className: `inline-flex flex-col items-start gap-3 ${n}`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `flex items-center gap-3.5`,
                  children: [
                    p(`h-12 w-15 sm:h-13 sm:w-16 shrink-0`),
                    (0, P.jsxs)(`div`, {
                      className: `flex flex-col`,
                      children: [
                        (0, P.jsx)(`span`, {
                          className: `font-display text-2xl sm:text-3xl font-semibold tracking-[0.2em] leading-none ${u}`,
                          children: `CREDCO`,
                        }),
                        (0, P.jsx)(`span`, {
                          className: `mt-1.5 text-xs tracking-wide font-medium ${d}`,
                          children: `Creative Design And Construction Pvt. Ltd.`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, P.jsxs)(`div`, {
                  className: `flex items-center gap-2.5`,
                  children: [
                    (0, P.jsx)(`span`, {
                      className: `w-6 h-px bg-[#C9A34A]`,
                      "aria-hidden": `true`,
                    }),
                    (0, P.jsx)(`span`, {
                      className: `text-[11px] uppercase tracking-[0.24em] font-medium ${f}`,
                      children: `Building Your Dream Life`,
                    }),
                  ],
                }),
              ],
            })
          : (0, P.jsxs)(`div`, {
              className: `inline-flex items-center gap-3 whitespace-nowrap shrink-0 ${n}`,
              children: [
                p(`h-10 w-12 shrink-0`),
                (0, P.jsxs)(`div`, {
                  className: `flex flex-col leading-none`,
                  children: [
                    (0, P.jsx)(`span`, {
                      className: `font-display text-xl font-semibold tracking-[0.2em] ${u}`,
                      children: `CREDCO`,
                    }),
                    (0, P.jsx)(`span`, {
                      className: `mt-1.5 text-[9.5px] tracking-[0.18em] uppercase font-medium ${f}`,
                      children: `Construction · Interior · Architecture`,
                    }),
                  ],
                }),
              ],
            });
  },
  photos = {
    heroResidence: `/media/hero-luxury-residence.webp`,
    heroBedroom: `/media/hero-luxury-bedroom.webp`,
    heroVilla: `/media/hero-modern-villa.webp`,
    construction: `/media/service-building-construction.webp`,
    livingInterior: `/media/service-living-interior.webp`,
    modularKitchen: `/media/service-modular-kitchen.webp`,
    elevation3d: `/media/service-3d-elevation.webp`,
    architecturalPlanning: `/media/service-architectural-planning.webp`,
    renovationDining: `/media/service-renovation-dining.webp`,
    officeInterior: `/media/service-office-interior.webp`,
  },
  heroSlides = [
    {
      id: 1,
      kicker: `Construction · Interior · Architecture`,
      headline: `Building Your Dream Life`,
      subtitle: `Complete Construction, Architecture & Interior Design Solutions crafted with structural precision and timeless detail.`,
      primaryCtaLabel: `Explore Our Services`,
      primaryCtaTo: `/services`,
      secondaryCtaLabel: `Get Consultation`,
      secondaryCtaTo: `/consultation`,
      image: photos.heroResidence,
      imageAlt: `Contemporary luxury modern residential building designed and illuminated at twilight`,
    },
    {
      id: 2,
      kicker: `Bespoke Residential & Commercial Interiors`,
      headline: `Transform Your Space With Expert Interior Design`,
      subtitle: `Beautiful, functional and timeless interiors designed around your lifestyle, material preferences and natural light.`,
      primaryCtaLabel: `Explore Interior Design`,
      primaryCtaTo: `/services/interior-design`,
      secondaryCtaLabel: `Book Interior Consultation`,
      secondaryCtaTo: `/consultation`,
      image: photos.heroBedroom,
      imageAlt: `Luxury master bedroom featuring charcoal fluted wood wall paneling and brass pendant lighting`,
    },
    {
      id: 3,
      kicker: `End-to-End Structural & Architectural Execution`,
      headline: `Architecture That Inspires. Construction That Lasts.`,
      subtitle: `From architectural planning to complete construction, we bring your vision to life with disciplined engineering.`,
      primaryCtaLabel: `Discuss Your Project`,
      primaryCtaTo: `/consultation`,
      secondaryCtaLabel: `Building Construction`,
      secondaryCtaTo: `/services/building-construction`,
      image: photos.elevation3d,
      imageAlt: `Modern luxury urban residence exterior elevation with warm wood louvers and architectural lighting`,
    },
    {
      id: 4,
      kicker: `CREDCO – Creative Design And Construction Pvt. Ltd.`,
      headline: `Your Vision. Our Design. Your Dream Home.`,
      subtitle: `Experience thoughtful design, premium execution and quality craftsmanship from foundation to final handover.`,
      primaryCtaLabel: `Contact Us`,
      primaryCtaTo: `/contact`,
      secondaryCtaLabel: `View Portfolio Concepts`,
      secondaryCtaTo: `/projects`,
      image: photos.heroVilla,
      imageAlt: `Architectural luxury villa with cantilevered timber soffits, travertine stone and reflective pool`,
    },
  ],
  services = [
    {
      id: `building-construction`,
      number: `01`,
      title: `Building Construction`,
      slug: `building-construction`,
      route: `/services/building-construction`,
      shortDesc: `Strong, safe and long-lasting residential and commercial structures executed with end-to-end engineering oversight.`,
      tagline: `From foundation to finishing, built for generations.`,
      image: photos.construction,
      imageAlt: `Modern multi-story concrete building construction with engineers inspecting structural progress`,
      highlights: [
        `Residential & Villa Construction`,
        `Commercial Complexes`,
        `Turnkey Structural Execution`,
        `Quality Material Procurement`,
      ],
    },
    {
      id: `interior-design`,
      number: `02`,
      title: `Interior Design`,
      slug: `interior-design`,
      route: `/services/interior-design`,
      shortDesc: `Stylish, functional and space-efficient residential and office interiors tailored around how you live and work.`,
      tagline: `Thoughtful materiality, lighting, and custom millwork.`,
      image: photos.livingInterior,
      imageAlt: `Contemporary luxury living room interior with curved sofa, walnut paneling and travertine table`,
      highlights: [
        `Luxury Home & Bedroom Interiors`,
        `Bespoke Modular Kitchens`,
        `Living & Dining Spaces`,
        `Executive Office Interiors`,
      ],
    },
    {
      id: `exterior-design`,
      number: `03`,
      title: `Exterior Design`,
      slug: `exterior-design`,
      route: `/services/exterior-design`,
      shortDesc: `Contemporary architectural facades, villa elevations, material palettes and outdoor environments with lasting curb appeal.`,
      tagline: `Distinctive architectural presence in every streetscape.`,
      image: photos.heroVilla,
      imageAlt: `Modern luxury villa exterior facade featuring travertine stone, glass and timber soffits`,
      highlights: [
        `Modern House Exteriors`,
        `Residential Facade Design`,
        `Color & Cladding Planning`,
        `Outdoor & Courtyard Design`,
      ],
    },
    {
      id: `renovation-remodeling`,
      number: `04`,
      title: `Renovation & Remodeling`,
      slug: `renovation-remodeling`,
      route: `/services/renovation-remodeling`,
      shortDesc: `Upgrade, redesign and breathe new life into existing residences, kitchens, bathrooms and commercial interiors.`,
      tagline: `Precision transformation without unnecessary disruption.`,
      image: photos.renovationDining,
      imageAlt: `Renovated luxury dining room with herringbone oak floors, fluted glass divider and stone dining table`,
      highlights: [
        `Complete Home Renovation`,
        `Kitchen & Bath Remodeling`,
        `Space Reconfiguration`,
        `Commercial Refurbishment`,
      ],
    },
    {
      id: `3d-elevation`,
      number: `05`,
      title: `3D Elevation`,
      slug: `3d-elevation`,
      route: `/services/3d-elevation`,
      shortDesc: `Photorealistic 3D views and exterior architectural visualizations prepared before construction begins.`,
      tagline: `See every angle, texture, and shadow before breaking ground.`,
      image: photos.elevation3d,
      imageAlt: `Photorealistic 3D architectural front elevation rendering of a three-story contemporary home`,
      highlights: [
        `3D Front Elevations`,
        `Day & Dusk Lighting Renders`,
        `Material & Texture Previews`,
        `Concept Iteration`,
      ],
    },
    {
      id: `architectural-planning`,
      number: `06`,
      title: `Architectural Planning`,
      slug: `architectural-planning`,
      route: `/services/architectural-planning`,
      shortDesc: `Smart, practical floor plans, space optimization, and Vaastu-compliant residential and commercial layouts.`,
      tagline: `Clarity of circulation, daylight, and proportion on paper first.`,
      image: photos.architecturalPlanning,
      imageAlt: `Architect studio desk with detailed residential floor plans, brass ruler and stone swatches`,
      highlights: [
        `Residential Floor Planning`,
        `Space & Circulation Layout`,
        `Architectural Concept Drawings`,
        `Vaastu-Compliant Options`,
      ],
    },
  ],
  Cr = [
    {
      number: `01`,
      title: `Creative & Modern Designs`,
      description: `Contemporary architectural concepts balanced with warm, livable proportions tailored to your everyday routines.`,
    },
    {
      number: `02`,
      title: `Quality Materials`,
      description: `Disciplined material selection across structural concrete, steel, waterproofing, timber, stone and hardware.`,
    },
    {
      number: `03`,
      title: `Experienced Design Approach`,
      description: `Integrated coordination between architectural planners, interior designers and site execution engineers.`,
    },
    {
      number: `04`,
      title: `Customized Solutions`,
      description: `Every plot, apartment and commercial floor plate is planned around your budget, orientation and lifestyle goals.`,
    },
    {
      number: `05`,
      title: `Transparent Communication`,
      description: `Clear scope definitions, milestone walkthroughs and direct communication with our project team.`,
    },
    {
      number: `06`,
      title: `Professional Project Management`,
      description: `Structured scheduling, vendor coordination and site supervision from excavation to final finishes.`,
    },
    {
      number: `07`,
      title: `Timely Execution`,
      description: `Milestone-driven delivery workflows designed to avoid avoidable delays and maintain workmanship standards.`,
    },
  ],
  wr = [
    {
      step: `01`,
      title: `Consultation`,
      description: `Initial discussion of your site, space goals, scope and preferred timeline via WhatsApp, phone or studio meeting.`,
    },
    {
      step: `02`,
      title: `Planning & Concept`,
      description: `Site evaluation, spatial layout planning, functional zoning and Vaastu alignment where requested.`,
    },
    {
      step: `03`,
      title: `Design & Visualization`,
      description: `3D elevations, interior mood boards, material selections and realistic visual previews prior to execution.`,
    },
    {
      step: `04`,
      title: `Execution`,
      description: `Disciplined civil construction, MEP coordination, interior carpentry and site supervision.`,
    },
    {
      step: `05`,
      title: `Quality Inspection`,
      description: `Stage-by-stage structural, waterproofing, alignment and finishing checks before sign-off.`,
    },
    {
      step: `06`,
      title: `Project Handover`,
      description: `Final walkthrough, snag resolution and smooth handover of your completed residence or commercial space.`,
    },
  ],
  Tr = [
    {
      step: `01`,
      title: `Initial Consultation`,
      phase: `Discovery`,
      description: `We begin by listening to your goals, property details, and whether you require turnkey construction, architectural planning, renovation or full interior design.`,
      deliverable: `Initial scope alignment & consultation summary`,
    },
    {
      step: `02`,
      title: `Understanding Requirements`,
      phase: `Brief & Site Study`,
      description: `Detailed assessment of plot dimensions or existing floor plans, family or team size, sunlight orientation, storage needs and Vaastu preferences.`,
      deliverable: `Design brief & site measurement checklist`,
    },
    {
      step: `03`,
      title: `Concept & Design Planning`,
      phase: `Architecture & Layout`,
      description: `Preparation of practical 2D floor plans, furniture layouts, circulation zones and structural planning concepts optimized for comfort and utility.`,
      deliverable: `2D architectural floor & furniture layout options`,
    },
    {
      step: `04`,
      title: `3D Visualization`,
      phase: `Visual Clarity`,
      description: `Photorealistic 3D exterior elevations and key interior perspective renders so you can refine materials, lighting and color palettes before site work begins.`,
      deliverable: `3D elevation views & interior visual concepts`,
    },
    {
      step: `05`,
      title: `Budget & Project Discussion`,
      phase: `Cost & Schedule`,
      description: `Transparent review of material specifications, itemized scope estimates and realistic phase-by-phase timelines tailored to your budget.`,
      deliverable: `Scope specification & milestone schedule`,
    },
    {
      step: `06`,
      title: `Project Execution`,
      phase: `Construction & Craft`,
      description: `Coordinated civil work, electrical and plumbing rough-ins, facade treatments, modular cabinetry and bespoke interior finishes managed on site.`,
      deliverable: `Supervised site progress & milestone updates`,
    },
    {
      step: `07`,
      title: `Quality Check`,
      phase: `Inspection`,
      description: `Multi-point verification covering structural curing, plumbing pressure, electrical testing, joinery tolerances, paint finish and stone polishing.`,
      deliverable: `Pre-handover quality inspection & snag closure`,
    },
    {
      step: `08`,
      title: `Final Handover`,
      phase: `Completion`,
      description: `Deep cleaning, final walkthrough with you, and handing over a finished space ready for immediate living or business operations.`,
      deliverable: `Completed space ready to move in`,
    },
  ],
  Er = [
    {
      title: `Luxury Master Bedrooms`,
      subtitle: `Fluted wood paneling, warm cove lighting & serene upholstery`,
      image: photos.heroBedroom,
      category: `Bedrooms`,
      route: `/services/interior-design`,
    },
    {
      title: `Contemporary Living Rooms`,
      subtitle: `Curved silhouettes, walnut millwork & natural travertine`,
      image: photos.livingInterior,
      category: `Living Spaces`,
      route: `/services/interior-design`,
    },
    {
      title: `Bespoke Modular Kitchens`,
      subtitle: `Handleless matte cabinetry, veined marble islands & brass fixtures`,
      image: photos.modularKitchen,
      category: `Kitchens`,
      route: `/services/interior-design`,
    },
    {
      title: `Refined Dining & Partitions`,
      subtitle: `Herringbone oak flooring, fluted glass & sculptural lighting`,
      image: photos.renovationDining,
      category: `Dining Spaces`,
      route: `/services/renovation-remodeling`,
    },
    {
      title: `Executive Office Interiors`,
      subtitle: `Acoustic walnut slats, monolithic reception stone & glass boardrooms`,
      image: photos.officeInterior,
      category: `Commercial`,
      route: `/services/interior-design`,
    },
  ],
  Dr = [
    `All`,
    `Residential Projects`,
    `Commercial Projects`,
    `Interior Projects`,
    `Exterior Projects`,
    `Construction Projects`,
    `3D Elevation Projects`,
    `Renovation Projects`,
  ],
  portfolioProjects = [
    {
      slug: `cantilevered-courtyard-residence`,
      title: `Cantilevered Courtyard Residence`,
      category: `Residential Projects`,
      scope: `Architecture · Construction · Interior Design`,
      statusLabel: `Demonstration Concept Showcase`,
      image: photos.heroResidence,
      galleryImages: [
        photos.heroResidence,
        photos.livingInterior,
        photos.modularKitchen,
      ],
      summary: `Two-story contemporary residence uniting exposed architectural concrete, warm teak cladding and seamless indoor-outdoor courtyard living.`,
      description: `This demonstration residential concept illustrates CREDCO’s integrated approach across architectural planning, structural construction and warm interior finishes. Double-height glazing opens the ground living pavilion onto a travertine terrace and landscaped courtyard.`,
      highlights: [
        `Integrated structural cantilever and recessed timber soffits`,
        `Open-plan living, dining and modular kitchen flow`,
        `Warm architectural twilight facade lighting plan`,
        `Cross-ventilated bedrooms with natural daylighting`,
      ],
    },
    {
      slug: `fluted-walnut-master-suite`,
      title: `Fluted Charcoal & Brass Residence Suite`,
      category: `Interior Projects`,
      scope: `Luxury Bedroom & Living Interior Design`,
      statusLabel: `Demonstration Concept Showcase`,
      image: photos.heroBedroom,
      galleryImages: [
        photos.heroBedroom,
        photos.livingInterior,
        photos.modularKitchen,
      ],
      summary: `Refined residential interior pairing dark fluted timber, recessed linear glow, brushed brass pendants and calming beige upholstery.`,
      description: `Designed as a serene sanctuary, this sample interior concept highlights how vertical wood fluting, hidden perimeter illumination and tactile linen textiles transform a primary suite into a hotel-caliber retreat.`,
      highlights: [
        `Custom dark charcoal fluted wall paneling with concealed LED channels`,
        `Bespoke upholstered headboard and integrated bedside tables`,
        `Layered ambient, task and accent lighting scenes`,
        `Coordinated living lounge and matte modular kitchen palette`,
      ],
    },
    {
      slug: `urban-three-level-3d-elevation`,
      title: `Urban Three-Level Facade & 3D Elevation`,
      category: `3D Elevation Projects`,
      scope: `3D Elevation · Exterior Design · Facade Lighting`,
      statusLabel: `Demonstration Concept Showcase`,
      image: photos.elevation3d,
      galleryImages: [
        photos.elevation3d,
        photos.heroVilla,
        photos.architecturalPlanning,
      ],
      summary: `Asymmetric urban residence front elevation balancing matte charcoal metal panels, cedar privacy louvers and landscaped stone boundary design.`,
      description: `Prepared prior to site execution, this 3D elevation study enables homeowners to evaluate façade proportions, louver shading, balcony railings and evening architectural lighting before construction begins.`,
      highlights: [
        `Photorealistic dusk visualization with exterior lighting cues`,
        `Sun-shading cedar louvers for thermal comfort and privacy`,
        `Integrated gate, boundary wall and driveway stone detailing`,
        `Weather-resistant exterior material specification`,
      ],
    },
    {
      slug: `multi-story-structural-shell`,
      title: `Multi-Story Reinforced Concrete Build`,
      category: `Construction Projects`,
      scope: `Turnkey Building Construction · Structural Supervision`,
      statusLabel: `Demonstration Concept Showcase`,
      image: photos.construction,
      galleryImages: [
        photos.construction,
        photos.architecturalPlanning,
        photos.elevation3d,
      ],
      summary: `Precision RCC frame construction showcasing disciplined formwork, reinforcement quality and engineering oversight across multiple levels.`,
      description: `Representing our core building construction methodology, this showcase highlights structural column alignment, slab curing schedules, safety scaffolding and continuous site supervision by qualified engineers.`,
      highlights: [
        `Stage-wise structural engineering and reinforcement checks`,
        `Grade-verified concrete and certified structural steel`,
        `Clean site management and scheduled milestone tracking`,
        `Seamless transition from civil shell to MEP and finishes`,
      ],
    },
    {
      slug: `travertine-poolside-villa`,
      title: `Travertine & Timber Modern Villa`,
      category: `Exterior Projects`,
      scope: `Exterior Design · Architectural Concept · Landscape`,
      statusLabel: `Demonstration Concept Showcase`,
      image: photos.heroVilla,
      galleryImages: [
        photos.heroVilla,
        photos.heroResidence,
        photos.elevation3d,
      ],
      summary: `Luxury contemporary villa featuring monolithic travertine feature walls, wrap-around glass glazing and warm timber ceiling soffits.`,
      description: `This exterior showcase pairs timeless natural stone with expansive glass openings and linear soffit lighting, creating an inviting dialogue between architectural structure and outdoor water and garden elements.`,
      highlights: [
        `Natural travertine stone cladding with minimalist mortar joints`,
        `Covered outdoor lounge terrace with recessed linear lighting`,
        `High-performance glazing for acoustic and thermal comfort`,
        `Integrated courtyard and perimeter landscape framing`,
      ],
    },
    {
      slug: `executive-marble-corporate-suite`,
      title: `Executive Corporate Headquarters Interior`,
      category: `Commercial Projects`,
      scope: `Commercial Interior Design · Acoustic Glass Partitions`,
      statusLabel: `Demonstration Concept Showcase`,
      image: photos.officeInterior,
      galleryImages: [
        photos.officeInterior,
        photos.renovationDining,
        photos.architecturalPlanning,
      ],
      summary: `Polished corporate workspace combining monolithic dark marble reception joinery, acoustic wood slats and curved glass boardrooms.`,
      description: `Crafted for professional teams and client hospitality, this commercial interior concept balances executive gravitas with acoustic privacy, ergonomic circulation and architectural cove lighting.`,
      highlights: [
        `Monolithic stone reception counter with subtle brass detailing`,
        `Curved double-glazed conference room for acoustic isolation`,
        `Vertical timber slats enhancing sound absorption`,
        `Coordinated micro-cement flooring and lounge seating`,
      ],
    },
    {
      slug: `heritage-dining-kitchen-remodel`,
      title: `Open-Plan Dining & Kitchen Transformation`,
      category: `Renovation Projects`,
      scope: `Home Renovation · Kitchen & Dining Remodeling`,
      statusLabel: `Demonstration Concept Showcase`,
      image: photos.renovationDining,
      galleryImages: [
        photos.renovationDining,
        photos.modularKitchen,
        photos.livingInterior,
      ],
      summary: `Complete structural partition remodeling introducing a fluted glass screen, herringbone oak floors and a waterfall marble kitchen island.`,
      description: `This renovation showcase demonstrates how removing dated partition walls and introducing fluted architectural glass, continuous oak flooring and custom lighting revitalizes an existing residence.`,
      highlights: [
        `Fluted steel-and-glass divider maintaining daylight and zoning`,
        `Full modular kitchen upgrade with Calacatta marble waterfall island`,
        `New concealed electrical, HVAC and architectural pendant wiring`,
        `Natural limewash wall textures paired with warm oak herringbone floors`,
      ],
    },
  ],
  kr = [
    `All`,
    `Luxury Bedrooms`,
    `Modern Living Rooms`,
    `Modular Kitchens`,
    `Luxury Interiors`,
    `Modern Villas`,
    `Building Exteriors`,
    `Architectural Designs`,
    `3D Elevations`,
    `Renovation Ideas`,
  ],
  galleryImages = [
    {
      id: `g-1`,
      title: `Fluted Charcoal Master Suite`,
      category: `Luxury Bedrooms`,
      aspect: `wide`,
      image: photos.heroBedroom,
      caption: `Vertical dark oak fluting with recessed warm LED lighting and brass orb pendants.`,
    },
    {
      id: `g-2`,
      title: `Curved Bouclé & Walnut Lounge`,
      category: `Modern Living Rooms`,
      aspect: `tall`,
      image: photos.livingInterior,
      caption: `Natural daylight living room anchored by a sculptural travertine table and walnut slats.`,
    },
    {
      id: `g-3`,
      title: `Matte Charcoal & Marble Kitchen`,
      category: `Modular Kitchens`,
      aspect: `square`,
      image: photos.modularKitchen,
      caption: `Handleless modular cabinetry paired with a book-matched marble waterfall island.`,
    },
    {
      id: `g-4`,
      title: `Cantilevered Twilight Residence`,
      category: `Modern Villas`,
      aspect: `wide`,
      image: photos.heroResidence,
      caption: `Architectural concrete cantilevers warmed by teak cladding and courtyard reflections.`,
    },
    {
      id: `g-5`,
      title: `Three-Story Contemporary 3D Elevation`,
      category: `3D Elevations`,
      aspect: `tall`,
      image: photos.elevation3d,
      caption: `Pre-construction 3D elevation detailing cedar louvers, charcoal cladding and warm dusk glow.`,
    },
    {
      id: `g-6`,
      title: `Travertine & Timber Poolside Villa`,
      category: `Building Exteriors`,
      aspect: `wide`,
      image: photos.heroVilla,
      caption: `Clean modernist exterior geometry framed with travertine stone and soffit lighting.`,
    },
    {
      id: `g-7`,
      title: `Fluted Glass Dining Remodel`,
      category: `Renovation Ideas`,
      aspect: `square`,
      image: photos.renovationDining,
      caption: `Open-plan dining renovation featuring herringbone oak floors and a fluted glass divider.`,
    },
    {
      id: `g-8`,
      title: `Executive Stone & Timber Office`,
      category: `Luxury Interiors`,
      aspect: `wide`,
      image: photos.officeInterior,
      caption: `Acoustic walnut slats and curved glass meeting suite for refined corporate spaces.`,
    },
    {
      id: `g-9`,
      title: `Architectural Floor & Material Study`,
      category: `Architectural Designs`,
      aspect: `square`,
      image: photos.architecturalPlanning,
      caption: `Detailed 2D space planning paired with physical travertine, walnut and brass material swatches.`,
    },
    {
      id: `g-10`,
      title: `Multi-Story Structural Engineering`,
      category: `Building Exteriors`,
      aspect: `tall`,
      image: photos.construction,
      caption: `Active reinforced concrete construction supervised for structural integrity and alignment.`,
    },
  ],
  jr = [
    `All`,
    `Interior Design Ideas`,
    `Home Construction Tips`,
    `Modern Architecture`,
    `Exterior Design Inspiration`,
    `Home Renovation Ideas`,
    `3D Elevation Trends`,
    `Home Planning Tips`,
  ],
  blogPosts = [
    {
      slug: `warm-minimalism-luxury-bedroom-interiors`,
      title: `Warm Minimalism: Designing Calm, Hotel-Inspired Master Bedrooms`,
      category: `Interior Design Ideas`,
      readingTime: `4 min read`,
      dateLabel: `Editable Sample Article`,
      image: photos.heroBedroom,
      excerpt: `How fluted timber paneling, layered indirect lighting and neutral linen palettes elevate everyday rest without visual clutter.`,
      content: [
        `Modern luxury bedrooms move away from heavy ornamentation in favor of tactile surfaces and controlled light. Vertical fluted wood panels behind the headboard introduce architectural rhythm while subtly improving room acoustics.`,
        `Lighting should always work in three layers: concealed cove or linear LED strips for gentle evening ambiance, warm suspended pendants or bedside sconces for reading, and clean recessed downlights for general tasks.`,
        `Stick to a disciplined palette of charcoal, warm beige, brushed brass and natural oak. Allowing generous circulation around the bed makes even compact urban bedrooms feel serene and spacious.`,
      ],
    },
    {
      slug: `structural-checklists-before-starting-home-construction`,
      title: `5 Essential Structural & Planning Checks Before Starting Construction`,
      category: `Home Construction Tips`,
      readingTime: `5 min read`,
      dateLabel: `Editable Sample Article`,
      image: photos.construction,
      excerpt: `Why finalized architectural drawings, soil awareness, MEP coordination and stage-wise curing protect your long-term investment.`,
      content: [
        `A durable building begins well before the first foundation trench is excavated. Finalizing your 2D floor plans, structural grid and plumbing shafts early prevents costly on-site rework once masonry begins.`,
        `Always verify material grades for cement, reinforcement steel and waterproofing membranes in writing before procurement. Consistent concrete curing during the first two weeks of slab casting directly governs structural longevity.`,
        `Working with an integrated design-and-construction team ensures architectural intent, structural engineering and interior electrical points align seamlessly on site.`,
      ],
    },
    {
      slug: `why-3d-elevation-saves-time-and-cost`,
      title: `How 3D Elevation Visualization Prevents Costly Exterior Mistakes`,
      category: `3D Elevation Trends`,
      readingTime: `4 min read`,
      dateLabel: `Editable Sample Article`,
      image: photos.elevation3d,
      excerpt: `Previewing facade cladding, louver proportions and dusk lighting in 3D lets you refine every exterior detail on screen before execution.`,
      content: [
        `Flat 2D drawings rarely communicate how sun shadows, cantilevered balconies and material transitions will read from street level. A photorealistic 3D front elevation turns technical plans into an unmistakable visual preview.`,
        `Today’s exterior trends favor low-maintenance combinations: matte charcoal textures, natural stone cladding, warm wood-look louvers and recessed architectural lighting that highlights geometry rather than flooding the facade.`,
        `Reviewing multiple camera angles in 3D allows families to finalize colors, railing heights and boundary wall proportions with confidence before ordering exterior finishes.`,
      ],
    },
    {
      slug: `cantilevered-volumes-and-natural-courtyards`,
      title: `Modern Architecture: Balancing Glass, Stone and Natural Daylight`,
      category: `Modern Architecture`,
      readingTime: `5 min read`,
      dateLabel: `Editable Sample Article`,
      image: photos.heroResidence,
      excerpt: `Thoughtful overhangs, cross-ventilation and landscaped courtyards keep contemporary glass-forward homes comfortable year-round.`,
      content: [
        `Contemporary architecture is at its finest when clean geometric cantilevers serve a practical climatic purpose—shading expansive windows from harsh midday heat while welcoming soft reflected light.`,
        `Pairing raw concrete or muted stucco with warm teak or travertine keeps modern elevations grounded and welcoming rather than cold.`,
        `Integrating an interior courtyard or poolside terrace extends living rooms visually outdoors, enhancing both natural ventilation and daily wellbeing.`,
      ],
    },
    {
      slug: `modular-kitchen-ergonomics-and-islands`,
      title: `Planning a Functional Luxury Modular Kitchen Around Your Workflow`,
      category: `Home Renovation Ideas`,
      readingTime: `4 min read`,
      dateLabel: `Editable Sample Article`,
      image: photos.modularKitchen,
      excerpt: `From work-triangle clearances to durable countertop stones and under-cabinet task lighting, smart planning makes cooking effortless.`,
      content: [
        `A stunning kitchen must perform reliably under daily cooking demands. Organize storage into distinct zones for prep, cooking, washing and tall pantry appliances so counter surfaces stay clear.`,
        `Matte anti-fingerprint laminates or lacquered shutters paired with stone waterfall islands create an understated luxury aesthetic that cleans easily.`,
        `Do not overlook under-cabinet linear task lighting and dedicated ventilation—both dramatically improve comfort and protect cabinetry finishes over years of use.`,
      ],
    },
    {
      slug: `practical-floor-planning-and-vaastu-harmony`,
      title: `Smart Floor Planning: Maximizing Usable Area & Natural Flow`,
      category: `Home Planning Tips`,
      readingTime: `5 min read`,
      dateLabel: `Editable Sample Article`,
      image: photos.architecturalPlanning,
      excerpt: `Eliminating dead corridors, aligning wet areas and balancing Vaastu principles with modern structural efficiency.`,
      content: [
        `Great floor plans feel larger than their square footage because every corridor, doorway swing and wardrobe niche is intentionally proportioned.`,
        `Grouping bathrooms and kitchen wet walls along shared shafts simplifies plumbing maintenance and reduces acoustic transfer between quiet bedrooms and social zones.`,
        `Where clients request Vaastu-compliant layouts, early architectural planning allows seamless alignment of entrances, kitchen placement and natural morning light without compromising modern aesthetics.`,
      ],
    },
    {
      slug: `exterior-facade-materials-for-lasting-curb-appeal`,
      title: `Choosing Exterior Facade Cladding & Color Palettes That Age Gracefully`,
      category: `Exterior Design Inspiration`,
      readingTime: `4 min read`,
      dateLabel: `Editable Sample Article`,
      image: photos.heroVilla,
      excerpt: `Why natural travertine, textured plaster and architectural louvers outperform high-gloss exterior trends over decades.`,
      content: [
        `Your home’s exterior faces intense sun, monsoon rain and dust every day. Selecting breathable mineral paints, natural stone cladding and exterior-grade timber or aluminum louvers keeps maintenance low.`,
        `Restrict your facade palette to two primary tones and one warm accent material so the architectural massing stands out cleanly.`,
        `Warm 2700K–3000K recessed soffit and step lights accentuate architectural lines after sunset while preserving neighborhood serenity.`,
      ],
    },
  ],
  Nr = `https://share.google/maxJy6MRLzEbm9RU2`,
  Pr = [
    {
      id: `client-residential`,
      number: `01`,
      category: `Residential & Villas`,
      clientGroup: `Homeowners & Villa Families`,
      scope: `Turnkey Homes · Luxury Interiors · Vaastu Plans`,
      highlight: `Guided families from initial plot planning and 3D elevation approvals through civil execution and custom interior handover.`,
      outcome: `Transparent Milestone Execution`,
    },
    {
      id: `client-commercial`,
      number: `02`,
      category: `Commercial & Offices`,
      clientGroup: `Corporate Offices & Showrooms`,
      scope: `Workspaces · Receptions · Acoustic Interiors`,
      highlight: `Delivered refined executive offices and retail interiors built around brand identity, acoustic comfort and disciplined schedules.`,
      outcome: `Business-Ready Handover`,
    },
    {
      id: `client-institutions`,
      number: `03`,
      category: `Institutions & Healthcare`,
      clientGroup: `Schools, Clinics & Hospitals`,
      scope: `Structural Builds · Functional Layouts · Safety`,
      highlight: `Executed institutional and healthcare buildings prioritizing structural integrity, smooth circulation and durable long-life materials.`,
      outcome: `Grade-Verified Construction`,
    },
    {
      id: `client-renovation`,
      number: `04`,
      category: `Renovation & 3D Design`,
      clientGroup: `Remodeling & Elevation Clients`,
      scope: `Home Remodels · Modular Kitchens · Facades`,
      highlight: `Transformed dated residences and exteriors with photorealistic 3D previews, open-plan remodeling and minimal-disruption site care.`,
      outcome: `Predictable Design Clarity`,
    },
  ],
  Fr = [
    `Dedicated On-Site Engineering Supervision`,
    `Transparent Material & Finish Specifications`,
    `3D Visualization Before Site Execution`,
    `Verified Client Reviews on Google`,
  ],
  frequentlyAskedQuestions = [
    {
      id: `faq-1`,
      category: `Construction Services`,
      question: `Does CREDCO handle both residential and commercial building construction?`,
      answer: `Yes. CREDCO – Creative Design And Construction Pvt. Ltd. undertakes residential homes, villas, commercial complexes, offices and institutional building projects from foundation planning through structural execution and finishing.`,
    },
    {
      id: `faq-2`,
      category: `Construction Services`,
      question: `Can we engage CREDCO for turnkey construction including interiors?`,
      answer: `Yes. Many clients prefer our unified turnkey approach where architectural planning, civil construction, exterior elevation and complete interior design are coordinated by a single dedicated team.`,
    },
    {
      id: `faq-3`,
      category: `Interior Design`,
      question: `What spaces are covered under your interior design services?`,
      answer: `We design luxury master and guest bedrooms, modern living rooms, modular kitchens, dining rooms, apartments, villas and corporate office interiors—covering space optimization, lighting design, custom furniture and decor.`,
    },
    {
      id: `faq-4`,
      category: `Interior Design`,
      question: `Do you customize interior designs according to our budget and material preferences?`,
      answer: `Absolutely. During consultation and concept planning, we tailor finishes, hardware, stone, laminates/veneers and lighting fixtures around your preferred aesthetic and target budget.`,
    },
    {
      id: `faq-5`,
      category: `Exterior & 3D Elevation`,
      question: `Why should I get a 3D front elevation before starting construction?`,
      answer: `A photorealistic 3D elevation lets you review facade proportions, balcony projections, cladding materials, exterior colors and night lighting before civil work locks them in—helping avoid expensive on-site revisions.`,
    },
    {
      id: `faq-6`,
      category: `Exterior & 3D Elevation`,
      question: `Can CREDCO redesign the exterior facade of an existing house?`,
      answer: `Yes. Through our Exterior Design and Renovation services, we create modern facade upgrade concepts using contemporary cladding, louvers, glazing and exterior lighting.`,
    },
    {
      id: `faq-7`,
      category: `Renovation`,
      question: `Do you undertake selective renovations such as only a kitchen or living room?`,
      answer: `Yes. We handle both complete residential/commercial remodeling and focused transformations including modular kitchen remodeling, bathroom upgrades and living-dining reconfigurations.`,
    },
    {
      id: `faq-8`,
      category: `Architectural Planning`,
      question: `Do you provide Vaastu-compliant floor plans?`,
      answer: `Yes, where requested by the client, we thoughtfully incorporate Vaastu principles into our architectural floor planning alongside natural light, ventilation and practical space circulation.`,
    },
    {
      id: `faq-9`,
      category: `Consultation, Budget & Timeline`,
      question: `How do I book a consultation and receive an estimate for my project?`,
      answer: `Use our Get Free Consultation or Contact form, or click any WhatsApp CTA to message +91 9730006820 directly. Share your project type, approximate area, location and goals, and our team will respond to schedule a detailed discussion.`,
    },
    {
      id: `faq-10`,
      category: `Consultation, Budget & Timeline`,
      question: `How are project timelines and budgets determined?`,
      answer: `Timelines and budgets depend on built-up area, site conditions, structural complexity and material specifications. After understanding your requirements in detail, we provide a transparent scope discussion and phase-wise schedule.`,
    },
  ],
  instagramProfile = {
    profileUrl: INSTAGRAM_URL,
    displayLabel: `CREDCO Design & Construction Reels`,
    note: `Architectural walkthrough reels from the CREDCO design team.`,
  },
  designReels = [
    {
      id: `reel-bedroom-reveal`,
      title: `Fluted Charcoal Master Suite Reveal`,
      category: `Interior Tours`,
      duration: `0:24`,
      coverImage: photos.heroBedroom,
      summary: `Warm cove illumination, vertical dark oak fluting and brushed brass pendants.`,
      serviceRoute: `/services/interior-design`,
      scenes: [
        {
          image: photos.heroBedroom,
          headline: `01. Architectural Accent Wall`,
          detail: `Custom vertical charcoal timber slats paired with warm recessed LED channels.`,
        },
        {
          image: photos.livingInterior,
          headline: `02. Coordinated Lounge Flow`,
          detail: `Curved neutral upholstery and travertine surfaces connecting suite to living zones.`,
        },
        {
          image: photos.modularKitchen,
          headline: `03. Material Consistency`,
          detail: `Brushed brass fixtures and matte finishes carried across the residence.`,
        },
      ],
    },
    {
      id: `reel-3d-elevation`,
      title: `Three-Story 3D Front Elevation Study`,
      category: `3D Elevations`,
      duration: `0:28`,
      coverImage: photos.elevation3d,
      summary: `Previewing cedar louvers, charcoal cladding and dusk lighting before execution.`,
      serviceRoute: `/services/3d-elevation`,
      scenes: [
        {
          image: photos.elevation3d,
          headline: `01. Street-Level Massing`,
          detail: `Asymmetric geometric framing with privacy wood louvers and gate lighting.`,
        },
        {
          image: photos.architecturalPlanning,
          headline: `02. Scaled Plan Alignment`,
          detail: `Every balcony projection anchored directly to structural 2D floor plans.`,
        },
        {
          image: photos.heroResidence,
          headline: `03. Twilight Material Glow`,
          detail: `Warm soffit lighting highlighting warm wood and architectural concrete.`,
        },
      ],
    },
    {
      id: `reel-villa-walkthrough`,
      title: `Travertine & Timber Poolside Villa`,
      category: `Exterior & Villas`,
      duration: `0:32`,
      coverImage: photos.heroVilla,
      summary: `Golden-hour architectural tour across stone terraces and cantilevered glass.`,
      serviceRoute: `/services/exterior-design`,
      scenes: [
        {
          image: photos.heroVilla,
          headline: `01. Travertine & Water Court`,
          detail: `Natural stone cladding and timber soffits reflecting across the courtyard pool.`,
        },
        {
          image: photos.heroResidence,
          headline: `02. Indoor-Outdoor Pavilion`,
          detail: `Double-height glazing merging landscaped gardens with main living areas.`,
        },
        {
          image: photos.livingInterior,
          headline: `03. Sunlit Living Sanctuary`,
          detail: `Natural oak floors and soft sheer curtains filtering afternoon light.`,
        },
      ],
    },
    {
      id: `reel-site-construction`,
      title: `Multi-Story RCC Construction Progress`,
      category: `Construction`,
      duration: `0:30`,
      coverImage: photos.construction,
      summary: `On-site structural engineering, reinforcement checks and slab casting discipline.`,
      serviceRoute: `/services/building-construction`,
      scenes: [
        {
          image: photos.construction,
          headline: `01. Structural Shell Supervision`,
          detail: `Column alignment, formwork bracing and engineer-verified reinforcement.`,
        },
        {
          image: photos.architecturalPlanning,
          headline: `02. Blueprint-to-Site Precision`,
          detail: `Continuous coordination between architectural drawings and site teams.`,
        },
        {
          image: photos.elevation3d,
          headline: `03. Envelope Completion Target`,
          detail: `Transforming raw concrete frames into modern architectural residences.`,
        },
      ],
    },
    {
      id: `reel-kitchen-dining-remodel`,
      title: `Kitchen & Fluted Glass Dining Remodel`,
      category: `Renovations`,
      duration: `0:26`,
      coverImage: photos.modularKitchen,
      summary: `Opening partitioned spaces with marble waterfall islands and herringbone oak.`,
      serviceRoute: `/services/renovation-remodeling`,
      scenes: [
        {
          image: photos.modularKitchen,
          headline: `01. Waterfall Marble Island`,
          detail: `Handleless matte charcoal cabinetry with concealed linear task lighting.`,
        },
        {
          image: photos.renovationDining,
          headline: `02. Fluted Glass Zoning`,
          detail: `Dividing dining and passage areas while preserving warm natural daylight.`,
        },
        {
          image: photos.officeInterior,
          headline: `03. Custom Millwork Craft`,
          detail: `Precision stone and timber joinery tailored for residential and commercial spaces.`,
        },
      ],
    },
  ],
  businessPhone = `+91 9730006820`,
  whatsAppNumber = `919730006820`,
  businessWebsite = `www.credcodesign.com`,
  companyName = `CREDCO – Creative Design And Construction Pvt. Ltd.`;
function whatsAppUrl(e) {
  return `https://wa.me/${whatsAppNumber}?text=${encodeURIComponent(e.trim())}`;
}
function serviceEnquiryUrl(e, t) {
  let n = [`Hello CREDCO Team,`, ``, `I would like to enquire about ${e}.`];
  return (
    t && n.push(`Reference: ${t}`),
    n.push(``, `Please share consultation details and next steps.`),
    whatsAppUrl(
      n.join(`
`),
    )
  );
}
function formatEnquiry(e) {
  let t = [
    `Hello CREDCO Team,`,
    ``,
    `I am interested in your services.`,
    ``,
    `Name: ${e.name.trim()}`,
    `Phone: ${e.phone.trim()}`,
    `Email: ${e.email?.trim() || `Not provided`}`,
    `Service: ${e.service.trim()}`,
    `Project Type: ${e.projectType?.trim() || `Not specified`}`,
    `Location: ${e.location?.trim() || `Not specified`}`,
    `Budget: ${e.budget?.trim() || `To be discussed`}`,
  ];
  return (
    e.preferredContact?.trim() &&
      t.push(`Preferred Contact: ${e.preferredContact.trim()}`),
    t.push(
      `Requirements: ${e.details?.trim() || `General consultation request`}`,
      ``,
      `Please contact me regarding my project.`,
    ),
    t.join(`
`)
  );
}
var SiteHeader = () => {
    let [e, t] = (0, _.useState)(!1),
      [n, r] = (0, _.useState)(!1),
      [i, a] = (0, _.useState)(!1),
      [o, s] = (0, _.useState)(!1),
      [projMenuOpen, setProjMenuOpen] = (0, _.useState)(!1),
      [projMobileOpen, setProjMobileOpen] = (0, _.useState)(!1),
      projMenuRef = (0, _.useRef)(null),
      c = (0, _.useRef)(null),
      l = vt();
    ((0, _.useEffect)(() => {
      let e = () => t(window.scrollY > 24);
      return (
        e(),
        window.addEventListener(`scroll`, e, {
          passive: !0,
        }),
        () => window.removeEventListener(`scroll`, e)
      );
    }, []),
      (0, _.useEffect)(() => {
        (r(!1), setProjMenuOpen(!1), setProjMobileOpen(!1), a(!1));
      }, [l.pathname]),
      (0, _.useEffect)(() => {
        let e = (e) => {
          (c.current && !c.current.contains(e.target) && r(!1),
            projMenuRef.current &&
              !projMenuRef.current.contains(e.target) &&
              setProjMenuOpen(!1));
        };
        return (
          document.addEventListener(`mousedown`, e),
          () => document.removeEventListener(`mousedown`, e)
        );
      }, []),
      (0, _.useEffect)(
        () => (
          (document.body.style.overflow = i ? `hidden` : ``),
          () => {
            document.body.style.overflow = ``;
          }
        ),
        [i],
      ));
    let u = ({ isActive: e }) =>
        `relative py-1 text-[13px] xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${e ? `text-[#E7CC83]` : `text-[#FAF8F3]/90 hover:text-[#E7CC83]`}`,
      d = l.pathname.startsWith(`/services`);
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(`header`, {
          className: `fixed top-0 inset-x-0 z-40 transition-colors duration-300 ${e ? `bg-[#0E0D0B]/95 backdrop-blur-md border-b border-[#C9A34A]/25 shadow-lg shadow-black/25` : `bg-[#0E0D0B]/85 backdrop-blur-sm border-b border-[#FAF8F3]/10`}`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 sm:h-16 lg:h-20 flex items-center justify-between gap-4`,
            children: [
              (0, P.jsx)(k, {
                to: `/`,
                "aria-label": `CREDCO Home`,
                className: `focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A34A] rounded shrink-0`,
                children: (0, P.jsx)(CredcoLogo, {
                  variant: `compact`,
                  theme: `dark`,
                }),
              }),
              (0, P.jsxs)(`nav`, {
                "aria-label": `Main navigation`,
                className: `hidden lg:flex items-center gap-4 xl:gap-6`,
                children: [
                  (0, P.jsx)(A, {
                    to: `/`,
                    end: !0,
                    className: u,
                    children: `Home`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/about`,
                    className: u,
                    children: `About`,
                  }),
                  (0, P.jsxs)(`div`, {
                    ref: c,
                    className: `relative`,
                    onMouseEnter: () => r(!0),
                    onMouseLeave: () => r(!1),
                    children: [
                      (0, P.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => r((e) => !e),
                        "aria-expanded": n,
                        "aria-haspopup": `true`,
                        className: `inline-flex items-center gap-1 py-1 text-[13px] xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${d ? `text-[#E7CC83]` : `text-[#FAF8F3]/90 hover:text-[#E7CC83]`}`,
                        children: [
                          (0, P.jsx)(`span`, {
                            children: `Services`,
                          }),
                          (0, P.jsx)(Zn, {
                            className: `w-3.5 h-3.5 transition-transform duration-200 ${n ? `rotate-180` : ``}`,
                          }),
                        ],
                      }),
                      n &&
                        (0, P.jsx)(`div`, {
                          className: `absolute left-0 top-full pt-3 w-72 z-50`,
                          children: (0, P.jsxs)(`div`, {
                            className: `bg-[#171613] border border-[#C9A34A]/25 rounded-xl shadow-2xl p-2`,
                            children: [
                              (0, P.jsxs)(k, {
                                to: `/services`,
                                className: `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[#E7CC83] hover:bg-[#FAF8F3]/5 transition-colors`,
                                children: [
                                  (0, P.jsx)(`span`, {
                                    children: `All Core Services`,
                                  }),
                                  (0, P.jsx)(M, {
                                    className: `w-4 h-4`,
                                  }),
                                ],
                              }),
                              (0, P.jsx)(`div`, {
                                className: `my-1.5 border-t border-[#FAF8F3]/10`,
                              }),
                              services.map((e) =>
                                (0, P.jsxs)(
                                  k,
                                  {
                                    to: e.route,
                                    className: `flex items-center justify-between px-3.5 py-2 rounded-lg text-sm text-[#FAF8F3]/85 hover:text-[#E7CC83] hover:bg-[#FAF8F3]/5 transition-colors`,
                                    children: [
                                      (0, P.jsx)(`span`, {
                                        children: e.title,
                                      }),
                                      (0, P.jsx)(`span`, {
                                        className: `text-[11px] text-[#C9A34A]/70 tabular-nums`,
                                        children: e.number,
                                      }),
                                    ],
                                  },
                                  e.id,
                                ),
                              ),
                            ],
                          }),
                        }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    ref: projMenuRef,
                    className: `relative`,
                    onMouseEnter: () => setProjMenuOpen(!0),
                    onMouseLeave: () => setProjMenuOpen(!1),
                    children: [
                      (0, P.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => setProjMenuOpen((e) => !e),
                        "aria-expanded": projMenuOpen,
                        "aria-haspopup": `true`,
                        className: `inline-flex items-center gap-1 py-1 text-[13px] xl:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${l.pathname.startsWith(`/projects`) ? `text-[#E7CC83]` : `text-[#FAF8F3]/90 hover:text-[#E7CC83]`}`,
                        children: [
                          (0, P.jsx)(`span`, { children: `Projects` }),
                          (0, P.jsx)(Zn, {
                            className: `w-3.5 h-3.5 transition-transform duration-200 ${projMenuOpen ? `rotate-180` : ``}`,
                          }),
                        ],
                      }),
                      projMenuOpen &&
                        (0, P.jsx)(`div`, {
                          className: `absolute left-0 top-full pt-3 w-72 z-50`,
                          children: (0, P.jsxs)(`div`, {
                            className: `bg-[#171613] border border-[#C9A34A]/25 rounded-xl shadow-2xl p-2`,
                            children: [
                              (0, P.jsxs)(k, {
                                to: `/projects`,
                                className: `flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[#E7CC83] hover:bg-[#FAF8F3]/5 transition-colors`,
                                children: [
                                  (0, P.jsx)(`span`, { children: `All Projects` }),
                                  (0, P.jsx)(M, { className: `w-4 h-4` }),
                                ],
                              }),
                              (0, P.jsx)(`div`, { className: `my-1.5 border-t border-[#FAF8F3]/10` }),
                              projectStatItems.map((item) =>
                                (0, P.jsxs)(
                                  k,
                                  {
                                    to: `/projects#project-stats`,
                                    className: `flex items-center justify-between px-3.5 py-2 rounded-lg text-sm text-[#FAF8F3]/85 hover:text-[#E7CC83] hover:bg-[#FAF8F3]/5 transition-colors`,
                                    children: [
                                      (0, P.jsx)(`span`, { children: item.label }),
                                      (0, P.jsx)(`span`, {
                                        className: `text-[11px] text-[#C9A34A]/70 tabular-nums`,
                                        children: item.value,
                                      }),
                                    ],
                                  },
                                  item.label,
                                ),
                              ),
                            ],
                          }),
                        }),
                    ],
                  }),
                  (0, P.jsx)(A, {
                    to: `/gallery`,
                    className: u,
                    children: `Gallery`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/reviews`,
                    className: u,
                    children: `Reviews`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/process`,
                    className: u,
                    children: `Process`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/blog`,
                    className: u,
                    children: `Blog`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/contact`,
                    className: u,
                    children: `Contact`,
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `hidden lg:flex items-center gap-2.5 shrink-0`,
                children: [
                  (0, P.jsx)(`a`, {
                    href: serviceEnquiryUrl(`Project Consultation`),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    "aria-label": `Chat on WhatsApp ${businessPhone}`,
                    className: `w-9 h-9 xl:w-10 xl:h-10 rounded-lg border border-[#C9A34A]/40 text-[#E7CC83] hover:bg-[#C9A34A]/15 flex items-center justify-center transition-colors shrink-0`,
                    title: `WhatsApp: ${businessPhone}`,
                    children: (0, P.jsx)(N, {
                      className: `w-4 h-4`,
                    }),
                  }),
                  (0, P.jsx)(k, {
                    to: `/consultation`,
                    className: `px-3.5 xl:px-4 py-2.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-xs xl:text-sm font-semibold transition-colors whitespace-nowrap shrink-0`,
                    children: `Free Consultation`,
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `flex lg:hidden items-center gap-2 shrink-0`,
                children: [
                  (0, P.jsx)(`a`, {
                    href: `tel:${businessPhone.replace(/\s+/g, ``)}`,
                    "aria-label": `Call ${businessPhone}`,
                    className: `w-9 h-9 rounded-full border border-[#C9A34A]/35 text-[#E7CC83] flex items-center justify-center active:scale-95 transition-transform`,
                    children: (0, P.jsx)(fr, {
                      className: `w-4 h-4`,
                    }),
                  }),
                  (0, P.jsx)(`button`, {
                    type: `button`,
                    onClick: () => a((e) => !e),
                    "aria-label": i
                      ? `Close navigation menu`
                      : `Open navigation menu`,
                    "aria-expanded": i,
                    className: `w-9 h-9 rounded-full border border-[#FAF8F3]/25 text-[#FAF8F3] flex items-center justify-center hover:border-[#C9A34A] active:scale-95 transition-transform`,
                    children: i
                      ? (0, P.jsx)(gr, {
                          className: `w-4 h-4`,
                        })
                      : (0, P.jsx)(cr, {
                          className: `w-4 h-4`,
                        }),
                  }),
                ],
              }),
            ],
          }),
        }),
        i &&
          (0, P.jsxs)(`div`, {
            role: `dialog`,
            "aria-modal": `true`,
            "aria-label": `Mobile navigation menu`,
            className: `lg:hidden fixed inset-x-0 top-14 sm:top-16 bottom-14 md:bottom-0 bg-[#0E0D0B] border-t border-[#C9A34A]/20 overflow-y-auto px-5 py-5 z-50`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `mb-3 pb-3 border-b border-[#FAF8F3]/10 flex items-center justify-between`,
                children: [
                  (0, P.jsx)(`p`, {
                    className: `text-[11px] uppercase tracking-[0.2em] text-[#C9A34A]`,
                    children: `Construction · Interior · Architecture`,
                  }),
                  (0, P.jsx)(`button`, {
                    type: `button`,
                    onClick: () => a(!1),
                    className: `text-xs text-[#E9DFD0]/70 hover:text-[#E7CC83]`,
                    children: `Close`,
                  }),
                ],
              }),
              (0, P.jsxs)(`nav`, {
                "aria-label": `Mobile navigation`,
                className: `flex flex-col space-y-1`,
                children: [
                  (0, P.jsx)(A, {
                    to: `/`,
                    end: !0,
                    className: `px-3 py-3 text-base font-medium text-[#FAF8F3] hover:text-[#E7CC83] border-b border-[#FAF8F3]/10`,
                    children: `Home`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/about`,
                    className: `px-3 py-3 text-base font-medium text-[#FAF8F3] hover:text-[#E7CC83] border-b border-[#FAF8F3]/10`,
                    children: `About Us`,
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `border-b border-[#FAF8F3]/10`,
                    children: [
                      (0, P.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => s((e) => !e),
                        className: `w-full flex items-center justify-between px-3 py-3 text-base font-medium text-[#FAF8F3]`,
                        children: [
                          (0, P.jsx)(`span`, {
                            children: `Services`,
                          }),
                          (0, P.jsx)(Zn, {
                            className: `w-4 h-4 text-[#C9A34A] transition-transform ${o ? `rotate-180` : ``}`,
                          }),
                        ],
                      }),
                      o &&
                        (0, P.jsxs)(`div`, {
                          className: `pl-4 pb-3 space-y-1`,
                          children: [
                            (0, P.jsx)(k, {
                              to: `/services`,
                              className: `block px-3 py-2 text-sm font-semibold text-[#E7CC83]`,
                              children: `All Services Overview`,
                            }),
                            services.map((e) =>
                              (0, P.jsxs)(
                                k,
                                {
                                  to: e.route,
                                  className: `block px-3 py-2 text-sm text-[#E9DFD0]/85 hover:text-[#E7CC83]`,
                                  children: [e.number, `. `, e.title],
                                },
                                e.id,
                              ),
                            ),
                          ],
                        }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `border-b border-[#FAF8F3]/10`,
                    children: [
                      (0, P.jsxs)(`button`, {
                        type: `button`,
                        onClick: () => setProjMobileOpen((e) => !e),
                        "aria-expanded": projMobileOpen,
                        className: `w-full flex items-center justify-between px-3 py-3 text-base font-medium text-[#FAF8F3]`,
                        children: [
                          (0, P.jsx)(`span`, { children: `Projects` }),
                          (0, P.jsx)(Zn, {
                            className: `w-4 h-4 text-[#C9A34A] transition-transform ${projMobileOpen ? `rotate-180` : ``}`,
                          }),
                        ],
                      }),
                      projMobileOpen &&
                        (0, P.jsxs)(`div`, {
                          className: `pl-4 pb-3 space-y-1`,
                          children: [
                            (0, P.jsx)(k, {
                              to: `/projects`,
                              className: `block px-3 py-2 text-sm font-semibold text-[#E7CC83]`,
                              children: `All Projects`,
                            }),
                            projectStatItems.map((item) =>
                              (0, P.jsxs)(
                                k,
                                {
                                  to: `/projects#project-stats`,
                                  className: `flex items-center justify-between px-3 py-2 text-sm text-[#E9DFD0]/85 hover:text-[#E7CC83]`,
                                  children: [
                                    (0, P.jsx)(`span`, { children: item.label }),
                                    (0, P.jsx)(`span`, {
                                      className: `text-xs text-[#C9A34A]/80 tabular-nums`,
                                      children: item.value,
                                    }),
                                  ],
                                },
                                item.label,
                              ),
                            ),
                          ],
                        }),
                    ],
                  }),
                  (0, P.jsx)(A, {
                    to: `/gallery`,
                    className: `px-3 py-3 text-base font-medium text-[#FAF8F3] hover:text-[#E7CC83] border-b border-[#FAF8F3]/10`,
                    children: `Gallery`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/reviews`,
                    className: `px-3 py-3 text-base font-medium text-[#FAF8F3] hover:text-[#E7CC83] border-b border-[#FAF8F3]/10`,
                    children: `Client Reviews`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/process`,
                    className: `px-3 py-3 text-base font-medium text-[#FAF8F3] hover:text-[#E7CC83] border-b border-[#FAF8F3]/10`,
                    children: `Our Process`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/blog`,
                    className: `px-3 py-3 text-base font-medium text-[#FAF8F3] hover:text-[#E7CC83] border-b border-[#FAF8F3]/10`,
                    children: `Blog & Design Ideas`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/faq`,
                    className: `px-3 py-3 text-base font-medium text-[#FAF8F3] hover:text-[#E7CC83] border-b border-[#FAF8F3]/10`,
                    children: `FAQ`,
                  }),
                  (0, P.jsx)(A, {
                    to: `/contact`,
                    className: `px-3 py-3 text-base font-medium text-[#FAF8F3] hover:text-[#E7CC83] border-b border-[#FAF8F3]/10`,
                    children: `Contact Us`,
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `mt-6 space-y-3 pb-8`,
                children: [
                  (0, P.jsx)(k, {
                    to: `/consultation`,
                    className: `w-full flex items-center justify-center px-5 py-3.5 rounded-xl bg-[#C9A34A] text-[#0E0D0B] font-semibold text-sm active:scale-[0.99] transition-transform`,
                    children: `Get Free Consultation`,
                  }),
                  (0, P.jsxs)(`a`, {
                    href: serviceEnquiryUrl(`Project Consultation`),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-[#C9A34A]/40 text-[#E7CC83] font-medium text-sm active:scale-[0.99] transition-transform`,
                    children: [
                      (0, P.jsx)(N, {
                        className: `w-4 h-4`,
                      }),
                      (0, P.jsxs)(`span`, {
                        children: [`WhatsApp `, `+91 9730006820`],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
      ],
    });
  },
  SiteFooter = () =>
    (0, P.jsx)(`footer`, {
      className: `bg-[#0E0D0B] text-[#FAF8F3] border-t border-[#C9A34A]/20 pb-20 md:pb-0`,
      children: (0, P.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16`,
        children: [
          (0, P.jsxs)(`div`, {
            className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `lg:col-span-4 space-y-5`,
                children: [
                  (0, P.jsx)(CredcoLogo, {
                    variant: `full`,
                    theme: `dark`,
                  }),
                  (0, P.jsxs)(`p`, {
                    className: `text-sm text-[#E9DFD0]/75 leading-relaxed max-w-sm`,
                    children: [
                      companyName,
                      ` delivers integrated architectural planning, residential and commercial building construction, exterior elevations, and tailored interior design.`,
                    ],
                  }),
                  (0, P.jsx)(`div`, {
                    className: `pt-1`,
                    children: (0, P.jsxs)(`a`, {
                      href: serviceEnquiryUrl(`New Project Consultation`),
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors`,
                      children: [
                        (0, P.jsx)(N, {
                          className: `w-4 h-4`,
                        }),
                        (0, P.jsx)(`span`, {
                          children: `Chat on WhatsApp`,
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `lg:col-span-3`,
                children: [
                  (0, P.jsx)(`h3`, {
                    className: `font-display text-base font-semibold text-[#E7CC83] mb-4`,
                    children: `Our Services`,
                  }),
                  (0, P.jsxs)(`ul`, {
                    className: `space-y-2.5 text-sm text-[#E9DFD0]/80`,
                    children: [
                      services.map((e) =>
                        (0, P.jsx)(
                          `li`,
                          {
                            children: (0, P.jsx)(k, {
                              to: e.route,
                              className: `hover:text-[#E7CC83] transition-colors inline-flex items-center gap-1`,
                              children: (0, P.jsx)(`span`, {
                                children: e.title,
                              }),
                            }),
                          },
                          e.id,
                        ),
                      ),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsxs)(k, {
                          to: `/services`,
                          className: `text-[#C9A34A] hover:text-[#E7CC83] transition-colors inline-flex items-center gap-1 font-medium`,
                          children: [
                            (0, P.jsx)(`span`, {
                              children: `View All Services`,
                            }),
                            (0, P.jsx)(Jn, {
                              className: `w-3.5 h-3.5`,
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `lg:col-span-2`,
                children: [
                  (0, P.jsx)(`h3`, {
                    className: `font-display text-base font-semibold text-[#E7CC83] mb-4`,
                    children: `Company`,
                  }),
                  (0, P.jsxs)(`ul`, {
                    className: `space-y-2.5 text-sm text-[#E9DFD0]/80`,
                    children: [
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsx)(k, {
                          to: `/`,
                          className: `hover:text-[#E7CC83] transition-colors`,
                          children: `Home`,
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsx)(k, {
                          to: `/about`,
                          className: `hover:text-[#E7CC83] transition-colors`,
                          children: `About Us`,
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsx)(k, {
                          to: `/projects`,
                          className: `hover:text-[#E7CC83] transition-colors`,
                          children: `Projects`,
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsx)(k, {
                          to: `/gallery`,
                          className: `hover:text-[#E7CC83] transition-colors`,
                          children: `Gallery`,
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsx)(k, {
                          to: `/reviews`,
                          className: `hover:text-[#E7CC83] transition-colors`,
                          children: `Reviews`,
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsx)(k, {
                          to: `/process`,
                          className: `hover:text-[#E7CC83] transition-colors`,
                          children: `Our Process`,
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsx)(k, {
                          to: `/blog`,
                          className: `hover:text-[#E7CC83] transition-colors`,
                          children: `Blog & Ideas`,
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsx)(k, {
                          to: `/faq`,
                          className: `hover:text-[#E7CC83] transition-colors`,
                          children: `FAQ`,
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `lg:col-span-3`,
                children: [
                  (0, P.jsx)(`h3`, {
                    className: `font-display text-base font-semibold text-[#E7CC83] mb-4`,
                    children: `Connect With Us`,
                  }),
                  (0, P.jsxs)(`ul`, {
                    className: `space-y-3.5 text-sm text-[#E9DFD0]/85`,
                    children: [
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsxs)(`a`, {
                          href: `tel:${businessPhone.replace(/\s+/g, ``)}`,
                          className: `inline-flex items-center gap-2.5 hover:text-[#E7CC83] transition-colors tabular-nums`,
                          children: [
                            (0, P.jsx)(fr, {
                              className: `w-4 h-4 text-[#C9A34A] shrink-0`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: businessPhone,
                            }),
                          ],
                        }),
                      }),
                      ...[
                        {
                          label: EMAIL,
                          href: "mailto:" + EMAIL,
                        },
                        {
                          label: "Instagram",
                          href: INSTAGRAM_URL,
                          external: true,
                        },
                        {
                          label: "Facebook",
                          href: FACEBOOK_URL,
                          external: true,
                        },
                      ].map(({ label, href, external }) =>
                        (0, P.jsx)(
                          "li",
                          {
                            children: (0, P.jsx)("a", {
                              href,
                              target: external ? "_blank" : undefined,
                              rel: external ? "noopener noreferrer" : undefined,
                              className:
                                "inline-flex items-center gap-1.5 text-[#E9DFD0]/85 hover:text-[#E7CC83] transition-colors break-all",
                              children: label,
                            }),
                          },
                          href,
                        ),
                      ),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsxs)(`a`, {
                          href: serviceEnquiryUrl(`General Enquiry`),
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `inline-flex items-center gap-2.5 hover:text-[#E7CC83] transition-colors`,
                          children: [
                            (0, P.jsx)(N, {
                              className: `w-4 h-4 text-[#C9A34A] shrink-0`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: `WhatsApp Consultation`,
                            }),
                          ],
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsxs)(`a`, {
                          href: `https://${businessWebsite}`,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `inline-flex items-center gap-2.5 hover:text-[#E7CC83] transition-colors`,
                          children: [
                            (0, P.jsx)(ir, {
                              className: `w-4 h-4 text-[#C9A34A] shrink-0`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: businessWebsite,
                            }),
                          ],
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsxs)(`a`, {
                          href: Nr,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `inline-flex items-center gap-1.5 text-[#E9DFD0]/85 hover:text-[#E7CC83] transition-colors`,
                          children: [
                            (0, P.jsx)(`span`, {
                              children: `Google Business Reviews`,
                            }),
                            (0, P.jsx)(Jn, {
                              className: `w-3.5 h-3.5 text-[#C9A34A]`,
                            }),
                          ],
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        className: `pt-2`,
                        children: (0, P.jsxs)(k, {
                          to: `/consultation`,
                          className: `inline-flex items-center gap-1.5 text-[#E7CC83] hover:underline font-medium`,
                          children: [
                            (0, P.jsx)(`span`, {
                              children: `Get Free Consultation`,
                            }),
                            (0, P.jsx)(Jn, {
                              className: `w-4 h-4`,
                            }),
                          ],
                        }),
                      }),
                      (0, P.jsx)(`li`, {
                        children: (0, P.jsx)(k, {
                          to: `/contact`,
                          className: `inline-flex items-center gap-1.5 text-[#E9DFD0]/80 hover:text-[#E7CC83]`,
                          children: (0, P.jsx)(`span`, {
                            children: `Contact Form`,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, P.jsxs)(`div`, {
            className: `mt-14 pt-6 border-t border-[#FAF8F3]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#E9DFD0]/60`,
            children: [
              (0, P.jsxs)(`p`, {
                children: [
                  `© `,
                  new Date().getFullYear(),
                  ` `,
                  companyName,
                  `. All rights reserved.`,
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-5`,
                children: [
                  (0, P.jsx)(k, {
                    to: `/privacy-policy`,
                    className: `hover:text-[#E7CC83] transition-colors`,
                    children: `Privacy Policy`,
                  }),
                  (0, P.jsx)(k, {
                    to: `/terms-and-conditions`,
                    className: `hover:text-[#E7CC83] transition-colors`,
                    children: `Terms & Conditions`,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  Kr = ({ className: e = `w-6 h-6` }) =>
    (0, P.jsx)(`svg`, {
      viewBox: `0 0 32 32`,
      fill: `currentColor`,
      xmlns: `http://www.w3.org/2000/svg`,
      className: e,
      "aria-hidden": `true`,
      children: (0, P.jsx)(`path`, {
        d: `M16.002 3C8.832 3 3 8.832 3 16c0 2.293.6 4.53 1.738 6.5L3 29l6.678-1.712A12.94 12.94 0 0 0 16.002 29C23.17 29 29 23.168 29 16S23.17 3 16.002 3Zm7.562 18.385c-.318.898-1.855 1.715-2.556 1.82-.652.098-1.478.14-2.384-.15-.55-.176-1.258-.41-2.164-.802-3.805-1.644-6.29-5.48-6.48-5.734-.19-.254-1.547-2.06-1.547-3.93 0-1.87.98-2.79 1.328-3.17.348-.38.76-.476 1.012-.476.254 0 .506.002.728.014.234.012.548-.088.858.654.318.76 1.08 2.63 1.176 2.82.094.19.158.412.03.666-.126.254-.19.412-.38.634-.19.222-.4.496-.57.666-.19.19-.388.396-.166.776.222.38.986 1.628 2.118 2.636 1.454 1.298 2.68 1.7 3.06 1.89.38.19.602.158.824-.096.222-.254.95-1.108 1.204-1.488.254-.38.506-.316.854-.19.348.126 2.216 1.046 2.596 1.236.38.19.634.286.728.444.094.158.094.92-.224 1.818Z`,
      }),
    }),
  MobileContactNavigation = () => {
    let e = serviceEnquiryUrl(`Project Consultation`),
      t = ({ isActive: e }) =>
        `relative flex-1 flex flex-col items-center justify-center h-full gap-0.5 transition-transform active:scale-95 ${e ? `text-[#E7CC83]` : `text-[#E9DFD0]/70 hover:text-[#FAF8F3]`}`;
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsxs)(`a`, {
          href: e,
          target: `_blank`,
          rel: `noopener noreferrer`,
          "aria-label": `Chat with CREDCO on WhatsApp (${businessPhone})`,
          title: `WhatsApp CREDCO: ${businessPhone}`,
          className: `fixed bottom-[4.5rem] right-4 md:bottom-6 md:right-6 z-40 group flex items-center justify-center`,
          children: [
            (0, P.jsx)(`span`, {
              className: `hidden md:block mr-3 px-3.5 py-2 rounded-full bg-[#0E0D0B]/95 text-[#FAF8F3] text-xs font-medium border border-[#C9A34A]/40 shadow-lg opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 pointer-events-none whitespace-nowrap`,
              children: `WhatsApp Us`,
            }),
            (0, P.jsx)(`span`, {
              className: `w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white border-2 border-[#E7CC83]/85 shadow-xl shadow-black/35 flex items-center justify-center group-hover:scale-105 group-active:scale-95 transition-transform duration-200`,
              children: (0, P.jsx)(Kr, {
                className: `w-7 h-7`,
              }),
            }),
          ],
        }),
        (0, P.jsxs)(`nav`, {
          "aria-label": `Mobile app navigation`,
          className: `md:hidden fixed bottom-0 inset-x-0 z-40 h-14 bg-[#0E0D0B]/96 backdrop-blur-md border-t border-[#C9A34A]/25 flex items-center justify-around px-1 shadow-[0_-6px_24px_rgba(0,0,0,0.35)]`,
          children: [
            (0, P.jsx)(A, {
              to: `/`,
              end: !0,
              className: t,
              children: ({ isActive: e }) =>
                (0, P.jsxs)(P.Fragment, {
                  children: [
                    e &&
                      (0, P.jsx)(`span`, {
                        className: `absolute top-0 w-7 h-0.5 rounded-full bg-[#C9A34A]`,
                      }),
                    (0, P.jsx)(ar, {
                      className: `w-4 h-4`,
                    }),
                    (0, P.jsx)(`span`, {
                      className: `text-[10px] font-medium whitespace-nowrap`,
                      children: `Home`,
                    }),
                  ],
                }),
            }),
            (0, P.jsx)(A, {
              to: `/services`,
              className: t,
              children: ({ isActive: e }) =>
                (0, P.jsxs)(P.Fragment, {
                  children: [
                    e &&
                      (0, P.jsx)(`span`, {
                        className: `absolute top-0 w-7 h-0.5 rounded-full bg-[#C9A34A]`,
                      }),
                    (0, P.jsx)(sr, {
                      className: `w-4 h-4`,
                    }),
                    (0, P.jsx)(`span`, {
                      className: `text-[10px] font-medium whitespace-nowrap`,
                      children: `Services`,
                    }),
                  ],
                }),
            }),
            (0, P.jsx)(A, {
              to: `/projects`,
              className: t,
              children: ({ isActive: e }) =>
                (0, P.jsxs)(P.Fragment, {
                  children: [
                    e &&
                      (0, P.jsx)(`span`, {
                        className: `absolute top-0 w-7 h-0.5 rounded-full bg-[#C9A34A]`,
                      }),
                    (0, P.jsx)(Yn, {
                      className: `w-4 h-4`,
                    }),
                    (0, P.jsx)(`span`, {
                      className: `text-[10px] font-medium whitespace-nowrap`,
                      children: `Projects`,
                    }),
                  ],
                }),
            }),
            (0, P.jsx)(A, {
              to: `/gallery`,
              className: t,
              children: ({ isActive: e }) =>
                (0, P.jsxs)(P.Fragment, {
                  children: [
                    e &&
                      (0, P.jsx)(`span`, {
                        className: `absolute top-0 w-7 h-0.5 rounded-full bg-[#C9A34A]`,
                      }),
                    (0, P.jsx)(or, {
                      className: `w-4 h-4`,
                    }),
                    (0, P.jsx)(`span`, {
                      className: `text-[10px] font-medium whitespace-nowrap`,
                      children: `Gallery`,
                    }),
                  ],
                }),
            }),
            (0, P.jsx)(A, {
              to: `/consultation`,
              className: t,
              children: ({ isActive: e }) =>
                (0, P.jsxs)(P.Fragment, {
                  children: [
                    e &&
                      (0, P.jsx)(`span`, {
                        className: `absolute top-0 w-7 h-0.5 rounded-full bg-[#C9A34A]`,
                      }),
                    (0, P.jsx)(lr, {
                      className: `w-4 h-4`,
                    }),
                    (0, P.jsx)(`span`, {
                      className: `text-[10px] font-medium whitespace-nowrap`,
                      children: `Consult`,
                    }),
                  ],
                }),
            }),
          ],
        }),
      ],
    });
  },
  SiteImage = ({
    src: e,
    alt: t,
    fallbackTitle: n,
    className: r = ``,
    loading: i = `lazy`,
    ...a
  }) => {
    let [o, s] = (0, _.useState)(!1);
    const dimensions = IMAGE_VARIANTS[e];
    return o || !e
      ? (0, P.jsxs)(`div`, {
          role: `img`,
          "aria-label": t,
          className: `flex flex-col items-center justify-center bg-gradient-to-br from-[#171613] via-[#1E1C18] to-[#0E0D0B] text-[#E9DFD0] p-6 text-center ${r}`,
          children: [
            (0, P.jsx)(CredcoLogo, {
              variant: `mark`,
              theme: `dark`,
              className: `mb-3 opacity-80`,
            }),
            (0, P.jsx)(`p`, {
              className: `font-display text-sm tracking-wide text-[#FAF8F3]`,
              children: n || t,
            }),
          ],
        })
      : (0, P.jsx)(`img`, {
          src: e,
          alt: t,
          loading: i,
          decoding: i === "lazy" ? "async" : "auto",
          ...dimensions,
          sizes: dimensions ? "(min-width: 1024px) 50vw, 100vw" : undefined,
          referrerPolicy: `no-referrer`,
          onError: () => s(!0),
          className: r,
          ...a,
        });
  },
  Jr = `credco_welcome_popup_seen`,
  Yr = [
    `Building Construction`,
    `Interior Design`,
    `Exterior Design`,
    `3D Elevation`,
    `Renovation & Remodeling`,
    `Architectural Planning`,
    `Complete Turnkey Project`,
  ],
  WelcomePopup = () => {
    let [e, t] = (0, _.useState)(!1),
      [n, r] = (0, _.useState)(!1),
      [i, a] = (0, _.useState)(``),
      [o, s] = (0, _.useState)(``),
      [c, l] = (0, _.useState)(`Building Construction`),
      [u, d] = (0, _.useState)(null);
    (0, _.useEffect)(() => {
      try {
        if (window.sessionStorage.getItem(Jr) === `1`) return;
      } catch {}
      let e = window.setTimeout(() => {
        (t(!0), window.requestAnimationFrame(() => r(!0)));
        try {
          window.sessionStorage.setItem(Jr, `1`);
        } catch {}
      }, 950);
      return () => window.clearTimeout(e);
    }, []);
    let f = () => {
      (r(!1), window.setTimeout(() => t(!1), 180));
    };
    return (
      (0, _.useEffect)(() => {
        if (!e) return;
        const dialog = document.getElementById("credco-welcome-popup");
        const previousFocus = document.activeElement;
        const previousOverflow = document.body.style.overflow;
        const focusable = () => [
          ...dialog.querySelectorAll(
            "button:not([disabled]), a[href], input:not([disabled]), select:not([disabled])",
          ),
        ];
        const handleKey = (event) => {
          if (event.key === "Escape") {
            f();
            return;
          }
          if (event.key !== "Tab") return;
          const elements = focusable();
          const first = elements[0];
          const last = elements.at(-1);
          if (
            event.shiftKey &&
            (document.activeElement === first ||
              !dialog.contains(document.activeElement))
          ) {
            event.preventDefault();
            last?.focus();
          } else if (
            !event.shiftKey &&
            (document.activeElement === last ||
              !dialog.contains(document.activeElement))
          ) {
            event.preventDefault();
            first?.focus();
          }
        };
        document.body.style.overflow = "hidden";
        focusable()[0]?.focus({
          preventScroll: true,
        });
        window.addEventListener("keydown", handleKey);
        return () => {
          window.removeEventListener("keydown", handleKey);
          document.body.style.overflow = previousOverflow;
          if (previousFocus !== document.body && previousFocus?.isConnected)
            previousFocus.focus({
              preventScroll: true,
            });
        };
      }, [e]),
      e
        ? (0, P.jsx)(`div`, {
            id: "credco-welcome-popup",
            role: "dialog",
            "aria-modal": true,
            "aria-labelledby": "credco-welcome-popup-title",
            onClick: f,
            className: `fixed inset-0 z-50 bg-[#0E0D0B]/80 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 transition-opacity duration-200 ${n ? `opacity-100` : `opacity-0`}`,
            children: (0, P.jsxs)(`div`, {
              onClick: (e) => e.stopPropagation(),
              className: `relative w-full max-w-3xl max-h-[90dvh] overflow-y-auto rounded-2xl border border-[#C9A34A]/40 bg-[#FAF8F3] shadow-2xl grid grid-cols-1 md:grid-cols-12 transition-transform duration-200 ${n ? `scale-100 translate-y-0` : `scale-95 translate-y-2`}`,
              children: [
                (0, P.jsx)(`button`, {
                  type: `button`,
                  onClick: f,
                  "aria-label": `Close consultation popup`,
                  className: `absolute top-3.5 right-3.5 z-20 w-9 h-9 rounded-full bg-[#0E0D0B]/80 md:bg-[#171613]/10 text-[#FAF8F3] md:text-[#171613] hover:bg-[#0E0D0B] hover:text-[#E7CC83] flex items-center justify-center transition-colors`,
                  children: (0, P.jsx)(gr, {
                    className: `w-4 h-4`,
                  }),
                }),
                (0, P.jsxs)(`div`, {
                  className: `relative md:col-span-5 bg-[#0E0D0B] text-[#FAF8F3] min-h-[150px] md:min-h-full flex flex-col justify-between p-5 sm:p-6 overflow-hidden`,
                  children: [
                    (0, P.jsx)(SiteImage, {
                      src: photos.heroBedroom,
                      alt: "CREDCO Luxury Interior Design",
                      loading: "eager",
                      sizes: "(min-width: 768px) 320px, 100vw",
                      className: `absolute inset-0 w-full h-full object-cover opacity-55`,
                    }),
                    (0, P.jsx)(`div`, {
                      className: `absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/55 to-[#0E0D0B]/70`,
                    }),
                    (0, P.jsx)(`div`, {
                      className: `relative z-10`,
                      children: (0, P.jsx)(CredcoLogo, {
                        variant: `compact`,
                        theme: `dark`,
                      }),
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `relative z-10 pt-6 md:pt-12 space-y-2.5`,
                      children: [
                        (0, P.jsx)(`p`, {
                          className: `text-[10px] font-semibold uppercase tracking-[0.22em] text-[#E7CC83]`,
                          children: `Construction · Interior · Architecture`,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `font-display text-lg sm:text-xl font-semibold text-[#FAF8F3] leading-snug`,
                          children: `Building Your Dream Life`,
                        }),
                        (0, P.jsxs)(`a`, {
                          href: `tel:${businessPhone.replace(/\s+/g, ``)}`,
                          className: `inline-flex items-center gap-2 text-xs text-[#E9DFD0]/90 hover:text-[#E7CC83] transition-colors tabular-nums pt-1`,
                          children: [
                            (0, P.jsx)(fr, {
                              className: `w-3.5 h-3.5 text-[#C9A34A]`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: businessPhone,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, P.jsxs)(`div`, {
                  className: `md:col-span-7 p-5 sm:p-7 flex flex-col justify-between bg-[#FAF8F3] text-[#171613]`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      children: [
                        (0, P.jsx)(`p`, {
                          className: `text-[11px] font-semibold uppercase tracking-[0.2em] text-[#9A7A2C] mb-1.5`,
                          children: `Welcome to CREDCO`,
                        }),
                        (0, P.jsx)(`h2`, {
                          id: `credco-welcome-popup-title`,
                          className: `font-display text-2xl sm:text-3xl font-semibold text-[#0E0D0B] leading-tight pr-8`,
                          children: `Plan Your Dream Space With Experts`,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-2 text-xs sm:text-sm text-[#171613]/75 leading-relaxed`,
                          children: `Request a free architectural, construction or interior consultation directly with our team.`,
                        }),
                        u
                          ? (0, P.jsxs)(`div`, {
                              className: `mt-6 p-5 rounded-xl bg-[#E9DFD0]/55 border border-[#C9A34A]/35 space-y-3`,
                              children: [
                                (0, P.jsxs)(`div`, {
                                  className: `flex items-center gap-2 text-[#0E0D0B] font-semibold text-sm`,
                                  children: [
                                    (0, P.jsx)(tr, {
                                      className: `w-5 h-5 text-[#9A7A2C]`,
                                    }),
                                    (0, P.jsx)(`span`, {
                                      children: `Consultation Message Ready`,
                                    }),
                                  ],
                                }),
                                (0, P.jsxs)(`p`, {
                                  className: `text-xs text-[#171613]/80 leading-relaxed`,
                                  children: [
                                    `Your enquiry for `,
                                    (0, P.jsx)(`strong`, {
                                      children: c,
                                    }),
                                    ` is ready to send on WhatsApp. If WhatsApp did not open automatically, tap below:`,
                                  ],
                                }),
                                (0, P.jsxs)(`div`, {
                                  className: `flex flex-wrap gap-2.5 pt-1`,
                                  children: [
                                    (0, P.jsxs)(`a`, {
                                      href: u,
                                      target: `_blank`,
                                      rel: `noopener noreferrer`,
                                      className: `inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] text-white text-xs font-semibold hover:opacity-95`,
                                      children: [
                                        (0, P.jsx)(N, {
                                          className: `w-4 h-4`,
                                        }),
                                        (0, P.jsx)(`span`, {
                                          children: `Open WhatsApp`,
                                        }),
                                      ],
                                    }),
                                    (0, P.jsx)(`button`, {
                                      type: `button`,
                                      onClick: f,
                                      className: `px-4 py-2.5 rounded-lg border border-[#171613]/20 text-xs font-medium text-[#171613] hover:border-[#C9A34A]`,
                                      children: `Continue to Website`,
                                    }),
                                  ],
                                }),
                              ],
                            })
                          : (0, P.jsxs)(`form`, {
                              onSubmit: (e) => {
                                e.preventDefault();
                                const nameField =
                                  document.getElementById("popup-name");
                                const phoneField =
                                  document.getElementById("popup-phone-city");
                                if (i.trim().length < 2) {
                                  nameField.setCustomValidity(
                                    "Please enter your name.",
                                  );
                                  nameField.reportValidity();
                                  return;
                                }
                                if (!hasPhoneNumber(o)) {
                                  phoneField.setCustomValidity(
                                    "Please enter a valid phone number. You can also include your city.",
                                  );
                                  phoneField.reportValidity();
                                  return;
                                }
                                let t = whatsAppUrl(
                                  [
                                    `Hello CREDCO – Creative Design And Construction Pvt. Ltd.,`,
                                    ``,
                                    `I would like a consultation for: ${c}`,
                                    i.trim() ? `Name: ${i.trim()}` : ``,
                                    o.trim() ? `Phone / City: ${o.trim()}` : ``,
                                    ``,
                                    `Please connect with me to discuss my project.`,
                                  ].filter(Boolean).join(`
`),
                                );
                                d(t);
                                let n = document.createElement(`a`);
                                ((n.href = t),
                                  (n.target = `_blank`),
                                  (n.rel = `noopener noreferrer`),
                                  document.body.appendChild(n),
                                  n.click(),
                                  document.body.removeChild(n));
                              },
                              className: `mt-5 space-y-3.5`,
                              children: [
                                (0, P.jsxs)(`div`, {
                                  children: [
                                    (0, P.jsx)(`label`, {
                                      htmlFor: `popup-name`,
                                      className: `block text-xs font-semibold text-[#0E0D0B] mb-1`,
                                      children: `Your Name`,
                                    }),
                                    (0, P.jsx)(`input`, {
                                      id: "popup-name",
                                      type: "text",
                                      required: true,
                                      autoComplete: "name",
                                      maxLength: 100,
                                      value: i,
                                      onChange: (event) => {
                                        event.currentTarget.setCustomValidity(
                                          "",
                                        );
                                        a(event.currentTarget.value);
                                      },
                                      placeholder: `Enter your full name`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#171613]/15 text-sm text-[#0E0D0B] placeholder:text-[#171613]/40 focus:outline-none focus:border-[#C9A34A]`,
                                    }),
                                  ],
                                }),
                                (0, P.jsxs)(`div`, {
                                  children: [
                                    (0, P.jsx)(`label`, {
                                      htmlFor: `popup-phone-city`,
                                      className: `block text-xs font-semibold text-[#0E0D0B] mb-1`,
                                      children: `Phone Number / City`,
                                    }),
                                    (0, P.jsx)(`input`, {
                                      id: "popup-phone-city",
                                      type: "text",
                                      required: true,
                                      maxLength: 100,
                                      value: o,
                                      onChange: (event) => {
                                        event.currentTarget.setCustomValidity(
                                          "",
                                        );
                                        s(event.currentTarget.value);
                                      },
                                      placeholder: `e.g., +91 98XXXXXXXX · Lucknow`,
                                      className: `w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#171613]/15 text-sm text-[#0E0D0B] placeholder:text-[#171613]/40 focus:outline-none focus:border-[#C9A34A]`,
                                    }),
                                  ],
                                }),
                                (0, P.jsxs)(`div`, {
                                  children: [
                                    (0, P.jsx)(`label`, {
                                      htmlFor: `popup-service`,
                                      className: `block text-xs font-semibold text-[#0E0D0B] mb-1`,
                                      children: `Select Service`,
                                    }),
                                    (0, P.jsx)(`select`, {
                                      id: `popup-service`,
                                      value: c,
                                      onChange: (e) => l(e.target.value),
                                      className: `w-full px-3.5 py-2.5 rounded-lg bg-white border border-[#171613]/15 text-sm text-[#0E0D0B] focus:outline-none focus:border-[#C9A34A]`,
                                      children: Yr.map((e) =>
                                        (0, P.jsx)(
                                          `option`,
                                          {
                                            value: e,
                                            children: e,
                                          },
                                          e,
                                        ),
                                      ),
                                    }),
                                  ],
                                }),
                                (0, P.jsxs)(`button`, {
                                  type: `submit`,
                                  className: `w-full mt-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors`,
                                  children: [
                                    (0, P.jsx)(N, {
                                      className: `w-4 h-4`,
                                    }),
                                    (0, P.jsx)(`span`, {
                                      children: `Get Free Consultation on WhatsApp`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                      ],
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `mt-5 pt-4 border-t border-[#171613]/10 flex flex-wrap items-center justify-between gap-3 text-xs`,
                      children: [
                        (0, P.jsxs)(k, {
                          to: `/services`,
                          onClick: f,
                          className: `inline-flex items-center gap-1.5 font-semibold text-[#8F6F24] hover:text-[#0E0D0B] transition-colors`,
                          children: [
                            (0, P.jsx)(`span`, {
                              children: `Explore Our Services`,
                            }),
                            (0, P.jsx)(M, {
                              className: `w-3.5 h-3.5`,
                            }),
                          ],
                        }),
                        (0, P.jsx)(`button`, {
                          type: `button`,
                          onClick: f,
                          className: `text-[#171613]/65 hover:text-[#0E0D0B] font-medium transition-colors`,
                          children: `Continue to Website`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
        : null
    );
  },
  PageMetadata = ({ title, description, canonicalPath, noIndex = false }) => {
    (0, _.useEffect)(() => {
      document.title = title;
      const metadata = [
        ["name", "description", description],
        ["property", "og:title", title],
        ["property", "og:description", description],
        ["name", "twitter:title", title],
        ["name", "twitter:description", description],
        ["name", "robots", noIndex ? "noindex, follow" : "index, follow"],
      ];
      const url = SITE_ORIGIN + (canonicalPath ?? window.location.pathname);
      if (!noIndex) metadata.push(["property", "og:url", url]);
      else document.head.querySelector('meta[property="og:url"]')?.remove();
      for (const [attribute, key, value] of metadata) {
        let tag = document.head.querySelector(
          "meta[" + attribute + '="' + key + '"]',
        );
        if (!tag) {
          tag = document.createElement("meta");
          tag.setAttribute(attribute, key);
          document.head.append(tag);
        }
        tag.content = value;
      }
      let canonical = document.head.querySelector('link[rel="canonical"]');
      if (noIndex) {
        canonical?.remove();
      } else {
        if (!canonical) {
          canonical = document.createElement("link");
          canonical.rel = "canonical";
          document.head.append(canonical);
        }
        canonical.href = url;
      }
    }, [title, description, canonicalPath, noIndex]);
    return null;
  },
  FaqAccordion = ({ items: e, dark: t = !1 }) => {
    let [n, r] = (0, _.useState)(e[0]?.id ?? null);
    return (0, P.jsx)(`div`, {
      className: `divide-y ${t ? `divide-[#FAF8F3]/10 border-y border-[#FAF8F3]/10` : `divide-[#171613]/12 border-y border-[#171613]/12`}`,
      children: e.map((e) => {
        let i = n === e.id;
        return (0, P.jsxs)(
          `div`,
          {
            className: `py-5`,
            children: [
              (0, P.jsxs)(`button`, {
                type: `button`,
                onClick: () => r(i ? null : e.id),
                "aria-expanded": i,
                className: `w-full flex items-start justify-between gap-6 text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A34A] rounded`,
                children: [
                  (0, P.jsxs)(`div`, {
                    children: [
                      (0, P.jsx)(`span`, {
                        className: `block text-xs font-medium mb-1 ${t ? `text-[#C9A34A]` : `text-[#9A7A2C]`}`,
                        children: e.category,
                      }),
                      (0, P.jsx)(`span`, {
                        className: `font-display text-lg sm:text-xl font-medium transition-colors ${t ? `text-[#FAF8F3] group-hover:text-[#E7CC83]` : `text-[#0E0D0B] group-hover:text-[#8F6F24]`}`,
                        children: e.question,
                      }),
                    ],
                  }),
                  (0, P.jsx)(`span`, {
                    className: `mt-1 shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-colors ${i ? `bg-[#C9A34A] border-[#C9A34A] text-[#0E0D0B]` : t ? `border-[#FAF8F3]/20 text-[#FAF8F3] group-hover:border-[#C9A34A]` : `border-[#171613]/20 text-[#171613] group-hover:border-[#C9A34A]`}`,
                    children: i
                      ? (0, P.jsx)(ur, {
                          className: `w-4 h-4`,
                        })
                      : (0, P.jsx)(mr, {
                          className: `w-4 h-4`,
                        }),
                  }),
                ],
              }),
              i &&
                (0, P.jsx)(`div`, {
                  className: `mt-3 pr-12 text-sm sm:text-base leading-relaxed ${t ? `text-[#E9DFD0]/80` : `text-[#171613]/75`}`,
                  children: e.answer,
                }),
            ],
          },
          e.id,
        );
      }),
    });
  },
  ConsultationBanner = ({
    headline: e = `Let's Build Something Extraordinary Together.`,
    subtitle:
      t = `Share your plot details, renovation plans or interior vision with our team for a transparent architectural and execution roadmap.`,
    serviceContext: n = `General Consultation`,
  }) =>
    (0, P.jsx)(`section`, {
      className: `bg-[#171613] text-[#FAF8F3] border-t border-[#C9A34A]/20`,
      children: (0, P.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20`,
        children: (0, P.jsxs)(`div`, {
          className: `flex flex-col lg:flex-row lg:items-center justify-between gap-8`,
          children: [
            (0, P.jsxs)(`div`, {
              className: `max-w-2xl`,
              children: [
                (0, P.jsx)(`p`, {
                  className: `text-xs font-medium tracking-[0.2em] uppercase text-[#C9A34A] mb-3`,
                  children: `CREDCO · Your Dream. Our Design. Our Commitment.`,
                }),
                (0, P.jsx)(`h2`, {
                  className: `font-display text-3xl sm:text-4xl font-semibold text-[#FAF8F3] leading-tight`,
                  children: e,
                }),
                (0, P.jsx)(`p`, {
                  className: `mt-4 text-base text-[#E9DFD0]/80 leading-relaxed`,
                  children: t,
                }),
              ],
            }),
            (0, P.jsxs)(`div`, {
              className: `flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 shrink-0`,
              children: [
                (0, P.jsxs)(k, {
                  to: `/consultation`,
                  className: `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap`,
                  children: [
                    (0, P.jsx)(`span`, {
                      children: `Get Free Consultation`,
                    }),
                    (0, P.jsx)(M, {
                      className: `w-4 h-4`,
                    }),
                  ],
                }),
                (0, P.jsxs)(`a`, {
                  href: serviceEnquiryUrl(n),
                  target: `_blank`,
                  rel: `noopener noreferrer`,
                  className: `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#C9A34A]/45 text-[#E7CC83] hover:bg-[#C9A34A]/10 text-sm font-medium transition-colors whitespace-nowrap`,
                  children: [
                    (0, P.jsx)(N, {
                      className: `w-4 h-4`,
                    }),
                    (0, P.jsxs)(`span`, {
                      children: [`WhatsApp `, businessPhone],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      }),
    }),
  ti = ({ className: e = `w-4 h-4` }) =>
    (0, P.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      fill: `none`,
      stroke: `currentColor`,
      strokeWidth: `1.8`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
      className: e,
      "aria-hidden": `true`,
      children: [
        (0, P.jsx)(`rect`, {
          x: `2`,
          y: `2`,
          width: `20`,
          height: `20`,
          rx: `5`,
          ry: `5`,
        }),
        (0, P.jsx)(`path`, {
          d: `M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z`,
        }),
        (0, P.jsx)(`line`, {
          x1: `17.5`,
          y1: `6.5`,
          x2: `17.51`,
          y2: `6.5`,
        }),
      ],
    });
function ni(e) {
  if (!e) return null;
  let t = e.match(/instagram\.com\/(?:reel|reels|p)\/([A-Za-z0-9_-]+)/i);
  return t?.[1] ? `https://www.instagram.com/reel/${t[1]}/embed/` : null;
}
var ri = ({ reels: e, activeIndex: t, onClose: n, onChangeReel: r }) => {
    let [i, a] = (0, _.useState)(0),
      [o, s] = (0, _.useState)(!0),
      c = t !== null && e[t] !== void 0,
      l = c ? e[t] : null,
      u = ni(l?.instagramReelUrl);
    if (
      ((0, _.useEffect)(() => {
        (a(0), s(!0));
      }, [t]),
      (0, _.useEffect)(() => {
        if (!c || !o || !l || t === null || u) return;
        let n = window.setInterval(() => {
          a((n) =>
            n + 1 < l.scenes.length ? n + 1 : (r((t + 1) % e.length), 0),
          );
        }, 3400);
        return () => window.clearInterval(n);
      }, [c, o, l, t, e.length, r, u]),
      (0, _.useEffect)(() => {
        if (!c || t === null) return;
        let i = (i) => {
          (i.key === `Escape` && n(),
            i.key === `ArrowRight` && r((t + 1) % e.length),
            i.key === `ArrowLeft` && r((t - 1 + e.length) % e.length),
            i.key === ` ` && !u && (i.preventDefault(), s((e) => !e)));
        };
        return (
          window.addEventListener(`keydown`, i),
          (document.body.style.overflow = `hidden`),
          () => {
            (window.removeEventListener(`keydown`, i),
              (document.body.style.overflow = ``));
          }
        );
      }, [c, t, e.length, n, r, u]),
      !c || !l || t === null)
    )
      return null;
    let d = l.scenes[i] ?? l.scenes[0];
    return (0, P.jsxs)(`div`, {
      role: `dialog`,
      "aria-modal": `true`,
      "aria-label": l.title,
      onClick: n,
      className: `fixed inset-0 z-50 bg-[#0E0D0B]/95 backdrop-blur-md flex items-center justify-center p-3 sm:p-6`,
      children: [
        (0, P.jsx)(`button`, {
          type: `button`,
          onClick: n,
          "aria-label": `Close reel player`,
          className: `fixed top-4 right-4 z-20 w-11 h-11 rounded-full bg-[#171613]/90 border border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83] flex items-center justify-center transition-colors`,
          children: (0, P.jsx)(gr, {
            className: `w-5 h-5`,
          }),
        }),
        e.length > 1 &&
          (0, P.jsx)(`button`, {
            type: `button`,
            onClick: (n) => {
              (n.stopPropagation(), r((t - 1 + e.length) % e.length));
            },
            "aria-label": `Previous reel`,
            className: `hidden sm:flex mr-4 w-11 h-11 rounded-full bg-[#171613]/90 border border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83] items-center justify-center transition-colors shrink-0`,
            children: (0, P.jsx)(Qn, {
              className: `w-5 h-5`,
            }),
          }),
        (0, P.jsx)(`div`, {
          onClick: (e) => e.stopPropagation(),
          className: `relative w-full max-w-[380px] aspect-[9/16] max-h-[88vh] rounded-2xl overflow-hidden bg-[#171613] border border-[#C9A34A]/40 shadow-2xl flex flex-col justify-between`,
          children: u
            ? (0, P.jsxs)(P.Fragment, {
                children: [
                  (0, P.jsx)(`iframe`, {
                    src: u,
                    title: l.title,
                    className: `w-full flex-1 bg-black border-0`,
                    allow: `autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share`,
                    allowFullScreen: !0,
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `p-4 bg-[#0E0D0B] border-t border-[#FAF8F3]/10 flex items-center gap-2.5`,
                    children: [
                      (0, P.jsxs)(`a`, {
                        href: serviceEnquiryUrl(l.category, l.title),
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-xs font-semibold transition-colors whitespace-nowrap`,
                        children: [
                          (0, P.jsx)(N, {
                            className: `w-4 h-4`,
                          }),
                          (0, P.jsx)(`span`, {
                            children: `Enquire Design`,
                          }),
                        ],
                      }),
                      (0, P.jsxs)(`a`, {
                        href: l.instagramReelUrl,
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[#FAF8F3]/30 text-[#FAF8F3] hover:border-[#E7CC83] text-xs font-medium transition-colors whitespace-nowrap`,
                        children: [
                          (0, P.jsx)(rr, {
                            className: `w-3.5 h-3.5`,
                          }),
                          (0, P.jsx)(`span`, {
                            children: `Instagram`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              })
            : (0, P.jsxs)(P.Fragment, {
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `absolute inset-0`,
                    children: [
                      (0, P.jsx)(
                        SiteImage,
                        {
                          src: d.image,
                          alt: d.headline,
                          loading: `eager`,
                          className: `w-full h-full object-cover transition-transform duration-[3400ms] ease-out ${o ? `scale-110` : `scale-100`}`,
                        },
                        `${l.id}-${i}`,
                      ),
                      (0, P.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-b from-[#0E0D0B]/75 via-transparent to-[#0E0D0B]/95`,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `absolute inset-y-16 inset-x-0 z-10 flex`,
                    children: [
                      (0, P.jsx)(`button`, {
                        type: `button`,
                        onClick: () => {
                          i > 0 ? a(i - 1) : r((t - 1 + e.length) % e.length);
                        },
                        "aria-label": `Previous reel scene`,
                        className: `w-1/3 h-full focus:outline-none`,
                      }),
                      (0, P.jsx)(`button`, {
                        type: `button`,
                        onClick: () => s((e) => !e),
                        "aria-label": o ? `Pause reel` : `Play reel`,
                        className: `w-1/3 h-full focus:outline-none`,
                      }),
                      (0, P.jsx)(`button`, {
                        type: `button`,
                        onClick: () => {
                          i + 1 < l.scenes.length
                            ? a(i + 1)
                            : r((t + 1) % e.length);
                        },
                        "aria-label": `Next reel scene`,
                        className: `w-1/3 h-full focus:outline-none`,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `relative z-20 p-4 space-y-3`,
                    children: [
                      (0, P.jsx)(`div`, {
                        className: `grid gap-1.5`,
                        style: {
                          gridTemplateColumns: `repeat(${l.scenes.length}, 1fr)`,
                        },
                        children: l.scenes.map((e, t) =>
                          (0, P.jsx)(
                            `button`,
                            {
                              type: `button`,
                              "aria-label": `Scene ${t + 1}`,
                              onClick: () => a(t),
                              className: `h-1 rounded-full bg-[#FAF8F3]/25 overflow-hidden`,
                              children: (0, P.jsx)(`span`, {
                                className: `block h-full rounded-full transition-all duration-300 ${t < i ? `w-full bg-[#C9A34A]` : t === i ? `w-full bg-[#E7CC83]` : `w-0 bg-transparent`}`,
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `flex items-center justify-between gap-2 text-[#FAF8F3]`,
                        children: [
                          (0, P.jsxs)(`div`, {
                            className: `min-w-0`,
                            children: [
                              (0, P.jsxs)(`p`, {
                                className: `text-xs font-semibold text-[#E7CC83] truncate`,
                                children: [`CREDCO · `, l.category],
                              }),
                              (0, P.jsxs)(`p`, {
                                className: `text-[11px] text-[#E9DFD0]/75 truncate`,
                                children: [
                                  `Sample Architectural Reel · `,
                                  l.duration,
                                ],
                              }),
                            ],
                          }),
                          (0, P.jsx)(`button`, {
                            type: `button`,
                            onClick: () => s((e) => !e),
                            "aria-label": o
                              ? `Pause playback`
                              : `Resume playback`,
                            className: `w-9 h-9 rounded-full bg-[#0E0D0B]/70 border border-[#FAF8F3]/25 flex items-center justify-center hover:border-[#C9A34A] shrink-0`,
                            children: o
                              ? (0, P.jsx)(dr, {
                                  className: `w-4 h-4`,
                                })
                              : (0, P.jsx)(pr, {
                                  className: `w-4 h-4 ml-0.5`,
                                }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `relative z-20 p-5 space-y-4`,
                    children: [
                      (0, P.jsxs)(`div`, {
                        children: [
                          (0, P.jsx)(`p`, {
                            className: `text-xs font-semibold text-[#C9A34A] mb-1`,
                            children: d.headline,
                          }),
                          (0, P.jsx)(`h3`, {
                            className: `font-display text-xl font-semibold text-[#FAF8F3] leading-snug`,
                            children: l.title,
                          }),
                          (0, P.jsx)(`p`, {
                            className: `mt-1.5 text-xs text-[#E9DFD0]/85 leading-relaxed`,
                            children: d.detail,
                          }),
                        ],
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `flex items-center gap-2.5`,
                        children: [
                          (0, P.jsxs)(`a`, {
                            href: serviceEnquiryUrl(l.category, l.title),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-xs font-semibold transition-colors whitespace-nowrap`,
                            children: [
                              (0, P.jsx)(N, {
                                className: `w-4 h-4`,
                              }),
                              (0, P.jsx)(`span`, {
                                children: `Enquire Design`,
                              }),
                            ],
                          }),
                          (0, P.jsxs)(k, {
                            to: l.serviceRoute,
                            onClick: n,
                            className: `inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-lg border border-[#FAF8F3]/30 bg-[#0E0D0B]/60 text-[#FAF8F3] hover:border-[#E7CC83] text-xs font-medium transition-colors whitespace-nowrap`,
                            children: [
                              (0, P.jsx)(`span`, {
                                children: `Service`,
                              }),
                              (0, P.jsx)(M, {
                                className: `w-3.5 h-3.5`,
                              }),
                            ],
                          }),
                          l.instagramReelUrl &&
                            (0, P.jsx)(`a`, {
                              href: l.instagramReelUrl,
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              "aria-label": `Open on Instagram`,
                              className: `w-9 h-9 rounded-lg border border-[#FAF8F3]/30 bg-[#0E0D0B]/60 text-[#FAF8F3] hover:border-[#E7CC83] flex items-center justify-center shrink-0`,
                              children: (0, P.jsx)(rr, {
                                className: `w-4 h-4`,
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
        }),
        e.length > 1 &&
          (0, P.jsx)(`button`, {
            type: `button`,
            onClick: (n) => {
              (n.stopPropagation(), r((t + 1) % e.length));
            },
            "aria-label": `Next reel`,
            className: `hidden sm:flex ml-4 w-11 h-11 rounded-full bg-[#171613]/90 border border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83] items-center justify-center transition-colors shrink-0`,
            children: (0, P.jsx)($n, {
              className: `w-5 h-5`,
            }),
          }),
      ],
    });
  },
  ii = ({ reels: e = designReels, showHeader: t = !0, dark: n = !1 }) => {
    let [r, i] = (0, _.useState)(null),
      [a, o] = (0, _.useState)(0),
      [s, c] = (0, _.useState)(!1),
      l = (0, _.useRef)(null),
      u = (0, _.useRef)(null),
      d = (0, _.useRef)(0),
      f = e.length > 1,
      p = f ? [...e, ...e, ...e] : e,
      m = () => {
        let t = l.current;
        if (!t || !f)
          return {
            segmentWidth: 0,
            cardStep: 280,
          };
        let n = t.children[0],
          r = t.children[1],
          i = t.children[e.length],
          a =
            n && r ? r.offsetLeft - n.offsetLeft : n ? n.offsetWidth + 16 : 280;
        return {
          segmentWidth: n && i ? i.offsetLeft - n.offsetLeft : a * e.length,
          cardStep: a,
        };
      };
    ((0, _.useEffect)(() => {
      let e = l.current;
      if (!e || !f) return;
      let t = window.requestAnimationFrame(() => {
        let { segmentWidth: t } = m();
        t > 0 && ((e.scrollLeft = t), (d.current = t));
      });
      return () => window.cancelAnimationFrame(t);
    }, [e.length, f]),
      (0, _.useEffect)(() => {
        let t = l.current;
        if (!t || !f) return;
        let n = () => {
          let { segmentWidth: n, cardStep: r } = m();
          if (n <= 0) return;
          t.scrollLeft <= n * 0.25
            ? ((t.scrollLeft += n), (d.current = t.scrollLeft))
            : t.scrollLeft >= n * 1.75 &&
              ((t.scrollLeft -= n), (d.current = t.scrollLeft));
          let i = ((t.scrollLeft % n) + n) % n,
            a = Math.round(i / Math.max(1, r)) % e.length;
          o(a);
        };
        return (
          t.addEventListener(`scroll`, n, {
            passive: !0,
          }),
          () => t.removeEventListener(`scroll`, n)
        );
      }, [e.length, f]),
      (0, _.useEffect)(() => {
        let e = l.current;
        if (
          !e ||
          !f ||
          s ||
          r !== null ||
          (typeof window < `u` &&
            window.matchMedia(`(prefers-reduced-motion: reduce)`).matches)
        )
          return;
        d.current = e.scrollLeft;
        let t = 0,
          n = performance.now(),
          i = (r) => {
            let a = Math.min(48, r - n);
            ((n = r),
              (d.current += (a / 1e3) * 42),
              (e.scrollLeft = d.current),
              (t = window.requestAnimationFrame(i)));
          };
        return (
          (t = window.requestAnimationFrame(i)),
          () => window.cancelAnimationFrame(t)
        );
      }, [f, s, r]));
    let h = () => {
      (c(!0),
        u.current && window.clearTimeout(u.current),
        (u.current = window.setTimeout(() => {
          c(!1);
        }, 2200)));
    };
    (0, _.useEffect)(
      () => () => {
        u.current && window.clearTimeout(u.current);
      },
      [],
    );
    let g = (e) => {
        let t = l.current;
        if (!t) return;
        h();
        let { cardStep: n } = m();
        t.scrollBy({
          left: e === `next` ? n : -n,
          behavior: `smooth`,
        });
      },
      v = (e) => {
        let t = l.current;
        if (!t) return;
        h();
        let { segmentWidth: n, cardStep: r } = m(),
          i = f ? n + e * r : e * r;
        t.scrollTo({
          left: i,
          behavior: `smooth`,
        });
      };
    return (0, P.jsxs)(`section`, {
      className: n
        ? `bg-[#0E0D0B] text-[#FAF8F3] py-16 sm:py-24 border-t border-[#FAF8F3]/10 overflow-hidden`
        : `bg-[#FAF8F3] text-[#171613] py-16 sm:py-24 border-t border-[#171613]/10 overflow-hidden`,
      children: [
        (0, P.jsxs)(`div`, {
          className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
          children: [
            t
              ? (0, P.jsxs)(`div`, {
                  className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-10`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      className: `max-w-2xl`,
                      children: [
                        (0, P.jsxs)(`p`, {
                          className: `inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-[#C9A34A] mb-2`,
                          children: [
                            (0, P.jsx)(ti, {
                              className: `w-3.5 h-3.5`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: `Instagram Reels & Architectural Walkthroughs`,
                            }),
                          ],
                        }),
                        (0, P.jsx)(`h2`, {
                          className: `font-display text-3xl sm:text-4xl font-semibold ${n ? `text-[#FAF8F3]` : `text-[#0E0D0B]`}`,
                          children: `Explore CREDCO Design Reels`,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-3 text-sm sm:text-base leading-relaxed ${n ? `text-[#E9DFD0]/75` : `text-[#171613]/75`}`,
                          children: instagramProfile.note,
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `flex items-center justify-between md:justify-end gap-3 shrink-0`,
                      children: [
                        (0, P.jsxs)(`div`, {
                          className: `flex items-center gap-2`,
                          children: [
                            (0, P.jsx)(`button`, {
                              type: `button`,
                              onClick: () => g(`prev`),
                              "aria-label": `Slide reels left`,
                              className: `w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${n ? `border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83]` : `border-[#171613]/20 text-[#0E0D0B] hover:border-[#C9A34A]`}`,
                              children: (0, P.jsx)(Qn, {
                                className: `w-4 h-4`,
                              }),
                            }),
                            (0, P.jsx)(`button`, {
                              type: `button`,
                              onClick: () => g(`next`),
                              "aria-label": `Slide reels right`,
                              className: `w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${n ? `border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83]` : `border-[#171613]/20 text-[#0E0D0B] hover:border-[#C9A34A]`}`,
                              children: (0, P.jsx)($n, {
                                className: `w-4 h-4`,
                              }),
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`a`, {
                          href: serviceEnquiryUrl(`Reels Design Enquiry`),
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap`,
                          children: [
                            (0, P.jsx)(N, {
                              className: `w-4 h-4`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: `Discuss a Design`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                })
              : (0, P.jsxs)(`div`, {
                  className: `flex items-center justify-between gap-4 mb-6`,
                  children: [
                    (0, P.jsx)(`p`, {
                      className: `text-xs sm:text-sm font-medium ${n ? `text-[#E9DFD0]/75` : `text-[#171613]/70`}`,
                      children: `Continuous unlimited scroll · Swipe or tap any reel to watch`,
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `flex items-center gap-2 shrink-0`,
                      children: [
                        (0, P.jsx)(`button`, {
                          type: `button`,
                          onClick: () => g(`prev`),
                          "aria-label": `Slide reels left`,
                          className: `w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${n ? `border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83]` : `border-[#171613]/20 text-[#0E0D0B] hover:border-[#C9A34A]`}`,
                          children: (0, P.jsx)(Qn, {
                            className: `w-4 h-4`,
                          }),
                        }),
                        (0, P.jsx)(`button`, {
                          type: `button`,
                          onClick: () => g(`next`),
                          "aria-label": `Slide reels right`,
                          className: `w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${n ? `border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83]` : `border-[#171613]/20 text-[#0E0D0B] hover:border-[#C9A34A]`}`,
                          children: (0, P.jsx)($n, {
                            className: `w-4 h-4`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
            (0, P.jsx)(`div`, {
              ref: l,
              onMouseEnter: () => c(!0),
              onMouseLeave: () => c(!1),
              onTouchStart: h,
              onWheel: h,
              className: `flex gap-4 sm:gap-5 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing`,
              children: p.map((t, n) => {
                let r = n % e.length;
                return (0, P.jsxs)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => i(r),
                    className: `group relative shrink-0 w-[66%] sm:w-[44%] md:w-[31%] lg:w-[23.5%] aspect-[9/16] rounded-xl overflow-hidden bg-[#171613] border border-[#171613]/15 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A34A]`,
                    children: [
                      (0, P.jsx)(SiteImage, {
                        src: t.coverImage,
                        alt: t.title,
                        className: `absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
                      }),
                      (0, P.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-[#0E0D0B]/95 via-[#0E0D0B]/25 to-[#0E0D0B]/30`,
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `relative z-10 p-3 flex items-center justify-between text-[#FAF8F3]/85 text-[11px]`,
                        children: [
                          (0, P.jsx)(`span`, {
                            className: `font-medium truncate`,
                            children: t.category,
                          }),
                          (0, P.jsx)(`span`, {
                            className: `tabular-nums shrink-0`,
                            children: t.duration,
                          }),
                        ],
                      }),
                      (0, P.jsx)(`div`, {
                        className: `absolute inset-0 z-10 flex items-center justify-center pointer-events-none`,
                        children: (0, P.jsx)(`span`, {
                          className: `w-12 h-12 rounded-full bg-[#0E0D0B]/70 backdrop-blur-sm border border-[#E7CC83]/60 text-[#FAF8F3] flex items-center justify-center group-hover:bg-[#C9A34A] group-hover:text-[#0E0D0B] group-hover:scale-105 transition-all duration-200`,
                          children: (0, P.jsx)(pr, {
                            className: `w-5 h-5 ml-0.5`,
                          }),
                        }),
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `absolute inset-x-0 bottom-0 z-10 p-4`,
                        children: [
                          (0, P.jsx)(`h3`, {
                            className: `font-display text-base font-semibold text-[#FAF8F3] leading-snug line-clamp-2`,
                            children: t.title,
                          }),
                          (0, P.jsx)(`p`, {
                            className: `mt-1.5 text-[11px] text-[#E9DFD0]/80 line-clamp-2`,
                            children: t.summary,
                          }),
                        ],
                      }),
                    ],
                  },
                  `${t.id}-${n}`,
                );
              }),
            }),
            e.length > 1 &&
              (0, P.jsx)(`div`, {
                className: `mt-5 flex items-center justify-center gap-2`,
                children: e.map((e, t) => {
                  let r = t === a;
                  return (0, P.jsx)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => v(t),
                      "aria-label": `Jump to reel ${t + 1}: ${e.title}`,
                      className: `h-1.5 rounded-full transition-all duration-300 ${r ? `w-8 bg-[#C9A34A]` : n ? `w-2.5 bg-[#FAF8F3]/25 hover:bg-[#FAF8F3]/50` : `w-2.5 bg-[#171613]/20 hover:bg-[#171613]/45`}`,
                    },
                    e.id,
                  );
                }),
              }),
          ],
        }),
        (0, P.jsx)(ri, {
          reels: e,
          activeIndex: r,
          onClose: () => i(null),
          onChangeReel: i,
        }),
      ],
    });
  },
  ai = ({ className: e = `w-4 h-4` }) =>
    (0, P.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      className: e,
      "aria-hidden": `true`,
      children: [
        (0, P.jsx)(`path`, {
          fill: `#4285F4`,
          d: `M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z`,
        }),
        (0, P.jsx)(`path`, {
          fill: `#34A853`,
          d: `M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z`,
        }),
        (0, P.jsx)(`path`, {
          fill: `#FBBC05`,
          d: `M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z`,
        }),
        (0, P.jsx)(`path`, {
          fill: `#EA4335`,
          d: `M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z`,
        }),
      ],
    }),
  oi = ({ showReviewsLink: e = !0 }) =>
    (0, P.jsx)(`section`, {
      className: `bg-[#FAF8F3] py-16 sm:py-24 border-b border-[#171613]/10`,
      children: (0, P.jsxs)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: [
          (0, P.jsxs)(`div`, {
            className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `max-w-2xl`,
                children: [
                  (0, P.jsx)(`p`, {
                    className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                    children: `Client Satisfaction & Trust`,
                  }),
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                    children: `Satisfied Clients Across Every Space`,
                  }),
                  (0, P.jsx)(`p`, {
                    className: `mt-3 text-sm sm:text-base text-[#171613]/75 leading-relaxed`,
                    children: `Homeowners, corporate offices, institutions and property owners trust CREDCO for quality engineering, clear 3D visualization and transparent handovers.`,
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `flex flex-wrap items-center gap-3 shrink-0`,
                children: [
                  e &&
                    (0, P.jsxs)(k, {
                      to: `/reviews`,
                      className: `inline-flex items-center gap-1.5 px-4 py-2.5 rounded-lg border border-[#171613]/20 text-xs sm:text-sm font-semibold text-[#0E0D0B] hover:border-[#C9A34A] transition-colors whitespace-nowrap`,
                      children: [
                        (0, P.jsx)(`span`, {
                          children: `Client Reviews Page`,
                        }),
                        (0, P.jsx)(M, {
                          className: `w-4 h-4`,
                        }),
                      ],
                    }),
                  (0, P.jsxs)(`a`, {
                    href: Nr,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0E0D0B] text-[#E7CC83] hover:bg-[#171613] text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap`,
                    children: [
                      (0, P.jsx)(ai, {
                        className: `w-4 h-4`,
                      }),
                      (0, P.jsx)(`span`, {
                        children: `Google Reviews`,
                      }),
                      (0, P.jsx)(rr, {
                        className: `w-3.5 h-3.5`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          (0, P.jsx)(`div`, {
            className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5`,
            children: Pr.map((e) =>
              (0, P.jsxs)(
                `div`,
                {
                  className: `bg-[#E9DFD0]/35 border border-[#171613]/12 rounded-xl p-6 flex flex-col justify-between hover:border-[#C9A34A]/65 transition-colors`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      children: [
                        (0, P.jsxs)(`div`, {
                          className: `flex items-center justify-between gap-2 mb-4`,
                          children: [
                            (0, P.jsx)(`span`, {
                              className: `text-xs font-semibold text-[#9A7A2C] tabular-nums`,
                              children: e.number,
                            }),
                            (0, P.jsx)(hr, {
                              className: `w-4 h-4 text-[#C9A34A]`,
                            }),
                          ],
                        }),
                        (0, P.jsx)(`p`, {
                          className: `text-[11px] font-semibold uppercase tracking-[0.14em] text-[#8F6F24]`,
                          children: e.category,
                        }),
                        (0, P.jsx)(`h3`, {
                          className: `mt-1.5 font-display text-xl font-semibold text-[#0E0D0B] leading-snug`,
                          children: e.clientGroup,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-1 text-xs font-medium text-[#171613]/65`,
                          children: e.scope,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-3 text-sm text-[#171613]/80 leading-relaxed`,
                          children: e.highlight,
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `mt-6 pt-4 border-t border-[#171613]/10 flex items-center gap-2 text-xs font-semibold text-[#0E0D0B]`,
                      children: [
                        (0, P.jsx)(tr, {
                          className: `w-3.5 h-3.5 text-[#C9A34A] shrink-0`,
                        }),
                        (0, P.jsx)(`span`, {
                          children: e.outcome,
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
          (0, P.jsxs)(`div`, {
            className: `mt-8 bg-[#0E0D0B] text-[#FAF8F3] rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#C9A34A]/30 flex flex-col lg:flex-row lg:items-center justify-between gap-7`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `max-w-2xl space-y-3`,
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E7CC83]`,
                    children: [
                      (0, P.jsx)(ai, {
                        className: `w-4 h-4`,
                      }),
                      (0, P.jsx)(`span`, {
                        children: `Verified Google Business Profile`,
                      }),
                    ],
                  }),
                  (0, P.jsx)(`h3`, {
                    className: `font-display text-2xl sm:text-3xl font-semibold text-[#FAF8F3]`,
                    children: `Real Client Feedback on Google`,
                  }),
                  (0, P.jsx)(`p`, {
                    className: `text-sm text-[#E9DFD0]/80 leading-relaxed`,
                    children: `Inspect authentic reviews, project impressions and client experiences shared directly on CREDCO’s official Google Business listing.`,
                  }),
                  (0, P.jsx)(`div`, {
                    className: `pt-2 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-[#E9DFD0]/90`,
                    children: Fr.map((e) =>
                      (0, P.jsxs)(
                        `div`,
                        {
                          className: `inline-flex items-center gap-2`,
                          children: [
                            (0, P.jsx)(tr, {
                              className: `w-3.5 h-3.5 text-[#C9A34A] shrink-0`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: e,
                            }),
                          ],
                        },
                        e,
                      ),
                    ),
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0`,
                children: [
                  (0, P.jsxs)(`a`, {
                    href: Nr,
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap`,
                    children: [
                      (0, P.jsx)(ai, {
                        className: `w-4 h-4`,
                      }),
                      (0, P.jsx)(`span`, {
                        children: `Read Google Reviews`,
                      }),
                      (0, P.jsx)(rr, {
                        className: `w-4 h-4`,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(k, {
                    to: `/consultation`,
                    className: `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83] text-sm font-medium transition-colors whitespace-nowrap`,
                    children: [
                      (0, P.jsx)(`span`, {
                        children: `Start Your Project`,
                      }),
                      (0, P.jsx)(M, {
                        className: `w-4 h-4`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  HomePage = () => {
    let [e, t] = (0, _.useState)(0),
      [n, r] = (0, _.useState)(!1);
    (0, _.useEffect)(() => {
      if (n) return;
      let e = window.setInterval(() => {
        t((e) => (e + 1) % heroSlides.length);
      }, 6e3);
      return () => window.clearInterval(e);
    }, [n]);
    let i = heroSlides[e];
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `CREDCO – Building Your Dream Life | Construction, Interior & Architecture`,
          description: `CREDCO – Creative Design And Construction Pvt. Ltd. Complete residential & commercial building construction, luxury interior design, exterior design, renovation, 3D elevation & architectural planning.`,
          canonicalPath: `/`,
        }),
        (0, P.jsxs)(`section`, {
          "aria-label": `Featured CREDCO showcases`,
          onMouseEnter: () => r(!0),
          onMouseLeave: () => r(!1),
          className: `relative min-h-[88vh] sm:min-h-[92vh] bg-[#0E0D0B] text-[#FAF8F3] flex items-end overflow-hidden pt-20`,
          children: [
            heroSlides.map((t, n) => {
              let r = n === e;
              return (0, P.jsxs)(
                `div`,
                {
                  "aria-hidden": !r,
                  className: `absolute inset-0 transition-opacity duration-700 ease-out ${r ? `opacity-100 z-0` : `opacity-0 -z-10 pointer-events-none`}`,
                  children: [
                    (0, P.jsx)(SiteImage, {
                      src: t.image,
                      alt: t.imageAlt,
                      loading: n === 0 ? "eager" : "lazy",
                      fetchPriority: n === 0 ? "high" : "low",
                      sizes: "100vw",
                      className: `w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${r ? `scale-105` : `scale-100`}`,
                    }),
                    (0, P.jsx)(`div`, {
                      className: `absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/65 to-[#0E0D0B]/35`,
                    }),
                    (0, P.jsx)(`div`, {
                      className: `absolute inset-0 bg-gradient-to-r from-[#0E0D0B]/90 via-[#0E0D0B]/50 to-transparent`,
                    }),
                  ],
                },
                t.id,
              );
            }),
            (0, P.jsxs)(`div`, {
              className: `relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-24 pt-10 min-w-0`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `max-w-3xl min-w-0`,
                  children: [
                    (0, P.jsx)(
                      `p`,
                      {
                        className: `text-[11px] sm:text-sm font-medium uppercase tracking-[0.2em] text-[#E7CC83] mb-3 sm:mb-4`,
                        children: i.kicker,
                      },
                      `kicker-${i.id}`,
                    ),
                    (0, P.jsx)(
                      `h1`,
                      {
                        className: `font-display text-3xl sm:text-5xl lg:text-6xl font-semibold text-[#FAF8F3] leading-[1.1] tracking-tight`,
                        children: i.headline,
                      },
                      `h1-${i.id}`,
                    ),
                    (0, P.jsx)(
                      `p`,
                      {
                        className: `mt-4 sm:mt-5 text-sm sm:text-lg text-[#E9DFD0]/90 leading-relaxed max-w-2xl`,
                        children: i.subtitle,
                      },
                      `sub-${i.id}`,
                    ),
                    (0, P.jsxs)(`div`, {
                      className: `mt-7 sm:mt-8 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3`,
                      children: [
                        (0, P.jsxs)(k, {
                          to:
                            i.secondaryCtaTo === "/consultation"
                              ? i.secondaryCtaTo
                              : i.primaryCtaTo,
                          className:
                            "inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl sm:rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap active:scale-[0.99]",
                          children: [
                            (0, P.jsx)(`span`, {
                              children:
                                i.secondaryCtaTo === "/consultation"
                                  ? i.secondaryCtaLabel
                                  : i.primaryCtaLabel,
                            }),
                            (0, P.jsx)(M, {
                              className: `w-4 h-4`,
                            }),
                          ],
                        }),
                        (0, P.jsx)(k, {
                          to:
                            i.secondaryCtaTo === "/consultation"
                              ? i.primaryCtaTo
                              : i.secondaryCtaTo,
                          className:
                            "inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 rounded-xl sm:rounded-lg border border-[#FAF8F3]/35 bg-[#0E0D0B]/45 backdrop-blur-sm text-[#FAF8F3] hover:border-[#E7CC83] hover:text-[#E7CC83] text-sm font-medium transition-colors whitespace-nowrap active:scale-[0.99]",
                          children: (0, P.jsx)(`span`, {
                            children:
                              i.secondaryCtaTo === "/consultation"
                                ? i.primaryCtaLabel
                                : i.secondaryCtaLabel,
                          }),
                        }),
                        (0, P.jsxs)(`a`, {
                          href: serviceEnquiryUrl(
                            `Project Enquiry`,
                            i.headline,
                          ),
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `hidden sm:inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg border border-[#C9A34A]/45 text-[#E7CC83] hover:bg-[#C9A34A]/15 text-sm font-medium transition-colors whitespace-nowrap`,
                          children: [
                            (0, P.jsx)(N, {
                              className: `w-4 h-4`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: `WhatsApp Now`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, P.jsxs)(`div`, {
                  className: `mt-12 pt-6 border-t border-[#FAF8F3]/15 flex items-center justify-between gap-4`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      className: `flex items-center gap-2.5`,
                      role: `tablist`,
                      "aria-label": `Hero slides`,
                      children: [
                        heroSlides.map((n, r) => {
                          let i = r === e;
                          return (0, P.jsx)(
                            `button`,
                            {
                              type: `button`,
                              role: `tab`,
                              "aria-selected": i,
                              "aria-label": `Slide ${r + 1}: ${n.headline}`,
                              onClick: () => t(r),
                              className: `h-1.5 rounded-full transition-all duration-300 ${i ? `w-10 bg-[#C9A34A]` : `w-4 bg-[#FAF8F3]/30 hover:bg-[#FAF8F3]/60`}`,
                            },
                            n.id,
                          );
                        }),
                        (0, P.jsxs)(`span`, {
                          className: `ml-2 text-xs text-[#E9DFD0]/70 tabular-nums`,
                          children: [`0`, e + 1, ` / 0`, heroSlides.length],
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `flex items-center gap-2`,
                      children: [
                        (0, P.jsx)(`button`, {
                          type: `button`,
                          "aria-label": `Previous hero slide`,
                          onClick: () =>
                            t(
                              (e) =>
                                (e - 1 + heroSlides.length) % heroSlides.length,
                            ),
                          className: `w-10 h-10 rounded-full border border-[#FAF8F3]/25 bg-[#0E0D0B]/50 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83] flex items-center justify-center transition-colors`,
                          children: (0, P.jsx)(Qn, {
                            className: `w-4 h-4`,
                          }),
                        }),
                        (0, P.jsx)(`button`, {
                          type: `button`,
                          "aria-label": `Next hero slide`,
                          onClick: () => t((e) => (e + 1) % heroSlides.length),
                          className: `w-10 h-10 rounded-full border border-[#FAF8F3]/25 bg-[#0E0D0B]/50 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83] flex items-center justify-center transition-colors`,
                          children: (0, P.jsx)($n, {
                            className: `w-4 h-4`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24 border-b border-[#171613]/10`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, P.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-7`,
                  children: [
                    (0, P.jsx)(`p`, {
                      className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-3`,
                      children: `Welcome to CREDCO`,
                    }),
                    (0, P.jsx)(`h2`, {
                      className: `font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-[#0E0D0B] leading-[1.14]`,
                      children: `Unified Architecture, Construction & Interior Craftsmanship`,
                    }),
                  ],
                }),
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-5 space-y-4`,
                  children: [
                    (0, P.jsxs)(`p`, {
                      className: `text-base text-[#171613]/80 leading-relaxed`,
                      children: [
                        (0, P.jsx)(`strong`, {
                          children: `CREDCO – Creative Design And Construction Pvt. Ltd.`,
                        }),
                        ` brings architectural planning, structural construction, exterior facades and refined interior design together under one accountable practice.`,
                      ],
                    }),
                    (0, P.jsx)(`p`, {
                      className: `text-sm text-[#171613]/70 leading-relaxed`,
                      children: `Whether you are building a custom residence from the ground up, visualizing a modern 3D front elevation or remodeling your home or workplace, our team translates your vision into spaces built to last.`,
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `pt-2 flex flex-wrap items-center gap-4`,
                      children: [
                        (0, P.jsxs)(k, {
                          to: `/about`,
                          className: `inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E0D0B] hover:text-[#9A7A2C] transition-colors`,
                          children: [
                            (0, P.jsx)(`span`, {
                              children: `Explore Our Company`,
                            }),
                            (0, P.jsx)(M, {
                              className: `w-4 h-4`,
                            }),
                          ],
                        }),
                        (0, P.jsx)(`span`, {
                          className: `text-[#171613]/25`,
                          "aria-hidden": `true`,
                          children: `|`,
                        }),
                        (0, P.jsx)(`span`, {
                          className: `text-xs font-medium tracking-wider uppercase text-[#9A7A2C]`,
                          children: `Construction · Interior · Architecture`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#E9DFD0]/40 py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12`,
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `max-w-2xl`,
                    children: [
                      (0, P.jsx)(`p`, {
                        className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                        children: `Our Expertise`,
                      }),
                      (0, P.jsx)(`h2`, {
                        className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                        children: `Six Integrated Disciplines Under One Roof`,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(k, {
                    to: `/services`,
                    className: `inline-flex items-center gap-2 text-sm font-semibold text-[#0E0D0B] hover:text-[#9A7A2C] transition-colors whitespace-nowrap`,
                    children: [
                      (0, P.jsx)(`span`, {
                        children: `View All Services`,
                      }),
                      (0, P.jsx)(M, {
                        className: `w-4 h-4`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7`,
                children: services.map((e) =>
                  (0, P.jsxs)(
                    `article`,
                    {
                      className: `bg-[#FAF8F3] border border-[#171613]/10 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#C9A34A]/70 transition-colors`,
                      children: [
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsx)(k, {
                              to: e.route,
                              className: `block aspect-[4/3] overflow-hidden bg-[#171613]`,
                              children: (0, P.jsx)(SiteImage, {
                                src: e.image,
                                alt: e.imageAlt,
                                className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
                              }),
                            }),
                            (0, P.jsxs)(`div`, {
                              className: `p-6`,
                              children: [
                                (0, P.jsx)(`div`, {
                                  className: `flex items-center justify-between text-xs text-[#9A7A2C] font-semibold mb-2`,
                                  children: (0, P.jsxs)(`span`, {
                                    className: `tabular-nums`,
                                    children: [e.number, `. Service`],
                                  }),
                                }),
                                (0, P.jsx)(`h3`, {
                                  className: `font-display text-2xl font-semibold text-[#0E0D0B]`,
                                  children: (0, P.jsx)(k, {
                                    to: e.route,
                                    className: `hover:text-[#9A7A2C] transition-colors`,
                                    children: e.title,
                                  }),
                                }),
                                (0, P.jsx)(`p`, {
                                  className: `mt-2.5 text-sm text-[#171613]/75 leading-relaxed`,
                                  children: e.shortDesc,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `px-6 pb-6 pt-4 border-t border-[#171613]/8 flex items-center justify-between gap-3`,
                          children: [
                            (0, P.jsxs)(k, {
                              to: e.route,
                              className: `inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E0D0B] hover:text-[#9A7A2C] transition-colors whitespace-nowrap`,
                              children: [
                                (0, P.jsx)(`span`, {
                                  children: `Explore More`,
                                }),
                                (0, P.jsx)(M, {
                                  className: `w-3.5 h-3.5`,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`a`, {
                              href: serviceEnquiryUrl(e.title),
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              className: `inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F6F24] hover:text-[#0E0D0B] transition-colors whitespace-nowrap`,
                              children: [
                                (0, P.jsx)(N, {
                                  className: `w-3.5 h-3.5`,
                                }),
                                (0, P.jsx)(`span`, {
                                  children: `WhatsApp`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, P.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch`,
              children: [
                (0, P.jsx)(`div`, {
                  className: `lg:col-span-6`,
                  children: (0, P.jsx)(`div`, {
                    className: `h-full min-h-[340px] rounded-xl overflow-hidden border border-[#171613]/10 bg-[#171613]`,
                    children: (0, P.jsx)(SiteImage, {
                      src: photos.architecturalPlanning,
                      alt: `CREDCO architectural floor planning blueprints and stone material swatches`,
                      className: `w-full h-full object-cover`,
                    }),
                  }),
                }),
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-6 flex flex-col justify-center`,
                  children: [
                    (0, P.jsx)(`p`, {
                      className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-3`,
                      children: `About CREDCO`,
                    }),
                    (0, P.jsx)(`h2`, {
                      className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B] leading-tight`,
                      children: `Thoughtful Design Meets Disciplined Site Execution`,
                    }),
                    (0, P.jsx)(`p`, {
                      className: `mt-4 text-base text-[#171613]/80 leading-relaxed`,
                      children: `Great spaces begin long before construction starts. At CREDCO, architects, interior designers and civil engineers collaborate from day one—aligning floor plan efficiency, structural safety, 3D visual clarity and bespoke finishes into a seamless experience.`,
                    }),
                    (0, P.jsxs)(`ul`, {
                      className: `mt-6 space-y-3 text-sm text-[#171613]/85`,
                      children: [
                        (0, P.jsxs)(`li`, {
                          className: `flex items-start gap-2.5`,
                          children: [
                            (0, P.jsx)(tr, {
                              className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: `Single point of accountability from concept drawing to project handover.`,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`li`, {
                          className: `flex items-start gap-2.5`,
                          children: [
                            (0, P.jsx)(tr, {
                              className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: `Practical, spacious layouts with Vaastu-compliant planning where requested.`,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`li`, {
                          className: `flex items-start gap-2.5`,
                          children: [
                            (0, P.jsx)(tr, {
                              className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                            }),
                            (0, P.jsxs)(`span`, {
                              children: [
                                `Direct communication via phone and WhatsApp (`,
                                businessPhone,
                                `).`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `mt-8 flex flex-wrap gap-3`,
                      children: [
                        (0, P.jsxs)(k, {
                          to: `/about`,
                          className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0E0D0B] hover:bg-[#171613] text-[#FAF8F3] text-sm font-semibold transition-colors`,
                          children: [
                            (0, P.jsx)(`span`, {
                              children: `Read Our Story`,
                            }),
                            (0, P.jsx)(M, {
                              className: `w-4 h-4 text-[#C9A34A]`,
                            }),
                          ],
                        }),
                        (0, P.jsx)(k, {
                          to: `/consultation`,
                          className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#171613]/20 hover:border-[#C9A34A] text-[#0E0D0B] text-sm font-medium transition-colors`,
                          children: (0, P.jsx)(`span`, {
                            children: `Start Your Project`,
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#0E0D0B] text-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12`,
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `max-w-2xl`,
                    children: [
                      (0, P.jsx)(`p`, {
                        className: `text-xs font-medium uppercase tracking-[0.2em] text-[#C9A34A] mb-2`,
                        children: `Featured Portfolio Concepts`,
                      }),
                      (0, P.jsx)(`h2`, {
                        className: `font-display text-3xl sm:text-4xl font-semibold text-[#FAF8F3]`,
                        children: `Architectural & Interior Showcases`,
                      }),
                      (0, P.jsx)(`p`, {
                        className: `mt-3 text-sm text-[#E9DFD0]/70`,
                        children: `Sample demonstration concepts illustrating our residential, commercial, exterior and renovation design standards.`,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(k, {
                    to: `/projects`,
                    className: `inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C9A34A]/45 text-[#E7CC83] hover:bg-[#C9A34A]/10 text-sm font-medium transition-colors whitespace-nowrap shrink-0`,
                    children: [
                      (0, P.jsx)(`span`, {
                        children: `View All Projects`,
                      }),
                      (0, P.jsx)(M, {
                        className: `w-4 h-4`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `grid grid-cols-1 lg:grid-cols-12 gap-6`,
                children: [
                  (0, P.jsxs)(k, {
                    to: `/projects/${portfolioProjects[0].slug}`,
                    className: `lg:col-span-7 group relative rounded-xl overflow-hidden border border-[#FAF8F3]/12 min-h-[380px] flex items-end`,
                    children: [
                      (0, P.jsx)(SiteImage, {
                        src: portfolioProjects[0].image,
                        alt: portfolioProjects[0].title,
                        className: `absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700`,
                      }),
                      (0, P.jsx)(`div`, {
                        className: `absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/45 to-transparent`,
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `relative z-10 p-7 sm:p-9`,
                        children: [
                          (0, P.jsxs)(`p`, {
                            className: `text-xs text-[#E7CC83] font-medium`,
                            children: [
                              portfolioProjects[0].category,
                              ` · `,
                              portfolioProjects[0].statusLabel,
                            ],
                          }),
                          (0, P.jsx)(`h3`, {
                            className: `mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#FAF8F3]`,
                            children: portfolioProjects[0].title,
                          }),
                          (0, P.jsx)(`p`, {
                            className: `mt-2 text-sm text-[#E9DFD0]/85 max-w-xl`,
                            children: portfolioProjects[0].summary,
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsx)(`div`, {
                    className: `lg:col-span-5 grid grid-cols-1 gap-6`,
                    children: portfolioProjects.slice(1, 3).map((e) =>
                      (0, P.jsxs)(
                        k,
                        {
                          to: `/projects/${e.slug}`,
                          className: `group relative rounded-xl overflow-hidden border border-[#FAF8F3]/12 min-h-[210px] flex items-end`,
                          children: [
                            (0, P.jsx)(SiteImage, {
                              src: e.image,
                              alt: e.title,
                              className: `absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700`,
                            }),
                            (0, P.jsx)(`div`, {
                              className: `absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/55 to-transparent`,
                            }),
                            (0, P.jsxs)(`div`, {
                              className: `relative z-10 p-6`,
                              children: [
                                (0, P.jsxs)(`p`, {
                                  className: `text-xs text-[#E7CC83] font-medium`,
                                  children: [e.category, ` · `, e.statusLabel],
                                }),
                                (0, P.jsx)(`h3`, {
                                  className: `mt-1.5 font-display text-xl font-semibold text-[#FAF8F3]`,
                                  children: e.title,
                                }),
                              ],
                            }),
                          ],
                        },
                        e.slug,
                      ),
                    ),
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24 border-b border-[#171613]/10`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `max-w-2xl mb-12`,
                children: [
                  (0, P.jsx)(`p`, {
                    className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                    children: `Why Choose CREDCO`,
                  }),
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                    children: `Built on Engineering Discipline & Design Clarity`,
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10`,
                children: Cr.map((e) =>
                  (0, P.jsxs)(
                    `div`,
                    {
                      className: `pt-5 border-t border-[#171613]/15`,
                      children: [
                        (0, P.jsx)(`span`, {
                          className: `text-xs font-semibold tracking-widest text-[#C9A34A] tabular-nums`,
                          children: e.number,
                        }),
                        (0, P.jsx)(`h3`, {
                          className: `mt-2 font-display text-xl font-semibold text-[#0E0D0B]`,
                          children: e.title,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-2 text-sm text-[#171613]/75 leading-relaxed`,
                          children: e.description,
                        }),
                      ],
                    },
                    e.number,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#E9DFD0]/40 py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12`,
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `max-w-2xl`,
                    children: [
                      (0, P.jsx)(`p`, {
                        className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                        children: `Our Working Process`,
                      }),
                      (0, P.jsx)(`h2`, {
                        className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                        children: `Six Clear Stages From Vision to Handover`,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(k, {
                    to: `/process`,
                    className: `inline-flex items-center gap-2 text-sm font-semibold text-[#0E0D0B] hover:text-[#9A7A2C] transition-colors whitespace-nowrap`,
                    children: [
                      (0, P.jsx)(`span`, {
                        children: `View Detailed 8-Step Journey`,
                      }),
                      (0, P.jsx)(M, {
                        className: `w-4 h-4`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`,
                children: wr.map((e) =>
                  (0, P.jsxs)(
                    `div`,
                    {
                      className: `bg-[#FAF8F3] border border-[#171613]/10 rounded-xl p-7`,
                      children: [
                        (0, P.jsx)(`span`, {
                          className: `font-display text-3xl font-semibold text-[#C9A34A] tabular-nums`,
                          children: e.step,
                        }),
                        (0, P.jsx)(`h3`, {
                          className: `mt-3 font-display text-xl font-semibold text-[#0E0D0B]`,
                          children: e.title,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-2 text-sm text-[#171613]/75 leading-relaxed`,
                          children: e.description,
                        }),
                      ],
                    },
                    e.step,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#171613] text-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12`,
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `max-w-2xl`,
                    children: [
                      (0, P.jsx)(`p`, {
                        className: `text-xs font-medium uppercase tracking-[0.2em] text-[#C9A34A] mb-2`,
                        children: `Premium Interior Showcase`,
                      }),
                      (0, P.jsx)(`h2`, {
                        className: `font-display text-3xl sm:text-4xl font-semibold text-[#FAF8F3]`,
                        children: `Spaces Designed Around Comfort & Material Craft`,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(k, {
                    to: `/services/interior-design`,
                    className: `inline-flex items-center gap-2 text-sm font-semibold text-[#E7CC83] hover:underline whitespace-nowrap`,
                    children: [
                      (0, P.jsx)(`span`, {
                        children: `Explore Interior Design`,
                      }),
                      (0, P.jsx)(M, {
                        className: `w-4 h-4`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
                children: Er.map((e, t) =>
                  (0, P.jsxs)(
                    k,
                    {
                      to: e.route,
                      className: `group relative rounded-xl overflow-hidden border border-[#FAF8F3]/12 min-h-[300px] flex items-end ${t === 0 ? `lg:col-span-2 min-h-[340px]` : ``}`,
                      children: [
                        (0, P.jsx)(SiteImage, {
                          src: e.image,
                          alt: e.title,
                          className: `absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700`,
                        }),
                        (0, P.jsx)(`div`, {
                          className: `absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/40 to-transparent`,
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `relative z-10 p-6 sm:p-7`,
                          children: [
                            (0, P.jsx)(`p`, {
                              className: `text-xs text-[#E7CC83] font-medium`,
                              children: e.category,
                            }),
                            (0, P.jsx)(`h3`, {
                              className: `mt-1 font-display text-2xl font-semibold text-[#FAF8F3]`,
                              children: e.title,
                            }),
                            (0, P.jsx)(`p`, {
                              className: `mt-1.5 text-sm text-[#E9DFD0]/80`,
                              children: e.subtitle,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.title,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(oi, {}),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10`,
                children: [
                  (0, P.jsxs)(`div`, {
                    children: [
                      (0, P.jsx)(`p`, {
                        className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                        children: `Quick Answers`,
                      }),
                      (0, P.jsx)(`h2`, {
                        className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                        children: `Frequently Asked Questions`,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(k, {
                    to: `/faq`,
                    className: `inline-flex items-center gap-1.5 text-sm font-semibold text-[#8F6F24] hover:text-[#0E0D0B] whitespace-nowrap`,
                    children: [
                      (0, P.jsx)(`span`, {
                        children: `View All FAQs`,
                      }),
                      (0, P.jsx)(M, {
                        className: `w-4 h-4`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, P.jsx)(FaqAccordion, {
                items: frequentlyAskedQuestions.slice(0, 5),
              }),
            ],
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          headline: `Let's Build Something Extraordinary Together.`,
          serviceContext: `Complete Construction, Architecture & Interior Enquiry`,
        }),
      ],
    });
  },
  PageHero = ({
    title: e,
    subtitle: t,
    breadcrumbs: n,
    kicker: r,
    backgroundImage: i,
    action: a,
  }) =>
    (0, P.jsxs)(`section`, {
      className: `relative bg-[#0E0D0B] text-[#FAF8F3] overflow-hidden border-b border-[#C9A34A]/20`,
      children: [
        i &&
          (0, P.jsxs)(`div`, {
            className: `absolute inset-0 pointer-events-none`,
            children: [
              (0, P.jsx)(SiteImage, {
                src: i,
                alt: e,
                loading: `eager`,
                className: `w-full h-full object-cover opacity-30`,
              }),
              (0, P.jsx)(`div`, {
                className: `absolute inset-0 bg-gradient-to-t from-[#0E0D0B] via-[#0E0D0B]/80 to-[#0E0D0B]/65`,
              }),
            ],
          }),
        (0, P.jsxs)(`div`, {
          className: `relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-14 sm:pt-32 sm:pb-18`,
          children: [
            (0, P.jsx)(`nav`, {
              "aria-label": `Breadcrumb`,
              className: `mb-5`,
              children: (0, P.jsx)(`ol`, {
                className: `flex flex-wrap items-center gap-1.5 text-xs text-[#E9DFD0]/75`,
                children: n.map((e, t) => {
                  let r = t === n.length - 1;
                  return (0, P.jsxs)(
                    `li`,
                    {
                      className: `inline-flex items-center gap-1.5`,
                      children: [
                        e.to && !r
                          ? (0, P.jsx)(k, {
                              to: e.to,
                              className: `hover:text-[#E7CC83] transition-colors`,
                              children: e.label,
                            })
                          : (0, P.jsx)(`span`, {
                              className: r ? `text-[#E7CC83] font-medium` : ``,
                              children: e.label,
                            }),
                        !r &&
                          (0, P.jsx)($n, {
                            className: `w-3.5 h-3.5 text-[#C9A34A]/60`,
                            "aria-hidden": `true`,
                          }),
                      ],
                    },
                    e.label,
                  );
                }),
              }),
            }),
            (0, P.jsxs)(`div`, {
              className: `flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `max-w-3xl`,
                  children: [
                    r &&
                      (0, P.jsx)(`p`, {
                        className: `text-xs font-medium tracking-[0.2em] uppercase text-[#C9A34A] mb-3`,
                        children: r,
                      }),
                    (0, P.jsx)(`h1`, {
                      className: `font-display text-3xl sm:text-5xl font-semibold tracking-tight text-[#FAF8F3] leading-[1.12]`,
                      children: e,
                    }),
                    (0, P.jsx)(`p`, {
                      className: `mt-4 text-base sm:text-lg text-[#E9DFD0]/85 leading-relaxed max-w-2xl`,
                      children: t,
                    }),
                  ],
                }),
                a &&
                  (0, P.jsx)(`div`, {
                    className: `shrink-0`,
                    children: a,
                  }),
              ],
            }),
          ],
        }),
      ],
    }),
  AboutPage = () =>
    (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `About Us | CREDCO – Creative Design And Construction Pvt. Ltd.`,
          description: `Learn about CREDCO – Creative Design And Construction Pvt. Ltd., our vision, mission, design philosophy, commitment to quality, and integrated construction approach.`,
          canonicalPath: `/about`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Company Profile`,
          title: `About CREDCO`,
          subtitle: `Creative Design And Construction Pvt. Ltd. — uniting architectural clarity, structural reliability and thoughtful interior craft.`,
          backgroundImage: photos.heroResidence,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `About Us`,
            },
          ],
          action: (0, P.jsxs)(k, {
            to: `/consultation`,
            className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap`,
            children: [
              (0, P.jsx)(`span`, {
                children: `Start Your Project`,
              }),
              (0, P.jsx)(M, {
                className: `w-4 h-4`,
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, P.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-6 flex flex-col justify-center`,
                  children: [
                    (0, P.jsx)(`p`, {
                      className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-3`,
                      children: `Company Introduction`,
                    }),
                    (0, P.jsx)(`h2`, {
                      className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B] leading-tight`,
                      children: `Building Spaces With Integrity, Purpose & Lasting Value`,
                    }),
                    (0, P.jsxs)(`p`, {
                      className: `mt-5 text-base text-[#171613]/80 leading-relaxed`,
                      children: [
                        (0, P.jsx)(`strong`, {
                          children: `CREDCO – Creative Design And Construction Pvt. Ltd.`,
                        }),
                        ` was established with a clear purpose: to remove the friction between architectural imagination and on-site construction reality. Rather than separating planning, facade design, civil execution and interiors across disconnected vendors, CREDCO coordinates every discipline seamlessly.`,
                      ],
                    }),
                    (0, P.jsxs)(`p`, {
                      className: `mt-4 text-base text-[#171613]/80 leading-relaxed`,
                      children: [
                        `Guided by our tagline `,
                        (0, P.jsx)(`em`, {
                          children: `“Building Your Dream Life”`,
                        }),
                        `, we partner with homeowners, villa developers and commercial businesses to plan, visualize and construct spaces that age gracefully and serve daily life effortlessly.`,
                      ],
                    }),
                  ],
                }),
                (0, P.jsx)(`div`, {
                  className: `lg:col-span-6`,
                  children: (0, P.jsx)(`div`, {
                    className: `h-full min-h-[340px] rounded-xl overflow-hidden border border-[#171613]/10 bg-[#171613]`,
                    children: (0, P.jsx)(SiteImage, {
                      src: photos.construction,
                      alt: `CREDCO multi-story reinforced concrete construction and engineering supervision`,
                      className: `w-full h-full object-cover`,
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#0E0D0B] text-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `bg-[#171613] border border-[#C9A34A]/25 rounded-xl p-8 sm:p-10`,
                children: [
                  (0, P.jsx)(`p`, {
                    className: `text-xs font-medium uppercase tracking-[0.2em] text-[#C9A34A] mb-3`,
                    children: `Our Vision`,
                  }),
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl sm:text-3xl font-semibold text-[#FAF8F3]`,
                    children: `Setting a Benchmark for Integrated Design & Construction`,
                  }),
                  (0, P.jsx)(`p`, {
                    className: `mt-4 text-base text-[#E9DFD0]/80 leading-relaxed`,
                    children: `To be a trusted partner for modern residential and commercial spaces—known for transparent communication, architectural elegance, structural safety and spaces that genuinely enrich the lives of the people who inhabit them.`,
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `bg-[#171613] border border-[#C9A34A]/25 rounded-xl p-8 sm:p-10`,
                children: [
                  (0, P.jsx)(`p`, {
                    className: `text-xs font-medium uppercase tracking-[0.2em] text-[#C9A34A] mb-3`,
                    children: `Our Mission`,
                  }),
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl sm:text-3xl font-semibold text-[#FAF8F3]`,
                    children: `Your Dream. Our Design. Our Commitment.`,
                  }),
                  (0, P.jsx)(`p`, {
                    className: `mt-4 text-base text-[#E9DFD0]/80 leading-relaxed`,
                    children: `To deliver tailored architectural planning, 3D exterior visualization, dependable building construction and bespoke interior execution with disciplined project management, verified materials and on-schedule handovers.`,
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24 border-b border-[#171613]/10`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, P.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch`,
              children: [
                (0, P.jsx)(`div`, {
                  className: `lg:col-span-6`,
                  children: (0, P.jsx)(`div`, {
                    className: `h-full min-h-[340px] rounded-xl overflow-hidden border border-[#171613]/10 bg-[#171613]`,
                    children: (0, P.jsx)(SiteImage, {
                      src: photos.livingInterior,
                      alt: `Refined residential living interior showcasing material balance and daylight`,
                      className: `w-full h-full object-cover`,
                    }),
                  }),
                }),
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-6 flex flex-col justify-center space-y-8`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      children: [
                        (0, P.jsx)(`p`, {
                          className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                          children: `Our Design Philosophy`,
                        }),
                        (0, P.jsx)(`h2`, {
                          className: `font-display text-3xl font-semibold text-[#0E0D0B]`,
                          children: `Warmth, Proportion & Functional Clarity`,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-3 text-base text-[#171613]/80 leading-relaxed`,
                          children: `We believe luxury is measured in natural light, effortless room flow, acoustic calm and tactile material honesty—not excessive ornament. Every plan balances modern geometry with climate-responsive comfort and practical storage.`,
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `pt-6 border-t border-[#171613]/10`,
                      children: [
                        (0, P.jsx)(`p`, {
                          className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                          children: `Our Commitment to Quality`,
                        }),
                        (0, P.jsx)(`h3`, {
                          className: `font-display text-2xl font-semibold text-[#0E0D0B]`,
                          children: `Strength Beneath Every Surface`,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-3 text-sm sm:text-base text-[#171613]/80 leading-relaxed`,
                          children: `Finish quality only endures when the structural core, waterproofing, electrical conduits and plumbing lines beneath it are built properly. Our site supervision protocols prioritize durable materials and stage-by-stage verification.`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#E9DFD0]/40 py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `max-w-2xl mb-12`,
                children: [
                  (0, P.jsx)(`p`, {
                    className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                    children: `Why Clients Choose Us`,
                  }),
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                    children: `Our Approach to Every Project`,
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
                children: Cr.map((e) =>
                  (0, P.jsxs)(
                    `div`,
                    {
                      className: `bg-[#FAF8F3] border border-[#171613]/10 rounded-xl p-7`,
                      children: [
                        (0, P.jsx)(`span`, {
                          className: `text-xs font-semibold text-[#C9A34A] tabular-nums`,
                          children: e.number,
                        }),
                        (0, P.jsx)(`h3`, {
                          className: `mt-2 font-display text-xl font-semibold text-[#0E0D0B]`,
                          children: e.title,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-2 text-sm text-[#171613]/75 leading-relaxed`,
                          children: e.description,
                        }),
                      ],
                    },
                    e.number,
                  ),
                ),
              }),
              (0, P.jsxs)(`div`, {
                className: `mt-12 bg-[#FAF8F3] border border-[#171613]/10 rounded-xl p-8 flex flex-col md:flex-row md:items-center justify-between gap-6`,
                children: [
                  (0, P.jsxs)(`div`, {
                    children: [
                      (0, P.jsx)(`h3`, {
                        className: `font-display text-2xl font-semibold text-[#0E0D0B]`,
                        children: `Ready to Start Your Project?`,
                      }),
                      (0, P.jsxs)(`ul`, {
                        className: `mt-3 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#171613]/80`,
                        children: [
                          (0, P.jsxs)(`li`, {
                            className: `inline-flex items-center gap-1.5`,
                            children: [
                              (0, P.jsx)(Xn, {
                                className: `w-4 h-4 text-[#C9A34A]`,
                              }),
                              ` Clear Project Scope`,
                            ],
                          }),
                          (0, P.jsxs)(`li`, {
                            className: `inline-flex items-center gap-1.5`,
                            children: [
                              (0, P.jsx)(Xn, {
                                className: `w-4 h-4 text-[#C9A34A]`,
                              }),
                              ` Custom Floor & 3D Concepts`,
                            ],
                          }),
                          (0, P.jsxs)(`li`, {
                            className: `inline-flex items-center gap-1.5`,
                            children: [
                              (0, P.jsx)(Xn, {
                                className: `w-4 h-4 text-[#C9A34A]`,
                              }),
                              ` Direct WhatsApp Support`,
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `flex flex-wrap gap-3 shrink-0`,
                    children: [
                      (0, P.jsxs)(k, {
                        to: `/consultation`,
                        className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors`,
                        children: [
                          (0, P.jsx)(`span`, {
                            children: `Start Your Project`,
                          }),
                          (0, P.jsx)(M, {
                            className: `w-4 h-4`,
                          }),
                        ],
                      }),
                      (0, P.jsxs)(`a`, {
                        href: serviceEnquiryUrl(`Company & Project Discussion`),
                        target: `_blank`,
                        rel: `noopener noreferrer`,
                        className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-[#171613]/20 hover:border-[#C9A34A] text-[#0E0D0B] text-sm font-medium transition-colors`,
                        children: [
                          (0, P.jsx)(N, {
                            className: `w-4 h-4 text-[#9A7A2C]`,
                          }),
                          (0, P.jsx)(`span`, {
                            children: `WhatsApp Team`,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: `About CREDCO Enquiry`,
        }),
      ],
    }),
  ServicesPage = () =>
    (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Our Services | CREDCO – Construction, Interior & Architecture`,
          description: `Explore CREDCO's six core services: Building Construction, Interior Design, Exterior Design, Renovation & Remodeling, 3D Elevation, and Architectural Planning.`,
          canonicalPath: `/services`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Our Services`,
          title: `Complete Construction, Design & Planning Solutions`,
          subtitle: `Every service is engineered to integrate smoothly—so your floor plan, structural shell, facade elevation and interiors speak the same architectural language.`,
          backgroundImage: photos.heroVilla,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Our Services`,
            },
          ],
          action: (0, P.jsxs)(k, {
            to: `/consultation`,
            className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap`,
            children: [
              (0, P.jsx)(`span`, {
                children: `Get Free Consultation`,
              }),
              (0, P.jsx)(M, {
                className: `w-4 h-4`,
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12`,
            children: services.map((e, t) => {
              let n = t % 2 == 1;
              return (0, P.jsxs)(
                `article`,
                {
                  className: `bg-[#FAF8F3] border border-[#171613]/12 rounded-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch`,
                  children: [
                    (0, P.jsx)(`div`, {
                      className: `lg:col-span-6 min-h-[280px] bg-[#171613] overflow-hidden ${n ? `lg:order-2` : ``}`,
                      children: (0, P.jsx)(k, {
                        to: e.route,
                        className: `block w-full h-full`,
                        children: (0, P.jsx)(SiteImage, {
                          src: e.image,
                          alt: e.imageAlt,
                          className: `w-full h-full object-cover hover:scale-105 transition-transform duration-500`,
                        }),
                      }),
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `lg:col-span-6 p-7 sm:p-10 flex flex-col justify-center ${n ? `lg:order-1` : ``}`,
                      children: [
                        (0, P.jsxs)(`span`, {
                          className: `text-xs font-semibold tracking-widest text-[#C9A34A] tabular-nums`,
                          children: [e.number, `. Core Service`],
                        }),
                        (0, P.jsx)(`h2`, {
                          className: `mt-2 font-display text-3xl font-semibold text-[#0E0D0B]`,
                          children: (0, P.jsx)(k, {
                            to: e.route,
                            className: `hover:text-[#9A7A2C] transition-colors`,
                            children: e.title,
                          }),
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-2 text-sm font-medium text-[#8F6F24]`,
                          children: e.tagline,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-4 text-base text-[#171613]/80 leading-relaxed`,
                          children: e.shortDesc,
                        }),
                        (0, P.jsx)(`ul`, {
                          className: `mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5`,
                          children: e.highlights.map((e) =>
                            (0, P.jsxs)(
                              `li`,
                              {
                                className: `flex items-start gap-2 text-sm text-[#171613]/85`,
                                children: [
                                  (0, P.jsx)(Xn, {
                                    className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                                  }),
                                  (0, P.jsx)(`span`, {
                                    children: e,
                                  }),
                                ],
                              },
                              e,
                            ),
                          ),
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `mt-8 pt-5 border-t border-[#171613]/10 flex flex-wrap items-center gap-3.5`,
                          children: [
                            (0, P.jsxs)(k, {
                              to: e.route,
                              className: `inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#0E0D0B] hover:bg-[#171613] text-[#FAF8F3] text-sm font-semibold transition-colors`,
                              children: [
                                (0, P.jsxs)(`span`, {
                                  children: [`Explore `, e.title],
                                }),
                                (0, P.jsx)(M, {
                                  className: `w-4 h-4 text-[#C9A34A]`,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`a`, {
                              href: serviceEnquiryUrl(e.title),
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              className: `inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#C9A34A]/50 text-[#8F6F24] hover:bg-[#C9A34A]/10 text-sm font-semibold transition-colors`,
                              children: [
                                (0, P.jsx)(N, {
                                  className: `w-4 h-4`,
                                }),
                                (0, P.jsx)(`span`, {
                                  children: `Enquire on WhatsApp`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                e.id,
              );
            }),
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: `All Services Overview`,
        }),
      ],
    }),
  di = ({ items: e, currentIndex: t, onClose: n, onChangeIndex: r }) => {
    let i = t !== null && e[t] !== void 0,
      a = i ? e[t] : null;
    return (
      (0, _.useEffect)(() => {
        if (!i || t === null) return;
        let a = (i) => {
          (i.key === `Escape` && n(),
            i.key === `ArrowRight` && r((t + 1) % e.length),
            i.key === `ArrowLeft` && r((t - 1 + e.length) % e.length));
        };
        return (
          window.addEventListener(`keydown`, a),
          (document.body.style.overflow = `hidden`),
          () => {
            (window.removeEventListener(`keydown`, a),
              (document.body.style.overflow = ``));
          }
        );
      }, [i, t, e.length, n, r]),
      !i || !a || t === null
        ? null
        : (0, P.jsxs)(`div`, {
            role: `dialog`,
            "aria-modal": `true`,
            "aria-label": a.title,
            className: `fixed inset-0 z-50 bg-[#0E0D0B]/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8`,
            onClick: n,
            children: [
              (0, P.jsxs)(`div`, {
                className: `flex items-center justify-between gap-4 text-[#FAF8F3]`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `text-xs sm:text-sm text-[#E9DFD0]/80 tabular-nums`,
                    children: [
                      (0, P.jsx)(`span`, {
                        children: a.category,
                      }),
                      (0, P.jsx)(`span`, {
                        className: `mx-2 text-[#C9A34A]`,
                        "aria-hidden": `true`,
                        children: `·`,
                      }),
                      (0, P.jsxs)(`span`, {
                        children: [t + 1, ` / `, e.length],
                      }),
                    ],
                  }),
                  (0, P.jsx)(`button`, {
                    type: `button`,
                    onClick: n,
                    "aria-label": `Close image viewer`,
                    className: `w-11 h-11 rounded-full border border-[#FAF8F3]/20 flex items-center justify-center text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83] transition-colors`,
                    children: (0, P.jsx)(gr, {
                      className: `w-5 h-5`,
                    }),
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `relative flex-1 flex items-center justify-center my-4 min-h-0`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  e.length > 1 &&
                    (0, P.jsx)(`button`, {
                      type: `button`,
                      onClick: () => r((t - 1 + e.length) % e.length),
                      "aria-label": `Previous image`,
                      className: `absolute left-0 sm:left-4 z-10 w-11 h-11 rounded-full bg-[#171613]/85 border border-[#FAF8F3]/20 text-[#FAF8F3] flex items-center justify-center hover:border-[#C9A34A] hover:text-[#E7CC83] transition-colors`,
                      children: (0, P.jsx)(Qn, {
                        className: `w-5 h-5`,
                      }),
                    }),
                  (0, P.jsx)(`div`, {
                    className: `max-w-5xl max-h-[70vh] w-full h-full flex items-center justify-center`,
                    children: (0, P.jsx)(SiteImage, {
                      src: a.image,
                      alt: a.title,
                      loading: `eager`,
                      className: `max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl`,
                    }),
                  }),
                  e.length > 1 &&
                    (0, P.jsx)(`button`, {
                      type: `button`,
                      onClick: () => r((t + 1) % e.length),
                      "aria-label": `Next image`,
                      className: `absolute right-0 sm:right-4 z-10 w-11 h-11 rounded-full bg-[#171613]/85 border border-[#FAF8F3]/20 text-[#FAF8F3] flex items-center justify-center hover:border-[#C9A34A] hover:text-[#E7CC83] transition-colors`,
                      children: (0, P.jsx)($n, {
                        className: `w-5 h-5`,
                      }),
                    }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                className: `max-w-5xl w-full mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-t border-[#FAF8F3]/12 pt-4`,
                onClick: (e) => e.stopPropagation(),
                children: [
                  (0, P.jsxs)(`div`, {
                    children: [
                      (0, P.jsx)(`h3`, {
                        className: `font-display text-lg sm:text-xl font-semibold text-[#FAF8F3]`,
                        children: a.title,
                      }),
                      a.caption &&
                        (0, P.jsx)(`p`, {
                          className: `text-xs sm:text-sm text-[#E9DFD0]/80 mt-1`,
                          children: a.caption,
                        }),
                    ],
                  }),
                  (0, P.jsxs)(`a`, {
                    href: serviceEnquiryUrl(a.category, a.title),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-[#C9A34A] text-[#0E0D0B] text-sm font-semibold hover:bg-[#E7CC83] transition-colors whitespace-nowrap shrink-0`,
                    children: [
                      (0, P.jsx)(N, {
                        className: `w-4 h-4`,
                      }),
                      (0, P.jsx)(`span`, {
                        children: `Discuss Similar Design`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
    );
  },
  fi = ({
    seoTitle: e,
    seoDescription: t,
    canonicalPath: n,
    serviceName: r,
    kicker: i,
    heroTitle: a,
    heroSubtitle: o,
    heroImage: s,
    introHeading: c,
    introParagraphs: l,
    introImage: u,
    introImageAlt: d,
    keyChecklist: f,
    capabilitiesHeading: p,
    capabilities: m,
    specialSectionTitle: h,
    specialSectionSubtitle: g,
    specialHighlightCards: v,
    galleryTitle: y,
    galleryItems: b,
    faqs: ee,
    ctaLabel: te,
    ctaHeadline: ne,
  }) => {
    let [x, S] = (0, _.useState)(null);
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: e,
          description: t,
          canonicalPath: n,
        }),
        (0, P.jsx)(PageHero, {
          title: a,
          subtitle: o,
          kicker: i,
          backgroundImage: s,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Services`,
              to: `/services`,
            },
            {
              label: r,
            },
          ],
          action: (0, P.jsxs)(`div`, {
            className: `flex flex-col sm:flex-row gap-3`,
            children: [
              (0, P.jsxs)(`a`, {
                href: serviceEnquiryUrl(r),
                target: `_blank`,
                rel: `noopener noreferrer`,
                className: `inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap`,
                children: [
                  (0, P.jsx)(N, {
                    className: `w-4 h-4`,
                  }),
                  (0, P.jsx)(`span`, {
                    children: te,
                  }),
                ],
              }),
              (0, P.jsxs)(k, {
                to: `/consultation`,
                className: `inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] text-sm font-medium transition-colors whitespace-nowrap`,
                children: [
                  (0, P.jsx)(`span`, {
                    children: `Request Quote`,
                  }),
                  (0, P.jsx)(M, {
                    className: `w-4 h-4`,
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, P.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-6 flex flex-col justify-center`,
                  children: [
                    (0, P.jsx)(`p`, {
                      className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-3`,
                      children: r,
                    }),
                    (0, P.jsx)(`h2`, {
                      className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B] leading-tight`,
                      children: c,
                    }),
                    (0, P.jsx)(`div`, {
                      className: `mt-5 space-y-4 text-base text-[#171613]/80 leading-relaxed`,
                      children: l.map((e, t) =>
                        (0, P.jsx)(
                          `p`,
                          {
                            children: e,
                          },
                          t,
                        ),
                      ),
                    }),
                    (0, P.jsx)(`ul`, {
                      className: `mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-[#171613]/10`,
                      children: f.map((e) =>
                        (0, P.jsxs)(
                          `li`,
                          {
                            className: `flex items-start gap-2.5 text-sm font-medium text-[#171613]`,
                            children: [
                              (0, P.jsx)(Xn, {
                                className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                              }),
                              (0, P.jsx)(`span`, {
                                children: e,
                              }),
                            ],
                          },
                          e,
                        ),
                      ),
                    }),
                  ],
                }),
                (0, P.jsx)(`div`, {
                  className: `lg:col-span-6`,
                  children: (0, P.jsx)(`div`, {
                    className: `h-full min-h-[320px] rounded-xl overflow-hidden border border-[#171613]/10 bg-[#171613]`,
                    children: (0, P.jsx)(SiteImage, {
                      src: u,
                      alt: d,
                      className: `w-full h-full object-cover`,
                    }),
                  }),
                }),
              ],
            }),
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#E9DFD0]/45 py-16 sm:py-24 border-y border-[#171613]/10`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `max-w-2xl mb-12`,
                children: [
                  (0, P.jsx)(`p`, {
                    className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                    children: `Scope of Work`,
                  }),
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                    children: p,
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`,
                children: m.map((e) =>
                  (0, P.jsxs)(
                    `div`,
                    {
                      className: `bg-[#FAF8F3] border border-[#171613]/10 rounded-xl p-7 flex flex-col justify-between hover:border-[#C9A34A]/60 transition-colors`,
                      children: [
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsx)(`span`, {
                              className: `text-xs font-semibold tracking-widest text-[#C9A34A] tabular-nums`,
                              children: e.number,
                            }),
                            (0, P.jsx)(`h3`, {
                              className: `mt-2 font-display text-xl font-semibold text-[#0E0D0B]`,
                              children: e.title,
                            }),
                            (0, P.jsx)(`p`, {
                              className: `mt-3 text-sm text-[#171613]/75 leading-relaxed`,
                              children: e.description,
                            }),
                          ],
                        }),
                        (0, P.jsx)(`div`, {
                          className: `mt-6 pt-4 border-t border-[#171613]/8`,
                          children: (0, P.jsxs)(`a`, {
                            href: serviceEnquiryUrl(`${r} – ${e.title}`),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F6F24] hover:text-[#0E0D0B] transition-colors`,
                            children: [
                              (0, P.jsx)(N, {
                                className: `w-3.5 h-3.5`,
                              }),
                              (0, P.jsx)(`span`, {
                                children: `Enquire on WhatsApp`,
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    e.number,
                  ),
                ),
              }),
            ],
          }),
        }),
        v &&
          v.length > 0 &&
          (0, P.jsx)(`section`, {
            className: `bg-[#0E0D0B] text-[#FAF8F3] py-16 sm:py-24`,
            children: (0, P.jsxs)(`div`, {
              className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      className: `max-w-2xl`,
                      children: [
                        (0, P.jsx)(`p`, {
                          className: `text-xs font-medium uppercase tracking-[0.2em] text-[#C9A34A] mb-2`,
                          children: `Design Focus`,
                        }),
                        (0, P.jsx)(`h2`, {
                          className: `font-display text-3xl sm:text-4xl font-semibold text-[#FAF8F3]`,
                          children: h,
                        }),
                        g &&
                          (0, P.jsx)(`p`, {
                            className: `mt-3 text-sm sm:text-base text-[#E9DFD0]/75 leading-relaxed`,
                            children: g,
                          }),
                      ],
                    }),
                    (0, P.jsxs)(k, {
                      to: `/consultation`,
                      className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] text-[#0E0D0B] text-sm font-semibold hover:bg-[#E7CC83] transition-colors whitespace-nowrap shrink-0`,
                      children: [
                        (0, P.jsx)(`span`, {
                          children: te,
                        }),
                        (0, P.jsx)(M, {
                          className: `w-4 h-4`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, P.jsx)(`div`, {
                  className: `grid grid-cols-1 md:grid-cols-3 gap-6`,
                  children: v.map((e) =>
                    (0, P.jsxs)(
                      `div`,
                      {
                        className: `bg-[#171613] border border-[#FAF8F3]/10 rounded-xl overflow-hidden group`,
                        children: [
                          (0, P.jsx)(`div`, {
                            className: `aspect-[4/3] overflow-hidden`,
                            children: (0, P.jsx)(SiteImage, {
                              src: e.image,
                              alt: e.title,
                              className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
                            }),
                          }),
                          (0, P.jsxs)(`div`, {
                            className: `p-6`,
                            children: [
                              (0, P.jsx)(`h3`, {
                                className: `font-display text-xl font-semibold text-[#FAF8F3]`,
                                children: e.title,
                              }),
                              (0, P.jsx)(`p`, {
                                className: `mt-2 text-sm text-[#E9DFD0]/75 leading-relaxed`,
                                children: e.detail,
                              }),
                            ],
                          }),
                        ],
                      },
                      e.title,
                    ),
                  ),
                }),
              ],
            }),
          }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10`,
                children: [
                  (0, P.jsxs)(`div`, {
                    children: [
                      (0, P.jsx)(`p`, {
                        className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                        children: `Visual Reference`,
                      }),
                      (0, P.jsx)(`h2`, {
                        className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                        children: y,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(k, {
                    to: `/gallery`,
                    className: `inline-flex items-center gap-1.5 text-sm font-semibold text-[#8F6F24] hover:text-[#0E0D0B]`,
                    children: [
                      (0, P.jsx)(`span`, {
                        children: `Open Full Gallery`,
                      }),
                      (0, P.jsx)(M, {
                        className: `w-4 h-4`,
                      }),
                    ],
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`,
                children: b.map((e, t) =>
                  (0, P.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => S(t),
                      className: `group text-left rounded-xl overflow-hidden border border-[#171613]/10 bg-[#171613] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A34A]`,
                      children: [
                        (0, P.jsx)(`div`, {
                          className: `aspect-[4/3] overflow-hidden`,
                          children: (0, P.jsx)(SiteImage, {
                            src: e.image,
                            alt: e.title,
                            className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
                          }),
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `p-4 bg-[#FAF8F3]`,
                          children: [
                            (0, P.jsx)(`p`, {
                              className: `text-xs text-[#9A7A2C] font-medium`,
                              children: e.category,
                            }),
                            (0, P.jsx)(`p`, {
                              className: `mt-1 font-display text-lg font-semibold text-[#0E0D0B]`,
                              children: e.title,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
        }),
        ee.length > 0 &&
          (0, P.jsx)(`section`, {
            className: `bg-[#E9DFD0]/35 py-16 sm:py-20 border-t border-[#171613]/10`,
            children: (0, P.jsxs)(`div`, {
              className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `mb-10`,
                  children: [
                    (0, P.jsx)(`p`, {
                      className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                      children: `Frequently Asked Questions`,
                    }),
                    (0, P.jsxs)(`h2`, {
                      className: `font-display text-3xl font-semibold text-[#0E0D0B]`,
                      children: [`Questions About `, r],
                    }),
                  ],
                }),
                (0, P.jsx)(FaqAccordion, {
                  items: ee,
                }),
              ],
            }),
          }),
        (0, P.jsx)(ConsultationBanner, {
          headline: ne,
          serviceContext: r,
        }),
        (0, P.jsx)(di, {
          items: b,
          currentIndex: x,
          onClose: () => S(null),
          onChangeIndex: S,
        }),
      ],
    });
  },
  BuildingConstructionPage = () =>
    (0, P.jsx)(fi, {
      seoTitle: `Building Construction Services | CREDCO – Residential & Commercial`,
      seoDescription: `CREDCO delivers turnkey residential and commercial building construction with structural planning, quality materials, site management, and timely execution.`,
      canonicalPath: `/services/building-construction`,
      serviceName: `Building Construction`,
      kicker: `Construction · Structural Execution`,
      heroTitle: `Building Construction Built for Generations`,
      heroSubtitle: `Strong structures, superior materials and disciplined engineering supervision—from initial excavation and RCC framework to final architectural finishing.`,
      heroImage: photos.construction,
      introHeading: `From Foundation to Finishing, Executed With Care`,
      introParagraphs: [
        `Every lasting building depends on the precision of its structural core and the integrity of daily site supervision. At CREDCO – Creative Design And Construction Pvt. Ltd., we execute residential homes, independent villas, commercial complexes and institutional spaces under structured engineering protocols.`,
        `By coordinating architectural drawings, structural planning, material procurement and stage-wise inspections under one team, we protect structural longevity and maintain predictable timelines.`,
      ],
      introImage: photos.heroResidence,
      introImageAlt: `Completed contemporary residential building construction`,
      keyChecklist: [
        `Residential & Villa Construction`,
        `Commercial Complexes & Workspaces`,
        `End-to-End Structural Planning`,
        `Grade-Verified Cement & Steel`,
        `Transparent Milestone Tracking`,
        `Dedicated Site Supervision`,
      ],
      capabilitiesHeading: `Complete Construction Capabilities`,
      capabilities: [
        {
          number: `01`,
          title: `Residential Construction`,
          description: `Custom independent homes, duplexes and luxury villas executed with careful structural curing, waterproofing and refined finishes.`,
        },
        {
          number: `02`,
          title: `Commercial Construction`,
          description: `Showrooms, corporate offices, hospitals, educational buildings and multi-use commercial structures built for high durability.`,
        },
        {
          number: `03`,
          title: `New Building Construction`,
          description: `Turnkey execution from site clearing, foundation excavation and plinth beams through superstructure and MEP integration.`,
        },
        {
          number: `04`,
          title: `Structural Planning`,
          description: `Balanced column-beam grid alignment and reinforcement detailing coordinated closely with architectural floor layouts.`,
        },
        {
          number: `05`,
          title: `Construction Management`,
          description: `Scheduled labor deployment, contractor coordination, daily site logs and transparent client progress walkthroughs.`,
        },
        {
          number: `06`,
          title: `Quality Materials & Execution`,
          description: `Strict quality checks on steel reinforcement, concrete mix proportions, masonry plumbing, waterproofing and surface plastering.`,
        },
      ],
      specialSectionTitle: `How Our Construction Process Stays On Schedule`,
      specialSectionSubtitle: `We construct residential, commercial and institutional buildings through transparent stage gates.`,
      specialHighlightCards: [
        {
          title: `Substructure & RCC Frame`,
          detail: `Accurate layout marking, footing excavation, bar-bending verification and disciplined slab curing cycles.`,
          image: photos.construction,
        },
        {
          title: `Masonry, MEP & Waterproofing`,
          detail: `Plumb brickwork, concealed electrical and plumbing pressure testing, plus multi-coat terrace and wet-area waterproofing.`,
          image: photos.architecturalPlanning,
        },
        {
          title: `Facade & Final Handover`,
          detail: `Exterior cladding, window glazing, interior finishes and thorough pre-handover snag inspection.`,
          image: photos.heroVilla,
        },
      ],
      galleryTitle: `Construction & Completed Structure Highlights`,
      galleryItems: [
        {
          id: `bc-1`,
          title: `Multi-Story RCC Frame Execution`,
          category: `Building Construction`,
          image: photos.construction,
          caption: `Active multi-level structural construction with site engineering oversight.`,
        },
        {
          id: `bc-2`,
          title: `Cantilevered Contemporary Residence`,
          category: `Residential Construction`,
          image: photos.heroResidence,
          caption: `Finished concrete and timber residential showcase demonstrating structural precision.`,
        },
        {
          id: `bc-3`,
          title: `Modern Villa Structural Envelope`,
          category: `Villa Construction`,
          image: photos.heroVilla,
          caption: `Travertine stone facade and deep cantilevered roof slabs.`,
        },
      ],
      faqs: frequentlyAskedQuestions.filter(
        (e) =>
          e.category === `Construction Services` ||
          e.category === `Consultation, Budget & Timeline`,
      ),
      ctaLabel: `Request Construction Consultation`,
      ctaHeadline: `Planning a New Residential or Commercial Build?`,
    }),
  InteriorDesignPage = () =>
    (0, P.jsx)(fi, {
      seoTitle: `Interior Design Company | CREDCO – Luxury Home & Office Interiors`,
      seoDescription: `Transform your space with CREDCO interior design: luxury bedrooms, modern living rooms, modular kitchens, dining spaces, apartments, and executive offices.`,
      canonicalPath: `/services/interior-design`,
      serviceName: `Interior Design`,
      kicker: `Interior Design · Bespoke Spaces`,
      heroTitle: `Transform Your Space With Expert Interior Design`,
      heroSubtitle: `From concept to completion, we design, craft and deliver functional, timeless interiors that reflect your lifestyle and daily rhythm.`,
      heroImage: photos.heroBedroom,
      introHeading: `Interiors Balanced Between Beauty & Everyday Utility`,
      introParagraphs: [
        `Great interior design goes far beyond surface styling. At CREDCO, we begin with space optimization, circulation flow, natural daylight and concealed storage—ensuring every square foot works intelligently before layering warm materials and lighting.`,
        `Whether designing an apartment, an independent villa or a modern corporate office, our team oversees custom carpentry, modular kitchens, false ceilings, lighting design and curated furniture placement.`,
      ],
      introImage: photos.livingInterior,
      introImageAlt: `Luxury contemporary living room interior with curved sofa and walnut paneling`,
      keyChecklist: [
        `Luxury Home & Apartment Interiors`,
        `Master & Guest Bedroom Design`,
        `Modern Living & Dining Rooms`,
        `Bespoke Modular Kitchens`,
        `Executive Office Interiors`,
        `Lighting & Custom Millwork`,
      ],
      capabilitiesHeading: `Specialized Interior Design Services`,
      capabilities: [
        {
          number: `01`,
          title: `Bedroom Interior Design`,
          description: `Calm, restorative suites with fluted accent walls, upholstered headboards, walk-in wardrobes and soft indirect lighting.`,
        },
        {
          number: `02`,
          title: `Living Room & Dining Design`,
          description: `Inviting social spaces balancing plush seating, stone coffee tables, feature media walls and sculptural dining lighting.`,
        },
        {
          number: `03`,
          title: `Modular Kitchen Design`,
          description: `Ergonomic L-shaped, U-shaped and island kitchens crafted with moisture-resistant boards, soft-close hardware and stone counters.`,
        },
        {
          number: `04`,
          title: `Apartment & Luxury Home Interiors`,
          description: `End-to-end turnkey interior packages tailored to 2BHK, 3BHK, penthouses and independent multi-level homes.`,
        },
        {
          number: `05`,
          title: `Office Interior Design`,
          description: `Productive commercial workspaces featuring reception desks, acoustic wood paneling, glass meeting rooms and ergonomic zoning.`,
        },
        {
          number: `06`,
          title: `Space, Lighting & Decor Planning`,
          description: `Intelligent storage niches, layered ambient/task lighting scenes and harmonious furniture, rug and drapery curation.`,
        },
      ],
      specialSectionTitle: `Transform Your Space With Expert Interior Design`,
      specialSectionSubtitle: `Explore key interior environments tailored for comfort, warmth and timeless materiality.`,
      specialHighlightCards: [
        {
          title: `Master Suites & Wardrobes`,
          detail: `Fluted dark timber, warm recessed cove illumination and tailored bedside joinery.`,
          image: photos.heroBedroom,
        },
        {
          title: `Modular Kitchens & Islands`,
          detail: `Matte handleless cabinetry paired with veined marble waterfall counters and brass accents.`,
          image: photos.modularKitchen,
        },
        {
          title: `Executive & Commercial Offices`,
          detail: `Monolithic stone receptions and acoustic glass boardrooms designed for focus and hospitality.`,
          image: photos.officeInterior,
        },
      ],
      galleryTitle: `Luxury Interior Design Gallery`,
      galleryItems: [
        {
          id: `id-1`,
          title: `Fluted Charcoal Bedroom Suite`,
          category: `Luxury Bedrooms`,
          image: photos.heroBedroom,
          caption: `Bespoke bedroom featuring vertical wood fluting and warm brass globe pendants.`,
        },
        {
          id: `id-2`,
          title: `Walnut & Bouclé Living Lounge`,
          category: `Modern Living Rooms`,
          image: photos.livingInterior,
          caption: `Sunlit living space anchored by travertine surfaces and warm oak floors.`,
        },
        {
          id: `id-3`,
          title: `Matte Charcoal Waterfall Kitchen`,
          category: `Modular Kitchens`,
          image: photos.modularKitchen,
          caption: `High-function modular kitchen island with integrated lighting and brass fixtures.`,
        },
        {
          id: `id-4`,
          title: `Fluted Glass Dining Space`,
          category: `Dining Interiors`,
          image: photos.renovationDining,
          caption: `Refined dining room with herringbone parquetry and sculptural lighting.`,
        },
        {
          id: `id-5`,
          title: `Corporate Executive Suite`,
          category: `Office Interiors`,
          image: photos.officeInterior,
          caption: `Modern workspace blending monolithic stone and acoustic walnut slats.`,
        },
      ],
      faqs: frequentlyAskedQuestions.filter(
        (e) =>
          e.category === `Interior Design` ||
          e.category === `Consultation, Budget & Timeline`,
      ),
      ctaLabel: `Discuss Your Interior Project`,
      ctaHeadline: `Ready to Transform Your Home or Office Interior?`,
    }),
  ExteriorDesignPage = () =>
    (0, P.jsx)(fi, {
      seoTitle: `Modern Exterior Design & Facade Architecture | CREDCO`,
      seoDescription: `Contemporary house exterior design, residential facades, luxury villa exteriors, front elevation planning, color palettes, and outdoor spaces by CREDCO.`,
      canonicalPath: `/services/exterior-design`,
      serviceName: `Exterior Design`,
      kicker: `Exterior Design · Facade Architecture`,
      heroTitle: `Contemporary Exterior & Facade Design`,
      heroSubtitle: `Architectural facades, luxury villa elevations, weather-smart cladding palettes and serene outdoor living environments that command lasting presence.`,
      heroImage: photos.heroVilla,
      introHeading: `First Impressions Shaped by Proportion, Light & Material`,
      introParagraphs: [
        `A building’s exterior expresses its architectural character to the neighborhood while shielding interiors from sun, rain and heat. At CREDCO, we craft modern house exteriors and residential facades where cantilevered projections, louvers, stone cladding and glazing work together naturally.`,
        `Whether designing a brand-new luxury villa exterior or refreshing an existing residence facade, our exterior palettes prioritize low maintenance and enduring elegance over fleeting trends.`,
      ],
      introImage: photos.elevation3d,
      introImageAlt: `Modern residential exterior facade with wood louvers and architectural lighting`,
      keyChecklist: [
        `Modern House Exterior Concepts`,
        `Residential & Commercial Facades`,
        `Luxury Villa Architecture`,
        `Front Elevation Detailing`,
        `Exterior Color & Texture Planning`,
        `Courtyard & Outdoor Space Design`,
      ],
      capabilitiesHeading: `Exterior Design Capabilities`,
      capabilities: [
        {
          number: `01`,
          title: `Modern House Exterior`,
          description: `Clean geometric massing, recessed balconies and balanced window proportions suited to contemporary urban and suburban plots.`,
        },
        {
          number: `02`,
          title: `Residential Facade Design`,
          description: `Coordinated facade composition incorporating natural stone, architectural louvers, metal framing and textured plaster.`,
        },
        {
          number: `03`,
          title: `Luxury Villa Design`,
          description: `Expansive indoor-outdoor villa elevations featuring double-height glazing, timber soffits and landscaped approach paths.`,
        },
        {
          number: `04`,
          title: `Front Elevation Design`,
          description: `Street-facing architectural compositions integrating compound walls, entrance gates, porch canopies and balcony railings.`,
        },
        {
          number: `05`,
          title: `Exterior Color & Material Planning`,
          description: `Curated charcoal, warm beige, ivory and natural timber material pairings tested for daylight and evening lighting.`,
        },
        {
          number: `06`,
          title: `Outdoor Space & Landscape Framing`,
          description: `Terrace seating decks, courtyard water features, step lighting and planted perimeter buffers.`,
        },
      ],
      specialSectionTitle: `Key Elements of a Timeless Exterior`,
      specialSectionSubtitle: `Every exterior detail balances visual strength with climatic durability.`,
      specialHighlightCards: [
        {
          title: `Natural Stone & Timber Contrast`,
          detail: `Pairing travertine or slate stone with warm wood-tone louvers softens bold modernist concrete lines.`,
          image: photos.heroVilla,
        },
        {
          title: `Cantilevered Shade & Glazing`,
          detail: `Deep architectural overhangs reduce solar glare while allowing expansive corner glass views.`,
          image: photos.heroResidence,
        },
        {
          title: `Evening Facade Illumination`,
          detail: `Warm recessed soffit, wall-washer and pathway lights bring architectural volumes to life after dusk.`,
          image: photos.elevation3d,
        },
      ],
      galleryTitle: `Modern Exterior & Villa Showcase`,
      galleryItems: [
        {
          id: `ed-1`,
          title: `Travertine & Timber Modern Villa`,
          category: `Modern Villas`,
          image: photos.heroVilla,
          caption: `Golden hour villa exterior showcasing travertine masonry and glass terraces.`,
        },
        {
          id: `ed-2`,
          title: `Cantilevered Twilight Residence`,
          category: `Building Exteriors`,
          image: photos.heroResidence,
          caption: `Modernist residential facade anchored by teak cladding and courtyard reflections.`,
        },
        {
          id: `ed-3`,
          title: `Three-Story Urban Facade Study`,
          category: `Front Elevation`,
          image: photos.elevation3d,
          caption: `Asymmetric charcoal and cedar louver front elevation with boundary detailing.`,
        },
      ],
      faqs: frequentlyAskedQuestions.filter(
        (e) =>
          e.category === `Exterior & 3D Elevation` ||
          e.category === `Consultation, Budget & Timeline`,
      ),
      ctaLabel: `Discuss Exterior Design`,
      ctaHeadline: `Elevate Your Home's Architectural Presence`,
    }),
  RenovationPage = () =>
    (0, P.jsx)(fi, {
      seoTitle: `Home Renovation & Remodeling Services | CREDCO`,
      seoDescription: `Complete home renovation, modular kitchen remodeling, bathroom upgrades, living space transformations, and commercial remodeling by CREDCO.`,
      canonicalPath: `/services/renovation-remodeling`,
      serviceName: `Renovation & Remodeling`,
      kicker: `Renovation · Spatial Upgrades`,
      heroTitle: `Upgrade, Redesign & Add New Life to Your Space`,
      heroSubtitle: `Thoughtful structural reconfiguration, kitchen and bathroom remodeling, and complete residential or commercial transformations executed with minimal disruption.`,
      heroImage: photos.renovationDining,
      introHeading: `Precision Remodeling That Honors Existing Structure`,
      introParagraphs: [
        `Whether updating an aging family residence, reconfiguring dark partitioned rooms into open sunlit living zones, or modernizing a commercial office, CREDCO brings disciplined planning to every renovation project.`,
        `We inspect existing plumbing, electrical load capacity and load-bearing walls before proposing layout enhancements—delivering a refreshed space that feels newly built inside and out.`,
      ],
      introImage: photos.modularKitchen,
      introImageAlt: `Modernized luxury kitchen with marble island and matte charcoal cabinetry`,
      keyChecklist: [
        `Complete Home Renovation`,
        `Modular Kitchen Remodeling`,
        `Bathroom Waterproofing & Upgrades`,
        `Living & Dining Reconfiguration`,
        `Commercial & Office Remodeling`,
        `Electrical, Plumbing & Flooring Renewal`,
      ],
      capabilitiesHeading: `Renovation & Remodeling Solutions`,
      capabilities: [
        {
          number: `01`,
          title: `Complete Home Renovation`,
          description: `Full-home revitalization covering layout changes, flooring replacement, false ceilings, joinery and fresh architectural lighting.`,
        },
        {
          number: `02`,
          title: `Kitchen Remodeling`,
          description: `Transforming dated kitchens into efficient modular workspaces with new stone counters, appliances and smart storage.`,
        },
        {
          number: `03`,
          title: `Bathroom Remodeling`,
          description: `Upgrading waterproofing, concealed diverters, anti-skid stone tiles, vanity storage and warm mirror lighting.`,
        },
        {
          number: `04`,
          title: `Living Space Renovation`,
          description: `Opening non-structural walls, introducing fluted glass dividers, refinishing floors and crafting feature TV or lounge walls.`,
        },
        {
          number: `05`,
          title: `Residential & Exterior Facade Upgrades`,
          description: `Refreshing exterior plaster, adding modern pergolas, replacing aging windows and upgrading balcony railings.`,
        },
        {
          number: `06`,
          title: `Commercial Renovation`,
          description: `Fast-turnaround refurbishments for offices, retail studios and hospitality spaces aligned to modern brand standards.`,
        },
      ],
      specialSectionTitle: `Before & After Transformation Approach`,
      specialSectionSubtitle: `How CREDCO turns dated layouts into bright, contemporary environments.`,
      specialHighlightCards: [
        {
          title: `Partition & Flow Opening`,
          detail: `Replacing cramped walls with fluted glass partitions invites natural daylight deep into dining and living areas.`,
          image: photos.renovationDining,
        },
        {
          title: `Kitchen & Island Modernization`,
          detail: `Upgrading cluttered counters to streamlined matte cabinetry and durable veined marble islands.`,
          image: photos.modularKitchen,
        },
        {
          title: `Bedroom & Acoustic Renewal`,
          detail: `Adding fluted timber wall cladding, wardrobe niches and concealed warm lighting without changing the footprint.`,
          image: photos.heroBedroom,
        },
      ],
      galleryTitle: `Renovation & Transformation Gallery`,
      galleryItems: [
        {
          id: `rn-1`,
          title: `Open-Plan Dining Transformation`,
          category: `Renovation Ideas`,
          image: photos.renovationDining,
          caption: `Refurbished dining area featuring herringbone oak floors and a fluted glass divider.`,
        },
        {
          id: `rn-2`,
          title: `Modernized Waterfall Kitchen`,
          category: `Kitchen Remodeling`,
          image: photos.modularKitchen,
          caption: `Complete kitchen upgrade combining matte cabinetry with brass hardware.`,
        },
        {
          id: `rn-3`,
          title: `Refined Executive Office Remodel`,
          category: `Commercial Renovation`,
          image: photos.officeInterior,
          caption: `Transformed workspace with acoustic glass boardroom and marble reception.`,
        },
      ],
      faqs: frequentlyAskedQuestions.filter(
        (e) =>
          e.category === `Renovation` ||
          e.category === `Consultation, Budget & Timeline`,
      ),
      ctaLabel: `Plan Your Renovation`,
      ctaHeadline: `Ready to Modernize Your Existing Space?`,
    }),
  ElevationPage = () =>
    (0, P.jsx)(fi, {
      seoTitle: `3D Elevation Design & Architectural Visualization | CREDCO`,
      seoDescription: `Photorealistic 3D front elevations, modern house elevations, exterior renderings, and architectural visualization before construction by CREDCO.`,
      canonicalPath: `/services/3d-elevation`,
      serviceName: `3D Elevation`,
      kicker: `3D Elevation · Architectural Visualization`,
      heroTitle: `Realistic 3D Views Before Construction Begins`,
      heroSubtitle: `Preview your home's proportions, cladding textures, balcony louvers and evening illumination with crisp photorealistic 3D elevation renderings.`,
      heroImage: photos.elevation3d,
      introHeading: `Decide Every Exterior Detail With Visual Certainty`,
      introParagraphs: [
        `Making facade changes after concrete columns and brickwork are cast is expensive and stressful. CREDCO’s 3D Elevation Design service translates your 2D floor plans into lifelike architectural visuals so you can evaluate massing, material contrasts and color schemes before site execution.`,
        `We prepare clear day and dusk perspectives covering front elevations, corner views, boundary gates and exterior lighting cues—giving homeowners and site contractors an unmistakable blueprint to build from.`,
      ],
      introImage: photos.heroVilla,
      introImageAlt: `Architectural 3D villa visualization showing travertine stone and dusk lighting`,
      keyChecklist: [
        `3D Front Elevation Design`,
        `Corner & Multi-Angle Perspectives`,
        `Daylight & Dusk Lighting Renders`,
        `Material & Color Option Previews`,
        `Boundary Wall & Gate Integration`,
        `Contractor-Ready Design Clarity`,
      ],
      capabilitiesHeading: `3D Elevation & Visualization Services`,
      capabilities: [
        {
          number: `01`,
          title: `3D Front Elevation`,
          description: `Detailed street-view architectural renderings tailored for independent plots, duplexes and multi-floor urban residences.`,
        },
        {
          number: `02`,
          title: `Modern House Elevation`,
          description: `Contemporary box-frame, cantilevered, minimalist and tropical-modern elevation concepts customized to your plot width.`,
        },
        {
          number: `03`,
          title: `Residential 3D Visualization`,
          description: `Full exterior perspective views showing balconies, pergola overhangs, staircase towers and terrace sit-outs.`,
        },
        {
          number: `04`,
          title: `Exterior Rendering & Lighting`,
          description: `Photorealistic material textures paired with warm dusk lighting studies so evening ambiance is planned in advance.`,
        },
        {
          number: `05`,
          title: `Architectural Concept Development`,
          description: `Iterative elevation refinements exploring stone cladding, wood louvers, stucco tones and glass railings.`,
        },
        {
          number: `06`,
          title: `Execution Alignment`,
          description: `Translating approved 3D elevation designs into clear dimensional references for civil and facade teams on site.`,
        },
      ],
      specialSectionTitle: `Why 3D Visualization Matters Before Breaking Ground`,
      specialSectionSubtitle: `See how architectural volumes, shading louvers and materials work together.`,
      specialHighlightCards: [
        {
          title: `Urban Duplex & Multi-Level Homes`,
          detail: `Balanced vertical framing, privacy louvers and clean parking driveway integration for city plots.`,
          image: photos.elevation3d,
        },
        {
          title: `Independent Courtyard Villas`,
          detail: `Expansive cantilevers and natural stone textures previewed alongside landscape greenery.`,
          image: photos.heroResidence,
        },
        {
          title: `Poolside & Estate Residences`,
          detail: `Dusk reflections, soffit strip lighting and glass facade transparency rendered with accuracy.`,
          image: photos.heroVilla,
        },
      ],
      galleryTitle: `3D Elevation Design Gallery`,
      galleryItems: [
        {
          id: `3d-1`,
          title: `Three-Story Cedar & Charcoal Elevation`,
          category: `3D Elevations`,
          image: photos.elevation3d,
          caption: `Photorealistic urban front elevation featuring privacy louvers and boundary lighting.`,
        },
        {
          id: `3d-2`,
          title: `Cantilevered Residence Perspective`,
          category: `Architectural Visualization`,
          image: photos.heroResidence,
          caption: `Twilight perspective illustrating glass transparency and teak soffits.`,
        },
        {
          id: `3d-3`,
          title: `Travertine Modern Villa Render`,
          category: `Exterior Rendering`,
          image: photos.heroVilla,
          caption: `Golden hour architectural visualization with integrated water court.`,
        },
      ],
      faqs: frequentlyAskedQuestions.filter(
        (e) =>
          e.category === `Exterior & 3D Elevation` ||
          e.category === `Consultation, Budget & Timeline`,
      ),
      ctaLabel: `Request 3D Elevation`,
      ctaHeadline: `Visualize Your Building Elevation Before You Build`,
    }),
  ArchitecturalPlanningPage = () =>
    (0, P.jsx)(fi, {
      seoTitle: `Architectural Planning & Floor Plan Design | CREDCO`,
      seoDescription: `Smart, practical residential floor plans, building layout planning, space optimization, and Vaastu-compliant architectural concepts by CREDCO.`,
      canonicalPath: `/services/architectural-planning`,
      serviceName: `Architectural Planning`,
      kicker: `Architectural Planning · Floor Layouts`,
      heroTitle: `Smart, Practical & Functional Architectural Planning`,
      heroSubtitle: `Thoughtful floor plans, natural ventilation strategies and Vaastu-compliant layouts (where requested) designed for comfortable modern living.`,
      heroImage: photos.architecturalPlanning,
      introHeading: `Every Successful Project Starts With an Intelligent Plan`,
      introParagraphs: [
        `Even the most expensive finishes cannot fix a poorly planned floor layout. CREDCO’s architectural planning focuses on natural daylighting, cross-ventilation, privacy zoning between social and private rooms, and zero-waste circulation.`,
        `We prepare clear 2D floor layouts, furniture placement plans and architectural concept studies tailored to your plot dimensions and family requirements—including Vaastu-compliant orientations whenever requested by the client.`,
      ],
      introImage: photos.heroResidence,
      introImageAlt: `Architectural residence reflecting clear spatial planning and daylighting`,
      keyChecklist: [
        `Residential Floor Planning`,
        `Commercial & Office Layout Planning`,
        `Zero-Waste Space Optimization`,
        `Daylight & Cross-Ventilation Focus`,
        `Vaastu-Compliant Layouts (On Request)`,
        `Concept-to-Construction Coordination`,
      ],
      capabilitiesHeading: `Architectural Planning Capabilities`,
      capabilities: [
        {
          number: `01`,
          title: `Residential Floor Planning`,
          description: `Custom 2D ground, upper and terrace floor plans proportioned around family routines, staircase flow and parking access.`,
        },
        {
          number: `02`,
          title: `Building Layout Planning`,
          description: `Site utilization planning balancing setbacks, driveway turning radii, courtyard pockets and structural column grids.`,
        },
        {
          number: `03`,
          title: `Space & Furniture Planning`,
          description: `Detailed room-by-room furniture and wardrobe placement drawings so electrical points and door swings align cleanly.`,
        },
        {
          number: `04`,
          title: `Architectural Concepts`,
          description: `Cohesive spatial massing concepts linking interior room volumes directly to future 3D exterior elevations.`,
        },
        {
          number: `05`,
          title: `Vaastu-Compliant Planning`,
          description: `Thoughtful integration of directional preferences and Vaastu principles wherever requested, without sacrificing modern utility.`,
        },
        {
          number: `06`,
          title: `Design Consultation`,
          description: `Collaborative plan review sessions refining room dimensions and structural feasibility prior to site construction.`,
        },
      ],
      specialSectionTitle: `Planning Principles We Design By`,
      specialSectionSubtitle: `Practical layouts built around natural light, structural grid discipline and everyday ease.`,
      specialHighlightCards: [
        {
          title: `Clear Zoning & Privacy`,
          detail: `Separating guest reception, kitchen utility and quiet bedroom wings for peaceful daily living.`,
          image: photos.architecturalPlanning,
        },
        {
          title: `Indoor-Outdoor Continuity`,
          detail: `Aligning living and dining rooms with sit-outs, balconies or landscaped courts.`,
          image: photos.livingInterior,
        },
        {
          title: `Build-Ready Structural Logic`,
          detail: `Ensuring wet shafts, staircases and column grids stack efficiently across multiple stories.`,
          image: photos.construction,
        },
      ],
      galleryTitle: `Architectural Planning & Spatial References`,
      galleryItems: [
        {
          id: `ap-1`,
          title: `Residential Floor & Material Study`,
          category: `Architectural Designs`,
          image: photos.architecturalPlanning,
          caption: `Scaled 2D floor planning paired with natural stone and timber swatches.`,
        },
        {
          id: `ap-2`,
          title: `Open Courtyard Spatial Flow`,
          category: `Residential Concepts`,
          image: photos.heroResidence,
          caption: `Ground-floor living pavilion opening directly onto landscaped courtyard terraces.`,
        },
        {
          id: `ap-3`,
          title: `Multi-Story Grid Alignment`,
          category: `Structural Planning`,
          image: photos.construction,
          caption: `Stacked structural columns and slabs translated accurately from architectural plans.`,
        },
      ],
      faqs: frequentlyAskedQuestions.filter(
        (e) =>
          e.category === `Architectural Planning` ||
          e.category === `Consultation, Budget & Timeline`,
      ),
      ctaLabel: `Book Planning Consultation`,
      ctaHeadline: `Start With a Clear Architectural Floor Plan`,
    }),
  clientTestimonials = [
    { name: `Roshan Khatri`, date: `8 Jan 2026`, text: `They're amazing to work with. Professional team, great quality, and the project was finished on time.` },
    { name: `Priya Nair`, date: `2 Feb 2026`, text: `Amazing to work with. They understood our vision and delivered beautifully. Highly recommend.` },
    { name: `Mohammed Imran`, date: `19 Feb 2026`, text: `Honest, transparent and reliable. They're amazing to work with, and I'd happily recommend them.` },
    { name: `Ananya Sharma`, date: `8 Mar 2026`, text: `The final result exceeded our expectations. A very talented team and amazing to work with.` },
    { name: `Suresh Patel`, date: `27 Mar 2026`, text: `Solid quality and great communication throughout. They're amazing to work with.` },
    { name: `Kavita Reddy`, date: `15 Apr 2026`, text: `Polite, professional and detail-oriented. Really enjoyed working with them.` },
    { name: `Arjun Singh`, date: `3 Jun 2026`, text: `Great team that stuck to the budget and delivered quality work. We'll definitely work with them again.` },
    { name: `Farhan Ahmed`, date: `21 Jul 2026`, text: `Clear communication and smart suggestions at every step. They're amazing to work with.` },
    { name: `Deepika Menon`, date: `12 Sep 2026`, text: `Neat work, great finishing, and a very respectful team. Highly recommended.` },
    { name: `Vikram Joshi`, date: `9 Nov 2026`, text: `Well-managed, fairly priced and delivered as promised. Amazing team to work with.` },
  ],
  projectStatItems = [
    { label: `Ongoing Projects`, value: 27, note: `Currently under design or construction` },
    { label: `Upcoming Projects`, value: 16, note: `Scheduled and in planning` },
    { label: `Completed Projects`, value: 389, note: `Delivered to clients` },
  ],
  ProjectStats = () => {
    let statsLocation = vt(),
      sectionRef = (0, _.useRef)(null),
      [progress, setProgress] = (0, _.useState)(0),
      total = projectStatItems.reduce((sum, item) => sum + item.value, 0);
    (0, _.useEffect)(() => {
      let node = sectionRef.current;
      if (!node) return;
      let frame = 0,
        started = false,
        reduce =
          typeof window.matchMedia === `function` &&
          window.matchMedia(`(prefers-reduced-motion: reduce)`).matches,
        run = () => {
          if (started) return;
          started = true;
          if (reduce) {
            setProgress(1);
            return;
          }
          let begin = performance.now(),
            duration = 2200,
            tick = (now) => {
              let t = Math.min(1, (now - begin) / duration);
              setProgress(1 - Math.pow(1 - t, 3));
              t < 1 && (frame = window.requestAnimationFrame(tick));
            };
          frame = window.requestAnimationFrame(tick);
        },
        observer = null;
      if (typeof IntersectionObserver === `function`) {
        observer = new IntersectionObserver(
          (entries) => {
            entries.some((entry) => entry.isIntersecting) &&
              (run(), observer && observer.disconnect());
          },
          { threshold: 0.35 },
        );
        observer.observe(node);
      } else run();
      return () => {
        observer && observer.disconnect();
        window.cancelAnimationFrame(frame);
      };
    }, []);
    ((0, _.useEffect)(() => {
      if (statsLocation.hash !== `#project-stats`) return;
      let timer = window.setTimeout(() => {
        sectionRef.current &&
          sectionRef.current.scrollIntoView({
            behavior: `smooth`,
            block: `center`,
          });
      }, 150);
      return () => window.clearTimeout(timer);
    }, [statsLocation.hash, statsLocation.key]));
    let radius = 52,
      circumference = 2 * Math.PI * radius;
    return (0, P.jsx)(`section`, {
      ref: sectionRef,
      id: `project-stats`,
      "aria-label": `CREDCO project statistics`,
      className: `bg-[#E9DFD0]/35 py-12 sm:py-16 border-b border-[#171613]/10`,
      children: (0, P.jsx)(`div`, {
        className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
        children: (0, P.jsx)(`div`, {
          className: `grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6`,
          children: projectStatItems.map((item) => {
            let share = item.value / total,
              offset = circumference * (1 - share * progress);
            return (0, P.jsxs)(
              `div`,
              {
                className: `bg-[#0E0D0B] text-[#FAF8F3] rounded-2xl border border-[#C9A34A]/30 p-6 sm:p-7 flex items-center gap-5 sm:gap-6`,
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `relative w-28 h-28 sm:w-32 sm:h-32 shrink-0`,
                    children: [
                      (0, P.jsxs)(`svg`, {
                        viewBox: `0 0 120 120`,
                        className: `w-full h-full -rotate-90`,
                        "aria-hidden": `true`,
                        children: [
                          (0, P.jsx)(`circle`, {
                            cx: 60, cy: 60, r: radius, fill: `none`,
                            stroke: `#FAF8F3`, strokeOpacity: 0.12, strokeWidth: 8,
                          }),
                          (0, P.jsx)(`circle`, {
                            cx: 60, cy: 60, r: radius, fill: `none`,
                            stroke: `#C9A34A`, strokeWidth: 8, strokeLinecap: `round`,
                            strokeDasharray: circumference, strokeDashoffset: offset,
                          }),
                        ],
                      }),
                      (0, P.jsx)(`span`, {
                        className: `absolute inset-0 flex items-center justify-center font-display text-3xl sm:text-4xl font-semibold text-[#E7CC83] tabular-nums`,
                        "aria-hidden": `true`,
                        children: Math.round(item.value * progress),
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    children: [
                      (0, P.jsx)(`p`, {
                        className: `sr-only`,
                        children: `${item.value} ${item.label}`,
                      }),
                      (0, P.jsx)(`h2`, {
                        className: `font-display text-xl sm:text-2xl font-semibold text-[#FAF8F3] leading-tight`,
                        children: item.label,
                      }),
                      (0, P.jsx)(`p`, {
                        className: `mt-1.5 text-xs sm:text-sm text-[#E9DFD0]/75 leading-relaxed`,
                        children: item.note,
                      }),
                    ],
                  }),
                ],
              },
              item.label,
            );
          }),
        }),
      }),
    });
  },
  ProjectsPage = () => {
    let [e, t] = (0, _.useState)(`All`),
      [n, r] = (0, _.useState)(null),
      i =
        e === `All`
          ? portfolioProjects
          : portfolioProjects.filter((t) => t.category === e),
      a = i.map((e) => ({
        id: e.slug,
        title: e.title,
        category: e.category,
        image: e.image,
        caption: `${e.statusLabel} — ${e.summary}`,
      }));
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Projects & Portfolio | CREDCO – Architecture, Construction & Interiors`,
          description: `Explore CREDCO's demonstration residential, commercial, interior, exterior, construction, 3D elevation, and renovation project concepts.`,
          canonicalPath: `/projects`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Portfolio Showcase`,
          title: `Projects & Architectural Concepts`,
          subtitle: `Demonstration concept showcases illustrating CREDCO's design standards across residential builds, commercial interiors, 3D elevations and renovations.`,
          backgroundImage: photos.heroResidence,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Projects`,
            },
          ],
        }),
        (0, P.jsx)(ProjectStats, {}),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-14 sm:py-20`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `mb-8 pb-6 border-b border-[#171613]/10 flex items-center justify-end gap-4`,
                children: [
                  (0, P.jsxs)(`span`, {
                    className: `text-xs font-medium text-[#9A7A2C] tabular-nums shrink-0`,
                    children: [
                      `Showing `,
                      i.length,
                      ` `,
                      i.length === 1 ? `Concept` : `Concepts`,
                    ],
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                role: `tablist`,
                "aria-label": `Filter projects by category`,
                className: `flex flex-wrap items-center gap-2 mb-10`,
                children: Dr.map((n) => {
                  let r = e === n;
                  return (0, P.jsx)(
                    `button`,
                    {
                      type: `button`,
                      role: `tab`,
                      "aria-selected": r,
                      onClick: () => t(n),
                      className: `px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${r ? `bg-[#0E0D0B] text-[#E7CC83]` : `bg-[#E9DFD0]/55 text-[#171613] hover:bg-[#E9DFD0]`}`,
                      children: n,
                    },
                    n,
                  );
                }),
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7`,
                children: i.map((e, t) =>
                  (0, P.jsxs)(
                    `article`,
                    {
                      className: `bg-[#FAF8F3] border border-[#171613]/12 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#C9A34A]/70 transition-colors`,
                      children: [
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsxs)(`div`, {
                              className: `relative aspect-[4/3] overflow-hidden bg-[#171613]`,
                              children: [
                                (0, P.jsx)(k, {
                                  to: `/projects/${e.slug}`,
                                  className: `block w-full h-full`,
                                  children: (0, P.jsx)(SiteImage, {
                                    src: e.image,
                                    alt: e.title,
                                    className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
                                  }),
                                }),
                                (0, P.jsx)(`button`, {
                                  type: `button`,
                                  onClick: () => r(t),
                                  "aria-label": `Open ${e.title} in lightbox`,
                                  className: `absolute top-3 right-3 w-9 h-9 rounded-lg bg-[#0E0D0B]/75 backdrop-blur-sm text-[#FAF8F3] hover:text-[#E7CC83] border border-[#FAF8F3]/20 flex items-center justify-center transition-colors`,
                                  children: (0, P.jsx)(nr, {
                                    className: `w-4 h-4`,
                                  }),
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              className: `p-6`,
                              children: [
                                (0, P.jsxs)(`div`, {
                                  className: `text-xs text-[#9A7A2C] font-medium`,
                                  children: [
                                    (0, P.jsx)(`span`, {
                                      children: e.category,
                                    }),
                                    (0, P.jsx)(`span`, {
                                      className: `mx-1.5`,
                                      "aria-hidden": `true`,
                                      children: `·`,
                                    }),
                                    (0, P.jsx)(`span`, {
                                      className: `text-[#171613]/60`,
                                      children: e.statusLabel,
                                    }),
                                  ],
                                }),
                                (0, P.jsx)(`h2`, {
                                  className: `mt-2 font-display text-2xl font-semibold text-[#0E0D0B]`,
                                  children: (0, P.jsx)(k, {
                                    to: `/projects/${e.slug}`,
                                    className: `hover:text-[#9A7A2C] transition-colors`,
                                    children: e.title,
                                  }),
                                }),
                                (0, P.jsx)(`p`, {
                                  className: `mt-1.5 text-xs font-medium text-[#171613]/65`,
                                  children: e.scope,
                                }),
                                (0, P.jsx)(`p`, {
                                  className: `mt-3 text-sm text-[#171613]/80 leading-relaxed`,
                                  children: e.summary,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `px-6 pb-6 pt-4 border-t border-[#171613]/10 flex items-center justify-between gap-3`,
                          children: [
                            (0, P.jsxs)(k, {
                              to: `/projects/${e.slug}`,
                              className: `inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E0D0B] hover:text-[#9A7A2C]`,
                              children: [
                                (0, P.jsx)(`span`, {
                                  children: `View Concept Details`,
                                }),
                                (0, P.jsx)(M, {
                                  className: `w-3.5 h-3.5`,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`a`, {
                              href: serviceEnquiryUrl(e.category, e.title),
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              className: `inline-flex items-center gap-1.5 text-xs font-semibold text-[#8F6F24] hover:text-[#0E0D0B]`,
                              children: [
                                (0, P.jsx)(N, {
                                  className: `w-3.5 h-3.5`,
                                }),
                                (0, P.jsx)(`span`, {
                                  children: `Enquire`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.slug,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: `Portfolio Project Enquiry`,
        }),
        (0, P.jsx)(di, {
          items: a,
          currentIndex: n,
          onClose: () => r(null),
          onChangeIndex: r,
        }),
      ],
    });
  },
  ProjectPage = () => {
    let { slug: e } = Ct(),
      [t, n] = (0, _.useState)(null),
      r = portfolioProjects.find((t) => t.slug === e);
    if (!r)
      return (0, P.jsxs)(`div`, {
        className: `min-h-[70vh] bg-[#FAF8F3] pt-36 pb-20 px-4 text-center`,
        children: [
          (0, P.jsx)(`h1`, {
            className: `font-display text-3xl font-semibold text-[#0E0D0B]`,
            children: `Project Concept Not Found`,
          }),
          (0, P.jsx)(`p`, {
            className: `mt-3 text-sm text-[#171613]/75`,
            children: `The requested showcase could not be located. Return to our portfolio overview to browse all concepts.`,
          }),
          (0, P.jsxs)(k, {
            to: `/projects`,
            className: `mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0E0D0B] text-[#FAF8F3] text-sm font-semibold`,
            children: [
              (0, P.jsx)(qn, {
                className: `w-4 h-4`,
              }),
              (0, P.jsx)(`span`, {
                children: `Back to Projects`,
              }),
            ],
          }),
        ],
      });
    let i = r.galleryImages.map((e, t) => ({
      id: `${r.slug}-${t}`,
      title: `${r.title} — View ${t + 1}`,
      category: r.category,
      image: e,
      caption: r.scope,
    }));
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `${r.title} | CREDCO Portfolio`,
          description: r.summary,
          canonicalPath: `/projects/${r.slug}`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `${r.category} · ${r.statusLabel}`,
          title: r.title,
          subtitle: r.summary,
          backgroundImage: r.image,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Projects`,
              to: `/projects`,
            },
            {
              label: r.title,
            },
          ],
          action: (0, P.jsxs)(`a`, {
            href: serviceEnquiryUrl(r.category, r.title),
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap`,
            children: [
              (0, P.jsx)(N, {
                className: `w-4 h-4`,
              }),
              (0, P.jsx)(`span`, {
                children: `Discuss Similar Project`,
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsx)(`div`, {
                className: `mb-10`,
                children: (0, P.jsxs)(k, {
                  to: `/projects`,
                  className: `inline-flex items-center gap-2 text-sm font-semibold text-[#8F6F24] hover:text-[#0E0D0B]`,
                  children: [
                    (0, P.jsx)(qn, {
                      className: `w-4 h-4`,
                    }),
                    (0, P.jsx)(`span`, {
                      children: `Back to All Projects`,
                    }),
                  ],
                }),
              }),
              (0, P.jsxs)(`div`, {
                className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14`,
                children: [
                  (0, P.jsxs)(`div`, {
                    className: `lg:col-span-7 space-y-6`,
                    children: [
                      (0, P.jsxs)(`div`, {
                        className: `rounded-2xl overflow-hidden border border-[#171613]/10 bg-[#171613] aspect-[16/10] relative group`,
                        children: [
                          (0, P.jsx)(SiteImage, {
                            src: r.image,
                            alt: r.title,
                            loading: `eager`,
                            className: `w-full h-full object-cover`,
                          }),
                          (0, P.jsxs)(`button`, {
                            type: `button`,
                            onClick: () => n(0),
                            "aria-label": `Enlarge project image`,
                            className: `absolute bottom-4 right-4 inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#0E0D0B]/80 text-[#FAF8F3] text-xs font-medium border border-[#FAF8F3]/20 hover:border-[#C9A34A]`,
                            children: [
                              (0, P.jsx)(nr, {
                                className: `w-3.5 h-3.5`,
                              }),
                              (0, P.jsx)(`span`, {
                                children: `View Fullscreen`,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, P.jsx)(`div`, {
                        className: `grid grid-cols-3 gap-4`,
                        children: r.galleryImages.map((e, t) =>
                          (0, P.jsx)(
                            `button`,
                            {
                              type: `button`,
                              onClick: () => n(t),
                              className: `aspect-[4/3] rounded-xl overflow-hidden border border-[#171613]/12 hover:border-[#C9A34A] transition-colors`,
                              children: (0, P.jsx)(SiteImage, {
                                src: e,
                                alt: `${r.title} gallery view ${t + 1}`,
                                className: `w-full h-full object-cover`,
                              }),
                            },
                            t,
                          ),
                        ),
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`div`, {
                    className: `lg:col-span-5 space-y-7`,
                    children: [
                      (0, P.jsxs)(`div`, {
                        className: `border-b border-[#171613]/10 pb-6 space-y-2 text-sm`,
                        children: [
                          (0, P.jsx)(`p`, {
                            className: `text-xs font-semibold uppercase tracking-wider text-[#9A7A2C]`,
                            children: r.statusLabel,
                          }),
                          (0, P.jsxs)(`p`, {
                            children: [
                              (0, P.jsx)(`span`, {
                                className: `text-[#171613]/60`,
                                children: `Category: `,
                              }),
                              (0, P.jsx)(`span`, {
                                className: `font-semibold text-[#0E0D0B]`,
                                children: r.category,
                              }),
                            ],
                          }),
                          (0, P.jsxs)(`p`, {
                            children: [
                              (0, P.jsx)(`span`, {
                                className: `text-[#171613]/60`,
                                children: `Scope: `,
                              }),
                              (0, P.jsx)(`span`, {
                                className: `font-semibold text-[#0E0D0B]`,
                                children: r.scope,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, P.jsxs)(`div`, {
                        children: [
                          (0, P.jsx)(`h2`, {
                            className: `font-display text-2xl font-semibold text-[#0E0D0B]`,
                            children: `Concept Overview`,
                          }),
                          (0, P.jsx)(`p`, {
                            className: `mt-3 text-base text-[#171613]/80 leading-relaxed`,
                            children: r.description,
                          }),
                        ],
                      }),
                      (0, P.jsxs)(`div`, {
                        children: [
                          (0, P.jsx)(`h3`, {
                            className: `font-display text-xl font-semibold text-[#0E0D0B] mb-3`,
                            children: `Key Design & Execution Features`,
                          }),
                          (0, P.jsx)(`ul`, {
                            className: `space-y-2.5`,
                            children: r.highlights.map((e) =>
                              (0, P.jsxs)(
                                `li`,
                                {
                                  className: `flex items-start gap-2.5 text-sm text-[#171613]/85`,
                                  children: [
                                    (0, P.jsx)(Xn, {
                                      className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                                    }),
                                    (0, P.jsx)(`span`, {
                                      children: e,
                                    }),
                                  ],
                                },
                                e,
                              ),
                            ),
                          }),
                        ],
                      }),
                      (0, P.jsxs)(`div`, {
                        className: `pt-4 flex flex-col sm:flex-row gap-3`,
                        children: [
                          (0, P.jsxs)(`a`, {
                            href: serviceEnquiryUrl(r.category, r.title),
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors`,
                            children: [
                              (0, P.jsx)(N, {
                                className: `w-4 h-4`,
                              }),
                              (0, P.jsx)(`span`, {
                                children: `Enquire on WhatsApp`,
                              }),
                            ],
                          }),
                          (0, P.jsx)(k, {
                            to: `/consultation`,
                            className: `flex-1 inline-flex items-center justify-center px-5 py-3.5 rounded-lg bg-[#0E0D0B] hover:bg-[#171613] text-[#FAF8F3] text-sm font-semibold transition-colors`,
                            children: (0, P.jsx)(`span`, {
                              children: `Request Quote`,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: `${r.title} (${r.category})`,
        }),
        (0, P.jsx)(di, {
          items: i,
          currentIndex: t,
          onClose: () => n(null),
          onChangeIndex: n,
        }),
      ],
    });
  },
  GalleryPage = () => {
    let [e, t] = (0, _.useState)(`All`),
      [n, r] = (0, _.useState)(null),
      i =
        e === `All`
          ? galleryImages
          : galleryImages.filter((t) => t.category === e),
      a = i.map((e) => ({
        id: e.id,
        title: e.title,
        category: e.category,
        image: e.image,
        caption: e.caption,
      }));
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Visual Gallery | CREDCO – Bedrooms, Living Rooms, Villas & Elevations`,
          description: `Browse CREDCO's visual gallery featuring luxury bedrooms, modern living rooms, modular kitchens, villas, exteriors, 3D elevations, and renovation ideas.`,
          canonicalPath: `/gallery`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Design Gallery`,
          title: `Curated Architectural & Interior Gallery`,
          subtitle: `Explore inspirations across residential exteriors, 3D elevations, modular kitchens, living lounges and bespoke bedrooms. Select any image to view fullscreen.`,
          backgroundImage: photos.livingInterior,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Gallery`,
            },
          ],
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-14 sm:py-20`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsx)(`p`, {
                className: `text-xs sm:text-sm text-[#171613]/75 mb-6`,
                children: `Tap any photograph to open the fullscreen lightbox viewer.`,
              }),
              (0, P.jsx)(`div`, {
                role: `tablist`,
                "aria-label": `Filter gallery by space or discipline`,
                className: `flex flex-wrap items-center gap-2 mb-10`,
                children: kr.map((n) => {
                  let r = e === n;
                  return (0, P.jsx)(
                    `button`,
                    {
                      type: `button`,
                      role: `tab`,
                      "aria-selected": r,
                      onClick: () => t(n),
                      className: `px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${r ? `bg-[#0E0D0B] text-[#E7CC83]` : `bg-[#E9DFD0]/55 text-[#171613] hover:bg-[#E9DFD0]`}`,
                      children: n,
                    },
                    n,
                  );
                }),
              }),
              (0, P.jsx)(`div`, {
                className: `columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6`,
                children: i.map((e, t) =>
                  (0, P.jsxs)(
                    `button`,
                    {
                      type: `button`,
                      onClick: () => r(t),
                      className: `break-inside-avoid w-full text-left group bg-[#FAF8F3] border border-[#171613]/12 rounded-xl overflow-hidden block hover:border-[#C9A34A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A34A]`,
                      children: [
                        (0, P.jsxs)(`div`, {
                          className: `relative overflow-hidden bg-[#171613]`,
                          children: [
                            (0, P.jsx)(SiteImage, {
                              src: e.image,
                              alt: e.title,
                              className: `w-full object-cover group-hover:scale-105 transition-transform duration-500 ${e.aspect === `tall` ? `aspect-[3/4]` : e.aspect === `square` ? `aspect-square` : `aspect-[4/3]`}`,
                            }),
                            (0, P.jsx)(`span`, {
                              "aria-hidden": `true`,
                              className: `absolute top-3 right-3 w-9 h-9 rounded-lg bg-[#0E0D0B]/70 text-[#FAF8F3] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity`,
                              children: (0, P.jsx)(nr, {
                                className: `w-4 h-4`,
                              }),
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `p-5`,
                          children: [
                            (0, P.jsx)(`p`, {
                              className: `text-xs font-medium text-[#9A7A2C]`,
                              children: e.category,
                            }),
                            (0, P.jsx)(`h2`, {
                              className: `mt-1 font-display text-xl font-semibold text-[#0E0D0B]`,
                              children: e.title,
                            }),
                            (0, P.jsx)(`p`, {
                              className: `mt-1.5 text-xs sm:text-sm text-[#171613]/75 leading-relaxed`,
                              children: e.caption,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: `Gallery Design Reference`,
        }),
        (0, P.jsx)(di, {
          items: a,
          currentIndex: n,
          onClose: () => r(null),
          onChangeIndex: r,
        }),
      ],
    });
  },
  ProcessPage = () =>
    (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Our Process | CREDCO – From Consultation to Final Handover`,
          description: `Discover CREDCO's transparent 8-step design and construction journey from initial consultation and 3D visualization to quality inspection and handover.`,
          canonicalPath: `/process`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `How We Work`,
          title: `Our 8-Step Design & Construction Process`,
          subtitle: `A structured, transparent workflow engineered to keep your budget, design approvals and site execution aligned at every milestone.`,
          backgroundImage: photos.architecturalPlanning,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Our Process`,
            },
          ],
          action: (0, P.jsxs)(`a`, {
            href: serviceEnquiryUrl(`Process & Project Timeline Discussion`),
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: `inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap`,
            children: [
              (0, P.jsx)(N, {
                className: `w-4 h-4`,
              }),
              (0, P.jsx)(`span`, {
                children: `Book Step 01 Consultation`,
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsx)(`div`, {
                className: `relative space-y-6`,
                children: Tr.map((e) =>
                  (0, P.jsxs)(
                    `div`,
                    {
                      className: `bg-[#FAF8F3] border border-[#171613]/12 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-6 md:gap-10 items-start hover:border-[#C9A34A]/60 transition-colors`,
                      children: [
                        (0, P.jsxs)(`div`, {
                          className: `shrink-0 flex md:flex-col items-center md:items-start gap-3 md:w-36`,
                          children: [
                            (0, P.jsx)(`span`, {
                              className: `font-display text-4xl sm:text-5xl font-semibold text-[#C9A34A] tabular-nums leading-none`,
                              children: e.step,
                            }),
                            (0, P.jsx)(`span`, {
                              className: `text-xs font-medium uppercase tracking-wider text-[#9A7A2C]`,
                              children: e.phase,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `flex-1`,
                          children: [
                            (0, P.jsx)(`h2`, {
                              className: `font-display text-2xl font-semibold text-[#0E0D0B]`,
                              children: e.title,
                            }),
                            (0, P.jsx)(`p`, {
                              className: `mt-3 text-base text-[#171613]/80 leading-relaxed`,
                              children: e.description,
                            }),
                            (0, P.jsxs)(`p`, {
                              className: `mt-4 pt-3 border-t border-[#171613]/10 text-xs sm:text-sm text-[#171613]/70`,
                              children: [
                                (0, P.jsx)(`span`, {
                                  className: `font-semibold text-[#0E0D0B]`,
                                  children: `Key Outcome: `,
                                }),
                                e.deliverable,
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    e.step,
                  ),
                ),
              }),
              (0, P.jsx)(`div`, {
                className: `mt-12 text-center`,
                children: (0, P.jsxs)(k, {
                  to: `/consultation`,
                  className: `inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-[#0E0D0B] hover:bg-[#171613] text-[#FAF8F3] text-sm font-semibold transition-colors`,
                  children: [
                    (0, P.jsx)(`span`, {
                      children: `Begin Step 01: Request Free Consultation`,
                    }),
                    (0, P.jsx)(M, {
                      className: `w-4 h-4 text-[#C9A34A]`,
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: `Process & Consultation`,
        }),
      ],
    }),
  BlogPage = () => {
    let [e, t] = (0, _.useState)(`All`),
      n = e === `All` ? blogPosts : blogPosts.filter((t) => t.category === e);
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Blog & Design Ideas | CREDCO – Architecture & Interior Insights`,
          description: `Read practical design articles on interior ideas, home construction tips, modern architecture, exterior inspiration, 3D elevation trends, and planning.`,
          canonicalPath: `/blog`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Design Journal`,
          title: `Blog & Architectural Ideas`,
          subtitle: `Practical guides covering construction checklists, warm interior minimalism, 3D elevation planning and smart space layouts.`,
          backgroundImage: photos.architecturalPlanning,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Blog`,
            },
          ],
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-14 sm:py-20`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `mb-8 pb-5 border-b border-[#171613]/10 flex items-center justify-end gap-4`,
                children: [
                  (0, P.jsxs)(`span`, {
                    className: `text-xs font-medium text-[#9A7A2C] tabular-nums shrink-0`,
                    children: [
                      n.length,
                      ` `,
                      n.length === 1 ? `Article` : `Articles`,
                    ],
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                role: `tablist`,
                "aria-label": `Filter articles by topic`,
                className: `flex flex-wrap items-center gap-2 mb-10`,
                children: jr.map((n) => {
                  let r = e === n;
                  return (0, P.jsx)(
                    `button`,
                    {
                      type: `button`,
                      role: `tab`,
                      "aria-selected": r,
                      onClick: () => t(n),
                      className: `px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${r ? `bg-[#0E0D0B] text-[#E7CC83]` : `bg-[#E9DFD0]/55 text-[#171613] hover:bg-[#E9DFD0]`}`,
                      children: n,
                    },
                    n,
                  );
                }),
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7`,
                children: n.map((e) =>
                  (0, P.jsxs)(
                    `article`,
                    {
                      className: `bg-[#FAF8F3] border border-[#171613]/12 rounded-xl overflow-hidden flex flex-col justify-between group hover:border-[#C9A34A] transition-colors`,
                      children: [
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsx)(k, {
                              to: `/blog/${e.slug}`,
                              className: `block aspect-[4/3] overflow-hidden bg-[#171613]`,
                              children: (0, P.jsx)(SiteImage, {
                                src: e.image,
                                alt: e.title,
                                className: `w-full h-full object-cover group-hover:scale-105 transition-transform duration-500`,
                              }),
                            }),
                            (0, P.jsxs)(`div`, {
                              className: `p-6`,
                              children: [
                                (0, P.jsxs)(`div`, {
                                  className: `flex flex-wrap items-center gap-2 text-xs text-[#9A7A2C] font-medium`,
                                  children: [
                                    (0, P.jsx)(`span`, {
                                      children: e.category,
                                    }),
                                    (0, P.jsx)(`span`, {
                                      "aria-hidden": `true`,
                                      children: `·`,
                                    }),
                                    (0, P.jsx)(`span`, {
                                      className: `text-[#171613]/65`,
                                      children: e.readingTime,
                                    }),
                                  ],
                                }),
                                (0, P.jsx)(`h2`, {
                                  className: `mt-2.5 font-display text-2xl font-semibold text-[#0E0D0B] leading-snug`,
                                  children: (0, P.jsx)(k, {
                                    to: `/blog/${e.slug}`,
                                    className: `hover:text-[#9A7A2C] transition-colors`,
                                    children: e.title,
                                  }),
                                }),
                                (0, P.jsx)(`p`, {
                                  className: `mt-3 text-sm text-[#171613]/75 leading-relaxed`,
                                  children: e.excerpt,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsx)(`div`, {
                          className: `px-6 pb-6 pt-4 border-t border-[#171613]/10`,
                          children: (0, P.jsxs)(k, {
                            to: `/blog/${e.slug}`,
                            className: `inline-flex items-center gap-1.5 text-xs font-semibold text-[#0E0D0B] hover:text-[#9A7A2C]`,
                            children: [
                              (0, P.jsx)(`span`, {
                                children: `Read Full Article`,
                              }),
                              (0, P.jsx)(M, {
                                className: `w-3.5 h-3.5`,
                              }),
                            ],
                          }),
                        }),
                      ],
                    },
                    e.slug,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: `Design Ideas & Consultation`,
        }),
      ],
    });
  },
  BlogArticlePage = () => {
    let { slug: e } = Ct(),
      t = blogPosts.find((t) => t.slug === e);
    if (!t)
      return (0, P.jsxs)(`div`, {
        className: `min-h-[70vh] bg-[#FAF8F3] pt-36 pb-20 px-4 text-center`,
        children: [
          (0, P.jsx)(`h1`, {
            className: `font-display text-3xl font-semibold text-[#0E0D0B]`,
            children: `Article Not Found`,
          }),
          (0, P.jsxs)(k, {
            to: `/blog`,
            className: `mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-[#0E0D0B] text-[#FAF8F3] text-sm font-semibold`,
            children: [
              (0, P.jsx)(qn, {
                className: `w-4 h-4`,
              }),
              (0, P.jsx)(`span`, {
                children: `Back to Blog`,
              }),
            ],
          }),
        ],
      });
    let n = blogPosts.filter((e) => e.slug !== t.slug).slice(0, 3);
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `${t.title} | CREDCO Blog`,
          description: t.excerpt,
          canonicalPath: `/blog/${t.slug}`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `${t.category} · ${t.readingTime}`,
          title: t.title,
          subtitle: t.excerpt,
          backgroundImage: t.image,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Blog`,
              to: `/blog`,
            },
            {
              label: t.title,
            },
          ],
        }),
        (0, P.jsx)(`article`, {
          className: `bg-[#FAF8F3] py-16 sm:py-20`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsx)(`div`, {
                className: `mb-8`,
                children: (0, P.jsxs)(k, {
                  to: `/blog`,
                  className: `inline-flex items-center gap-2 text-sm font-semibold text-[#8F6F24] hover:text-[#0E0D0B]`,
                  children: [
                    (0, P.jsx)(qn, {
                      className: `w-4 h-4`,
                    }),
                    (0, P.jsx)(`span`, {
                      children: `Back to All Articles`,
                    }),
                  ],
                }),
              }),
              (0, P.jsx)(`div`, {
                className: `aspect-[16/9] rounded-2xl overflow-hidden border border-[#171613]/10 bg-[#171613] mb-10`,
                children: (0, P.jsx)(SiteImage, {
                  src: t.image,
                  alt: t.title,
                  loading: `eager`,
                  className: `w-full h-full object-cover`,
                }),
              }),
              (0, P.jsx)(`div`, {
                className: `space-y-6 text-base sm:text-lg text-[#171613]/85 leading-relaxed`,
                children: t.content.map((e, t) =>
                  (0, P.jsx)(
                    `p`,
                    {
                      children: e,
                    },
                    t,
                  ),
                ),
              }),
              (0, P.jsxs)(`div`, {
                className: `mt-12 p-7 rounded-2xl bg-[#E9DFD0]/45 border border-[#171613]/12 flex flex-col sm:flex-row sm:items-center justify-between gap-5`,
                children: [
                  (0, P.jsxs)(`div`, {
                    children: [
                      (0, P.jsx)(`h2`, {
                        className: `font-display text-2xl font-semibold text-[#0E0D0B]`,
                        children: `Have Questions About Your Own Project?`,
                      }),
                      (0, P.jsx)(`p`, {
                        className: `mt-1 text-sm text-[#171613]/75`,
                        children: `Discuss your plot, floor plan or interior ideas directly with CREDCO on WhatsApp.`,
                      }),
                    ],
                  }),
                  (0, P.jsxs)(`a`, {
                    href: serviceEnquiryUrl(t.category, t.title),
                    target: `_blank`,
                    rel: `noopener noreferrer`,
                    className: `inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap shrink-0`,
                    children: [
                      (0, P.jsx)(N, {
                        className: `w-4 h-4`,
                      }),
                      (0, P.jsx)(`span`, {
                        children: `Ask on WhatsApp`,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#E9DFD0]/30 py-14 border-t border-[#171613]/10`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsx)(`h2`, {
                className: `font-display text-2xl sm:text-3xl font-semibold text-[#0E0D0B] mb-8`,
                children: `More Design & Construction Guides`,
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-3 gap-6`,
                children: n.map((e) =>
                  (0, P.jsxs)(
                    k,
                    {
                      to: `/blog/${e.slug}`,
                      className: `bg-[#FAF8F3] border border-[#171613]/10 rounded-xl overflow-hidden hover:border-[#C9A34A] transition-colors`,
                      children: [
                        (0, P.jsx)(`div`, {
                          className: `aspect-[4/3] overflow-hidden`,
                          children: (0, P.jsx)(SiteImage, {
                            src: e.image,
                            alt: e.title,
                            className: `w-full h-full object-cover`,
                          }),
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `p-5`,
                          children: [
                            (0, P.jsxs)(`p`, {
                              className: `text-xs font-medium text-[#9A7A2C]`,
                              children: [e.category, ` · `, e.readingTime],
                            }),
                            (0, P.jsx)(`h3`, {
                              className: `mt-1.5 font-display text-lg font-semibold text-[#0E0D0B]`,
                              children: e.title,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.slug,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: t.category,
        }),
      ],
    });
  },
  Ti = ({ className: e = `w-5 h-5` }) =>
    (0, P.jsxs)(`svg`, {
      viewBox: `0 0 24 24`,
      className: e,
      "aria-hidden": `true`,
      children: [
        (0, P.jsx)(`path`, {
          fill: `#4285F4`,
          d: `M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z`,
        }),
        (0, P.jsx)(`path`, {
          fill: `#34A853`,
          d: `M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.11-6.72-4.96H1.29v3.14C3.26 21.3 7.31 24 12 24z`,
        }),
        (0, P.jsx)(`path`, {
          fill: `#FBBC05`,
          d: `M5.28 14.24c-.24-.72-.38-1.49-.38-2.24s.14-1.52.38-2.24V6.62H1.29C.47 8.24 0 10.06 0 12s.47 3.76 1.29 5.38l3.99-3.14z`,
        }),
        (0, P.jsx)(`path`, {
          fill: `#EA4335`,
          d: `M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.26 2.7 1.29 6.62l3.99 3.14c.95-2.85 3.6-4.96 6.72-4.96z`,
        }),
      ],
    }),
  Ei = [
    `All`,
    `Residential & Villas`,
    `Commercial & Offices`,
    `Institutions & Healthcare`,
    `Renovation & 3D Design`,
  ],
  ReviewsPage = () => {
    let [e, t] = (0, _.useState)(`All`),
      [n, r] = (0, _.useState)({
        name: ``,
        service: services[0].title,
        projectLocation: ``,
        comment: ``,
      }),
      [i, a] = (0, _.useState)(null),
      [o, s] = (0, _.useState)(null),
      c = e === `All` ? Pr : Pr.filter((t) => t.category === e),
      l = (e) => {
        if (
          (e.preventDefault(),
          a(null),
          !n.name.trim() || n.name.trim().length < 2)
        ) {
          a(`Please enter your name before sharing feedback.`);
          return;
        }
        if (!n.comment.trim() || n.comment.trim().length < 10) {
          a(`Please share a brief note about your experience with CREDCO.`);
          return;
        }
        let t = whatsAppUrl(
          [
            `Hello CREDCO Team,`,
            ``,
            `I would like to share my project feedback:`,
            ``,
            `Name: ${n.name.trim()}`,
            `Service: ${n.service}`,
            `Location: ${n.projectLocation.trim() || `Not specified`}`,
            `Feedback: ${n.comment.trim()}`,
          ].join(`
`),
        );
        s(t);
        let r = document.createElement(`a`);
        ((r.href = t),
          (r.target = `_blank`),
          (r.rel = `noopener noreferrer`),
          document.body.appendChild(r),
          r.click(),
          document.body.removeChild(r));
      },
      u = `w-full px-4 py-3 rounded-lg bg-[#FAF8F3] border border-[#171613]/20 text-sm text-[#0E0D0B] placeholder:text-[#171613]/45 focus:outline-none focus:border-[#C9A34A] focus:ring-1 focus:ring-[#C9A34A] transition-colors`;
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Client Reviews & Google Feedback | CREDCO`,
          description: `Read client reviews for CREDCO – Creative Design And Construction Pvt. Ltd. or share feedback on your construction, architecture, and interior design experience.`,
          canonicalPath: `/reviews`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Client Reviews & Trust`,
          title: `Client Reviews & Feedback`,
          subtitle: `Transparency starts with real voices. Read what our clients say, or share your own experience working with CREDCO.`,
          backgroundImage: photos.heroResidence,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Reviews`,
            },
          ],
          action: (0, P.jsxs)(`a`, {
            href: Nr,
            target: `_blank`,
            rel: `noopener noreferrer`,
            className: `inline-flex items-center justify-center gap-2.5 px-5 py-3 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap`,
            children: [
              (0, P.jsx)(Ti, {
                className: `w-4 h-4`,
              }),
              (0, P.jsx)(`span`, {
                children: `View Google Reviews`,
              }),
              (0, P.jsx)(rr, {
                className: `w-4 h-4`,
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-14 sm:py-20 border-b border-[#171613]/10`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, P.jsxs)(`div`, {
              className: `bg-[#0E0D0B] text-[#FAF8F3] rounded-2xl p-7 sm:p-11 border border-[#C9A34A]/30 flex flex-col lg:flex-row lg:items-center justify-between gap-8`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `max-w-2xl space-y-4`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      className: `inline-flex items-center gap-2.5 text-xs font-medium uppercase tracking-[0.18em] text-[#E7CC83]`,
                      children: [
                        (0, P.jsx)(Ti, {
                          className: `w-4 h-4`,
                        }),
                        (0, P.jsx)(`span`, {
                          children: `Official Google Business Profile`,
                        }),
                      ],
                    }),
                    (0, P.jsx)(`h2`, {
                      className: `font-display text-2xl sm:text-4xl font-semibold text-[#FAF8F3] leading-tight`,
                      children: `More Feedback on Google`,
                    }),
                    (0, P.jsxs)(`p`, {
                      className: `text-sm sm:text-base text-[#E9DFD0]/80 leading-relaxed`,
                      children: [
                        `Want to see more? You can also read client feedback and photos directly on `,
                        companyName,
                        `’s live Google Business listing.`,
                      ],
                    }),
                  ],
                }),
                (0, P.jsxs)(`div`, {
                  className: `flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0`,
                  children: [
                    (0, P.jsxs)(`a`, {
                      href: Nr,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      className: `inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors whitespace-nowrap`,
                      children: [
                        (0, P.jsx)(Ti, {
                          className: `w-4 h-4`,
                        }),
                        (0, P.jsx)(`span`, {
                          children: `Read Reviews on Google`,
                        }),
                        (0, P.jsx)(rr, {
                          className: `w-4 h-4`,
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`a`, {
                      href: Nr,
                      target: `_blank`,
                      rel: `noopener noreferrer`,
                      className: `inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-[#FAF8F3]/25 text-[#FAF8F3] hover:border-[#C9A34A] hover:text-[#E7CC83] text-sm font-medium transition-colors whitespace-nowrap`,
                      children: [
                        (0, P.jsx)(`span`, {
                          children: `Write a Google Review`,
                        }),
                        (0, P.jsx)(M, {
                          className: `w-4 h-4`,
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-14 sm:py-20 border-b border-[#171613]/10`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsxs)(`div`, {
                className: `max-w-2xl mb-10`,
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                    children: `What Our Clients Say`,
                  }),
                  (0, P.jsx)(`p`, {
                    className: `mt-2.5 text-sm text-[#171613]/75`,
                    children: `Feedback shared by clients after working with the CREDCO team.`,
                  }),
                ],
              }),
              (0, P.jsx)(`div`, {
                className: `credco-reviews-grid`,
                children: clientTestimonials.map((review) =>
                  (0, P.jsxs)(
                    `figure`,
                    {
                      className: `break-inside-avoid bg-[#E9DFD0]/35 border border-[#171613]/12 rounded-xl p-6`,
                      children: [
                        (0, P.jsx)(`blockquote`, {
                          className: `text-sm sm:text-base text-[#171613] leading-relaxed`,
                          children: `“${review.text}”`,
                        }),
                        (0, P.jsxs)(`figcaption`, {
                          className: `mt-5 pt-4 border-t border-[#171613]/10 flex items-center gap-3`,
                          children: [
                            (0, P.jsx)(`span`, {
                              className: `w-9 h-9 rounded-full bg-[#0E0D0B] text-[#E7CC83] text-xs font-semibold flex items-center justify-center shrink-0`,
                              "aria-hidden": `true`,
                              children: review.name.split(` `).map((part) => part[0]).join(``).slice(0, 2),
                            }),
                            (0, P.jsxs)(`span`, {
                              className: `flex flex-col leading-tight`,
                              children: [
                                (0, P.jsx)(`span`, {
                                  className: `text-sm font-semibold text-[#0E0D0B]`,
                                  children: review.name,
                                }),
                                (0, P.jsx)(`span`, {
                                  className: `mt-0.5 text-xs text-[#171613]/60`,
                                  children: review.date,
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    },
                    review.name,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-14 sm:py-20 border-b border-[#171613]/10`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsx)(`div`, {
                className: `flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10`,
                children: (0, P.jsxs)(`div`, {
                  className: `max-w-2xl`,
                  children: [
                    (0, P.jsx)(`p`, {
                      className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                      children: `Client Satisfaction Across Spaces`,
                    }),
                    (0, P.jsx)(`h2`, {
                      className: `font-display text-3xl sm:text-4xl font-semibold text-[#0E0D0B]`,
                      children: `Satisfied Clients We Serve`,
                    }),
                    (0, P.jsx)(`p`, {
                      className: `mt-2.5 text-sm text-[#171613]/75`,
                      children: `Explore how CREDCO delivers reliability, clear communication and lasting craftsmanship across residential, commercial, institutional and renovation projects.`,
                    }),
                  ],
                }),
              }),
              (0, P.jsx)(`div`, {
                role: `tablist`,
                "aria-label": `Filter satisfied client sectors by discipline`,
                className: `flex flex-wrap items-center gap-2 mb-9`,
                children: Ei.map((n) => {
                  let r = e === n;
                  return (0, P.jsx)(
                    `button`,
                    {
                      type: `button`,
                      role: `tab`,
                      "aria-selected": r,
                      onClick: () => t(n),
                      className: `px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${r ? `bg-[#0E0D0B] text-[#E7CC83]` : `bg-[#E9DFD0]/55 text-[#171613] hover:bg-[#E9DFD0]`}`,
                      children: n,
                    },
                    n,
                  );
                }),
              }),
              (0, P.jsx)(`div`, {
                className: `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`,
                children: c.map((e) =>
                  (0, P.jsxs)(
                    `div`,
                    {
                      className: `bg-[#E9DFD0]/35 border border-[#171613]/12 rounded-xl p-6 flex flex-col justify-between`,
                      children: [
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsxs)(`span`, {
                              className: `text-xs font-semibold text-[#9A7A2C] tabular-nums`,
                              children: [e.number, ` · `, e.category],
                            }),
                            (0, P.jsx)(`h3`, {
                              className: `mt-2 font-display text-xl font-semibold text-[#0E0D0B]`,
                              children: e.clientGroup,
                            }),
                            (0, P.jsx)(`p`, {
                              className: `mt-1 text-xs font-medium text-[#171613]/65`,
                              children: e.scope,
                            }),
                            (0, P.jsx)(`p`, {
                              className: `mt-3 text-sm text-[#171613]/85 leading-relaxed`,
                              children: e.highlight,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `mt-6 pt-4 border-t border-[#171613]/10 flex items-center justify-between gap-2 text-xs font-medium text-[#0E0D0B]`,
                          children: [
                            (0, P.jsxs)(`span`, {
                              className: `inline-flex items-center gap-1.5`,
                              children: [
                                (0, P.jsx)(tr, {
                                  className: `w-3.5 h-3.5 text-[#C9A34A]`,
                                }),
                                (0, P.jsx)(`span`, {
                                  children: e.outcome,
                                }),
                              ],
                            }),
                            (0, P.jsx)(`a`, {
                              href: Nr,
                              target: `_blank`,
                              rel: `noopener noreferrer`,
                              className: `text-[#8F6F24] hover:underline whitespace-nowrap`,
                              children: `Google →`,
                            }),
                          ],
                        }),
                      ],
                    },
                    e.id,
                  ),
                ),
              }),
            ],
          }),
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#E9DFD0]/35 py-16 sm:py-24`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, P.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-5 space-y-5`,
                  children: [
                    (0, P.jsx)(`p`, {
                      className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C]`,
                      children: `Worked With CREDCO?`,
                    }),
                    (0, P.jsx)(`h2`, {
                      className: `font-display text-3xl font-semibold text-[#0E0D0B]`,
                      children: `Share Your Project Experience`,
                    }),
                    (0, P.jsx)(`p`, {
                      className: `text-sm sm:text-base text-[#171613]/80 leading-relaxed`,
                      children: `Your honest feedback helps future homeowners and businesses plan with confidence. You can post directly on our Google Business Profile or send a testimonial note to our team via WhatsApp.`,
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `pt-2 space-y-3`,
                      children: [
                        (0, P.jsxs)(`a`, {
                          href: Nr,
                          target: `_blank`,
                          rel: `noopener noreferrer`,
                          className: `w-full inline-flex items-center justify-center gap-2.5 px-5 py-3.5 rounded-lg bg-[#0E0D0B] hover:bg-[#171613] text-[#FAF8F3] text-sm font-semibold transition-colors`,
                          children: [
                            (0, P.jsx)(Ti, {
                              className: `w-4 h-4`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: `Post Review on Google`,
                            }),
                            (0, P.jsx)(rr, {
                              className: `w-4 h-4 text-[#C9A34A]`,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(k, {
                          to: `/projects`,
                          className: `w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg border border-[#171613]/20 text-[#0E0D0B] hover:border-[#C9A34A] text-sm font-medium transition-colors`,
                          children: [
                            (0, P.jsx)(`span`, {
                              children: `Explore Portfolio Concepts`,
                            }),
                            (0, P.jsx)(M, {
                              className: `w-4 h-4`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-7 bg-[#FAF8F3] border border-[#171613]/12 rounded-2xl p-7 sm:p-9`,
                  children: [
                    (0, P.jsx)(`h3`, {
                      className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                      children: `Send Testimonial via WhatsApp`,
                    }),
                    (0, P.jsxs)(`p`, {
                      className: `text-xs sm:text-sm text-[#171613]/70 mb-6`,
                      children: [
                        `Submitting formats your feedback and opens WhatsApp (`,
                        businessPhone,
                        `) so our team can publish verified client quotes with your permission.`,
                      ],
                    }),
                    i &&
                      (0, P.jsxs)(`div`, {
                        role: `alert`,
                        className: `mb-5 p-4 rounded-lg bg-red-950/10 border border-red-700/30 text-red-900 text-sm flex items-start gap-2.5`,
                        children: [
                          (0, P.jsx)(er, {
                            className: `w-4 h-4 mt-0.5 shrink-0`,
                          }),
                          (0, P.jsx)(`span`, {
                            children: i,
                          }),
                        ],
                      }),
                    o &&
                      (0, P.jsxs)(`div`, {
                        className: `mb-5 p-4 rounded-xl bg-[#0E0D0B] text-[#FAF8F3] border border-[#C9A34A]/40 space-y-2.5`,
                        children: [
                          (0, P.jsxs)(`div`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, P.jsx)(tr, {
                                className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                              }),
                              (0, P.jsxs)(`p`, {
                                className: `text-xs text-[#E9DFD0]/90`,
                                children: [
                                  `Feedback prepared for WhatsApp (`,
                                  `+91 9730006820`,
                                  `). If it did not open automatically, use the button below.`,
                                ],
                              }),
                            ],
                          }),
                          (0, P.jsxs)(`a`, {
                            href: o,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#C9A34A] text-[#0E0D0B] text-xs font-semibold`,
                            children: [
                              (0, P.jsx)(`span`, {
                                children: `Open WhatsApp`,
                              }),
                              (0, P.jsx)(rr, {
                                className: `w-3.5 h-3.5`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, P.jsxs)(`form`, {
                      onSubmit: l,
                      className: `space-y-4`,
                      noValidate: !0,
                      children: [
                        (0, P.jsxs)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-4`,
                          children: [
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `rev-name`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Your Name *`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `rev-name`,
                                  type: `text`,
                                  required: !0,
                                  value: n.name,
                                  onChange: (e) =>
                                    r({
                                      ...n,
                                      name: e.target.value,
                                    }),
                                  placeholder: `Full name`,
                                  className: u,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `rev-service`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Service Availed`,
                                }),
                                (0, P.jsx)(`select`, {
                                  id: `rev-service`,
                                  value: n.service,
                                  onChange: (e) =>
                                    r({
                                      ...n,
                                      service: e.target.value,
                                    }),
                                  className: u,
                                  children: services.map((e) =>
                                    (0, P.jsx)(
                                      `option`,
                                      {
                                        value: e.title,
                                        children: e.title,
                                      },
                                      e.id,
                                    ),
                                  ),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsx)(`label`, {
                              htmlFor: `rev-location`,
                              className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                              children: `Project Location (Optional)`,
                            }),
                            (0, P.jsx)(`input`, {
                              id: `rev-location`,
                              type: `text`,
                              value: n.projectLocation,
                              onChange: (e) =>
                                r({
                                  ...n,
                                  projectLocation: e.target.value,
                                }),
                              placeholder: `City / Locality`,
                              className: u,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsx)(`label`, {
                              htmlFor: `rev-comment`,
                              className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                              children: `Your Experience *`,
                            }),
                            (0, P.jsx)(`textarea`, {
                              id: `rev-comment`,
                              rows: 4,
                              required: !0,
                              value: n.comment,
                              onChange: (e) =>
                                r({
                                  ...n,
                                  comment: e.target.value,
                                }),
                              placeholder: `Share how our planning, execution, or interior design team helped...`,
                              className: u,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`button`, {
                          type: `submit`,
                          className: `w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors`,
                          children: [
                            (0, P.jsx)(N, {
                              className: `w-4 h-4`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: `Send Feedback on WhatsApp`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: `Client Reviews Enquiry`,
        }),
      ],
    });
  },
  ContactPage = () => {
    let [e, t] = (0, _.useState)({
        name: ``,
        phone: ``,
        email: ``,
        service: services[0].title,
        projectType: `Residential`,
        location: ``,
        budget: ``,
        preferredContact: `WhatsApp`,
        details: ``,
      }),
      [n, r] = (0, _.useState)(null),
      [i, a] = (0, _.useState)(null),
      o = (t) => {
        if (
          (t.preventDefault(),
          r(null),
          !e.name.trim() || e.name.trim().length < 2)
        ) {
          r(`Please enter your full name.`);
          return;
        }
        if (!isPhoneNumber(e.phone)) {
          r(`Please enter a valid mobile or phone number.`);
          return;
        }
        if (
          e.email.trim() &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim())
        ) {
          r(`Please enter a valid email address or leave it blank.`);
          return;
        }
        let n = whatsAppUrl(formatEnquiry(e));
        a(n);
        let i = document.createElement(`a`);
        ((i.href = n),
          (i.target = `_blank`),
          (i.rel = `noopener noreferrer`),
          document.body.appendChild(i),
          i.click(),
          document.body.removeChild(i));
      },
      s = `w-full px-4 py-3 rounded-lg bg-[#FAF8F3] border border-[#171613]/20 text-sm text-[#0E0D0B] placeholder:text-[#171613]/45 focus:outline-none focus:border-[#C9A34A] focus:ring-1 focus:ring-[#C9A34A] transition-colors`;
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Contact Us | CREDCO – +91 9730006820`,
          description: `Contact CREDCO – Creative Design And Construction Pvt. Ltd. Send your construction, interior, exterior, renovation, or 3D elevation enquiry directly on WhatsApp.`,
          canonicalPath: `/contact`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Contact CREDCO`,
          title: `Get in Touch With Our Team`,
          subtitle: `Share your construction, interior design or architectural planning enquiry. Submissions open directly in WhatsApp so you connect with our team immediately.`,
          backgroundImage: photos.officeInterior,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Contact Us`,
            },
          ],
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, P.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-5 space-y-7`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      className: `bg-[#0E0D0B] text-[#FAF8F3] rounded-2xl p-8 border border-[#C9A34A]/25`,
                      children: [
                        (0, P.jsx)(CredcoLogo, {
                          variant: `full`,
                          theme: `dark`,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-5 text-sm text-[#E9DFD0]/80 leading-relaxed`,
                          children: companyName,
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `mt-7 pt-6 border-t border-[#FAF8F3]/12 space-y-5 text-sm`,
                          children: [
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`p`, {
                                  className: `text-xs uppercase tracking-wider text-[#C9A34A] mb-1`,
                                  children: `Phone / WhatsApp`,
                                }),
                                (0, P.jsxs)(`a`, {
                                  href: `tel:${businessPhone.replace(/\s+/g, ``)}`,
                                  className: `inline-flex items-center gap-2.5 text-base font-semibold text-[#FAF8F3] hover:text-[#E7CC83] tabular-nums`,
                                  children: [
                                    (0, P.jsx)(fr, {
                                      className: `w-4 h-4 text-[#C9A34A]`,
                                    }),
                                    (0, P.jsx)(`span`, {
                                      children: businessPhone,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`p`, {
                                  className: `text-xs uppercase tracking-wider text-[#C9A34A] mb-1`,
                                  children: `Official Website`,
                                }),
                                (0, P.jsxs)(`a`, {
                                  href: `https://${businessWebsite}`,
                                  target: `_blank`,
                                  rel: `noopener noreferrer`,
                                  className: `inline-flex items-center gap-2.5 text-base font-medium text-[#FAF8F3] hover:text-[#E7CC83]`,
                                  children: [
                                    (0, P.jsx)(ir, {
                                      className: `w-4 h-4 text-[#C9A34A]`,
                                    }),
                                    (0, P.jsx)(`span`, {
                                      children: businessWebsite,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, P.jsx)(`div`, {
                              className: `pt-2`,
                              children: (0, P.jsxs)(`a`, {
                                href: serviceEnquiryUrl(
                                  `Direct Contact Enquiry`,
                                ),
                                target: `_blank`,
                                rel: `noopener noreferrer`,
                                className: `w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] font-semibold transition-colors`,
                                children: [
                                  (0, P.jsx)(N, {
                                    className: `w-4 h-4`,
                                  }),
                                  (0, P.jsx)(`span`, {
                                    children: `Message on WhatsApp Now`,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `bg-[#E9DFD0]/45 border border-[#171613]/10 rounded-2xl p-6 space-y-2`,
                      children: [
                        (0, P.jsx)(`h2`, {
                          className: `font-display text-lg font-semibold text-[#0E0D0B]`,
                          children: `How Enquiries Work`,
                        }),
                        (0, P.jsxs)(`p`, {
                          className: `text-sm text-[#171613]/75 leading-relaxed`,
                          children: [
                            `All project enquiries are routed directly to CREDCO’s official WhatsApp desk (`,
                            businessPhone,
                            `). Appointments and site visits are scheduled directly with our design and engineering team after your initial message.`,
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-7 bg-[#E9DFD0]/30 border border-[#171613]/12 rounded-2xl p-7 sm:p-10`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      className: `mb-7`,
                      children: [
                        (0, P.jsx)(`p`, {
                          className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                          children: `Project Enquiry Form`,
                        }),
                        (0, P.jsx)(`h2`, {
                          className: `font-display text-2xl sm:text-3xl font-semibold text-[#0E0D0B]`,
                          children: `Send Your Enquiry Directly to WhatsApp`,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-2 text-sm text-[#171613]/75`,
                          children: `When you submit this form, you will be redirected to WhatsApp with your project details pre-filled for immediate review.`,
                        }),
                      ],
                    }),
                    n &&
                      (0, P.jsxs)(`div`, {
                        role: `alert`,
                        className: `mb-6 p-4 rounded-lg bg-red-950/10 border border-red-700/30 text-red-900 text-sm flex items-start gap-2.5`,
                        children: [
                          (0, P.jsx)(er, {
                            className: `w-4 h-4 mt-0.5 shrink-0`,
                          }),
                          (0, P.jsx)(`span`, {
                            children: n,
                          }),
                        ],
                      }),
                    i &&
                      (0, P.jsxs)(`div`, {
                        className: `mb-6 p-5 rounded-xl bg-[#0E0D0B] text-[#FAF8F3] border border-[#C9A34A]/40 space-y-3`,
                        children: [
                          (0, P.jsxs)(`div`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, P.jsx)(tr, {
                                className: `w-5 h-5 text-[#C9A34A] mt-0.5 shrink-0`,
                              }),
                              (0, P.jsxs)(`div`, {
                                children: [
                                  (0, P.jsx)(`p`, {
                                    className: `font-semibold text-sm text-[#E7CC83]`,
                                    children: `Redirecting to WhatsApp (+91 9730006820)`,
                                  }),
                                  (0, P.jsx)(`p`, {
                                    className: `text-xs text-[#E9DFD0]/80 mt-1`,
                                    children: `Your formatted enquiry message is ready. If WhatsApp did not open automatically, click the button below to send your enquiry.`,
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, P.jsxs)(`a`, {
                            href: i,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C9A34A] text-[#0E0D0B] text-xs font-semibold hover:bg-[#E7CC83] transition-colors`,
                            children: [
                              (0, P.jsx)(`span`, {
                                children: `Open WhatsApp Chat`,
                              }),
                              (0, P.jsx)(rr, {
                                className: `w-3.5 h-3.5`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, P.jsxs)(`form`, {
                      onSubmit: o,
                      className: `space-y-5`,
                      noValidate: !0,
                      children: [
                        (0, P.jsxs)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-5`,
                          children: [
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `contact-name`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Full Name *`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `contact-name`,
                                  type: `text`,
                                  required: !0,
                                  value: e.name,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      name: n.target.value,
                                    }),
                                  placeholder: `Your full name`,
                                  className: s,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `contact-phone`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Phone / WhatsApp Number *`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `contact-phone`,
                                  type: `tel`,
                                  required: !0,
                                  value: e.phone,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      phone: n.target.value,
                                    }),
                                  placeholder: `+91 98XXXXXXXX`,
                                  className: s,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-5`,
                          children: [
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `contact-email`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Email Address`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `contact-email`,
                                  type: `email`,
                                  value: e.email,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      email: n.target.value,
                                    }),
                                  placeholder: `you@example.com`,
                                  className: s,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `contact-service`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Select Service *`,
                                }),
                                (0, P.jsxs)(`select`, {
                                  id: `contact-service`,
                                  value: e.service,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      service: n.target.value,
                                    }),
                                  className: s,
                                  children: [
                                    services.map((e) =>
                                      (0, P.jsx)(
                                        `option`,
                                        {
                                          value: e.title,
                                          children: e.title,
                                        },
                                        e.id,
                                      ),
                                    ),
                                    (0, P.jsx)(`option`, {
                                      value: `Complete Turnkey Construction & Interiors`,
                                      children: `Complete Turnkey Construction & Interiors`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-3 gap-5`,
                          children: [
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `contact-type`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Project Type`,
                                }),
                                (0, P.jsxs)(`select`, {
                                  id: `contact-type`,
                                  value: e.projectType,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      projectType: n.target.value,
                                    }),
                                  className: s,
                                  children: [
                                    (0, P.jsx)(`option`, {
                                      value: `Residential`,
                                      children: `Residential`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `Commercial`,
                                      children: `Commercial`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `Villa / Independent Home`,
                                      children: `Villa / Independent Home`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `Apartment`,
                                      children: `Apartment`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `Institutional / Industrial`,
                                      children: `Institutional / Industrial`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `contact-location`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Project Location`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `contact-location`,
                                  type: `text`,
                                  value: e.location,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      location: n.target.value,
                                    }),
                                  placeholder: `City / Area`,
                                  className: s,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `contact-budget`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Approximate Budget (Optional)`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `contact-budget`,
                                  type: `text`,
                                  value: e.budget,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      budget: n.target.value,
                                    }),
                                  placeholder: `e.g., 15L – 40L`,
                                  className: s,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsx)(`label`, {
                              htmlFor: `contact-preferred`,
                              className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                              children: `Preferred Contact Method`,
                            }),
                            (0, P.jsxs)(`select`, {
                              id: `contact-preferred`,
                              value: e.preferredContact,
                              onChange: (n) =>
                                t({
                                  ...e,
                                  preferredContact: n.target.value,
                                }),
                              className: s,
                              children: [
                                (0, P.jsx)(`option`, {
                                  value: `WhatsApp`,
                                  children: `WhatsApp Message`,
                                }),
                                (0, P.jsx)(`option`, {
                                  value: `Phone Call`,
                                  children: `Phone Call`,
                                }),
                                (0, P.jsx)(`option`, {
                                  value: `Email & WhatsApp`,
                                  children: `Email & WhatsApp`,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsx)(`label`, {
                              htmlFor: `contact-details`,
                              className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                              children: `Project Details`,
                            }),
                            (0, P.jsx)(`textarea`, {
                              id: `contact-details`,
                              rows: 4,
                              value: e.details,
                              onChange: (n) =>
                                t({
                                  ...e,
                                  details: n.target.value,
                                }),
                              placeholder: `Share plot size, carpet area, number of floors, or interior requirements...`,
                              className: s,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `pt-2`,
                          children: [
                            (0, P.jsxs)(`button`, {
                              type: `submit`,
                              className: `w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#0E0D0B] hover:bg-[#171613] text-[#FAF8F3] text-sm font-semibold transition-colors`,
                              children: [
                                (0, P.jsx)(N, {
                                  className: `w-4 h-4 text-[#C9A34A]`,
                                }),
                                (0, P.jsx)(`span`, {
                                  children: `Send Enquiry on WhatsApp`,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`p`, {
                              className: `mt-2.5 text-xs text-center text-[#171613]/65`,
                              children: [
                                `Clicking submit opens WhatsApp (`,
                                businessPhone,
                                `) with your pre-filled enquiry message.`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  ConsultationPage = () => {
    let [e, t] = (0, _.useState)({
        name: ``,
        phone: ``,
        email: ``,
        service: `Interior Design`,
        projectType: `Residential`,
        location: ``,
        budget: `₹15 Lakhs – ₹35 Lakhs`,
        details: ``,
      }),
      [n, r] = (0, _.useState)(null),
      [i, a] = (0, _.useState)(null),
      o = (t) => {
        if (
          (t.preventDefault(),
          r(null),
          !e.name.trim() || e.name.trim().length < 2)
        ) {
          r(`Please enter your name to proceed.`);
          return;
        }
        if (!isPhoneNumber(e.phone)) {
          r(`Please enter a valid mobile or phone number.`);
          return;
        }
        if (
          e.email.trim() &&
          !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.email.trim())
        ) {
          r(`Please provide a valid email address.`);
          return;
        }
        let n = whatsAppUrl(formatEnquiry(e));
        a(n);
        let i = document.createElement(`a`);
        ((i.href = n),
          (i.target = `_blank`),
          (i.rel = `noopener noreferrer`),
          document.body.appendChild(i),
          i.click(),
          document.body.removeChild(i));
      },
      s = `w-full px-4 py-3 rounded-lg bg-[#FAF8F3] border border-[#171613]/20 text-sm text-[#0E0D0B] placeholder:text-[#171613]/45 focus:outline-none focus:border-[#C9A34A] focus:ring-1 focus:ring-[#C9A34A] transition-colors`;
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Get Free Consultation | CREDCO – Building Your Dream Life`,
          description: `Book a free project consultation with CREDCO for building construction, interior design, exterior design, 3D elevation, renovation, or architectural planning.`,
          canonicalPath: `/consultation`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Free Project Consultation`,
          title: `Let's Discuss Your Dream Project.`,
          subtitle: `Tell us about your property, timeline and vision. Submitting prepares a structured project brief and redirects you straight to CREDCO on WhatsApp.`,
          backgroundImage: photos.heroBedroom,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Get Free Consultation`,
            },
          ],
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-16 sm:py-24`,
          children: (0, P.jsx)(`div`, {
            className: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: (0, P.jsxs)(`div`, {
              className: `grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start`,
              children: [
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-5 space-y-6`,
                  children: [
                    (0, P.jsxs)(`div`, {
                      children: [
                        (0, P.jsx)(`p`, {
                          className: `text-xs font-medium uppercase tracking-[0.2em] text-[#9A7A2C] mb-2`,
                          children: `What We Cover`,
                        }),
                        (0, P.jsx)(`h2`, {
                          className: `font-display text-3xl font-semibold text-[#0E0D0B]`,
                          children: `Your First Consultation Includes`,
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`ul`, {
                      className: `space-y-4 border-t border-[#171613]/10 pt-6 text-sm text-[#171613]/85`,
                      children: [
                        (0, P.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, P.jsx)(Xn, {
                              className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                            }),
                            (0, P.jsxs)(`span`, {
                              children: [
                                (0, P.jsx)(`strong`, {
                                  className: `text-[#0E0D0B]`,
                                  children: `Scope & Feasibility Review:`,
                                }),
                                ` Assessing your plot dimensions, apartment layout or renovation scope.`,
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, P.jsx)(Xn, {
                              className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                            }),
                            (0, P.jsxs)(`span`, {
                              children: [
                                (0, P.jsx)(`strong`, {
                                  className: `text-[#0E0D0B]`,
                                  children: `Design & Material Guidance:`,
                                }),
                                ` Practical advice across architectural planning, 3D elevations and interior finishes.`,
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, P.jsx)(Xn, {
                              className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                            }),
                            (0, P.jsxs)(`span`, {
                              children: [
                                (0, P.jsx)(`strong`, {
                                  className: `text-[#0E0D0B]`,
                                  children: `Budget & Timeline Alignment:`,
                                }),
                                ` Honest ballpark planning expectations before formal design agreements.`,
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`li`, {
                          className: `flex items-start gap-3`,
                          children: [
                            (0, P.jsx)(Xn, {
                              className: `w-4 h-4 text-[#C9A34A] mt-0.5 shrink-0`,
                            }),
                            (0, P.jsxs)(`span`, {
                              children: [
                                (0, P.jsx)(`strong`, {
                                  className: `text-[#0E0D0B]`,
                                  children: `Direct WhatsApp Follow-Up:`,
                                }),
                                ` Connect directly on `,
                                businessPhone,
                                ` without call-center queues.`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, P.jsxs)(`div`, {
                      className: `bg-[#0E0D0B] text-[#FAF8F3] rounded-xl p-6 border border-[#C9A34A]/25`,
                      children: [
                        (0, P.jsx)(`p`, {
                          className: `text-xs uppercase tracking-[0.18em] text-[#C9A34A]`,
                          children: `Instant Redirect Notice`,
                        }),
                        (0, P.jsx)(`p`, {
                          className: `mt-2 text-sm text-[#E9DFD0]/85 leading-relaxed`,
                          children: `To protect your time and avoid unmonitored web inboxes, submitting this consultation form launches WhatsApp with your project details pre-filled for immediate delivery.`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, P.jsxs)(`div`, {
                  className: `lg:col-span-7 bg-[#E9DFD0]/35 border border-[#171613]/12 rounded-2xl p-7 sm:p-10`,
                  children: [
                    (0, P.jsx)(`h2`, {
                      className: `font-display text-2xl sm:text-3xl font-semibold text-[#0E0D0B] mb-2`,
                      children: `Project Consultation Brief`,
                    }),
                    (0, P.jsx)(`p`, {
                      className: `text-sm text-[#171613]/75 mb-7`,
                      children: `Complete the fields below to generate your personalized WhatsApp consultation message.`,
                    }),
                    n &&
                      (0, P.jsxs)(`div`, {
                        role: `alert`,
                        className: `mb-6 p-4 rounded-lg bg-red-950/10 border border-red-700/30 text-red-900 text-sm flex items-start gap-2.5`,
                        children: [
                          (0, P.jsx)(er, {
                            className: `w-4 h-4 mt-0.5 shrink-0`,
                          }),
                          (0, P.jsx)(`span`, {
                            children: n,
                          }),
                        ],
                      }),
                    i &&
                      (0, P.jsxs)(`div`, {
                        className: `mb-6 p-5 rounded-xl bg-[#0E0D0B] text-[#FAF8F3] border border-[#C9A34A]/45 space-y-3`,
                        children: [
                          (0, P.jsxs)(`div`, {
                            className: `flex items-start gap-2.5`,
                            children: [
                              (0, P.jsx)(tr, {
                                className: `w-5 h-5 text-[#C9A34A] mt-0.5 shrink-0`,
                              }),
                              (0, P.jsxs)(`div`, {
                                children: [
                                  (0, P.jsx)(`p`, {
                                    className: `font-semibold text-sm text-[#E7CC83]`,
                                    children: `WhatsApp Message Prepared`,
                                  }),
                                  (0, P.jsxs)(`p`, {
                                    className: `text-xs text-[#E9DFD0]/80 mt-1`,
                                    children: [
                                      `You are being redirected to WhatsApp (`,
                                      `+91 9730006820`,
                                      `). If a popup blocker prevented automatic opening, click below to send your consultation brief.`,
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, P.jsxs)(`a`, {
                            href: i,
                            target: `_blank`,
                            rel: `noopener noreferrer`,
                            className: `inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#C9A34A] text-[#0E0D0B] text-xs font-semibold hover:bg-[#E7CC83]`,
                            children: [
                              (0, P.jsx)(`span`, {
                                children: `Continue to WhatsApp`,
                              }),
                              (0, P.jsx)(rr, {
                                className: `w-3.5 h-3.5`,
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, P.jsxs)(`form`, {
                      onSubmit: o,
                      className: `space-y-5`,
                      noValidate: !0,
                      children: [
                        (0, P.jsxs)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-5`,
                          children: [
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `cons-name`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Name *`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `cons-name`,
                                  type: `text`,
                                  required: !0,
                                  value: e.name,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      name: n.target.value,
                                    }),
                                  placeholder: `Enter your name`,
                                  className: s,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `cons-phone`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Mobile Number *`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `cons-phone`,
                                  type: `tel`,
                                  required: !0,
                                  value: e.phone,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      phone: n.target.value,
                                    }),
                                  placeholder: `+91 98XXXXXXXX`,
                                  className: s,
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-5`,
                          children: [
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `cons-email`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Email`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `cons-email`,
                                  type: `email`,
                                  value: e.email,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      email: n.target.value,
                                    }),
                                  placeholder: `you@example.com`,
                                  className: s,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `cons-service`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Interested Service *`,
                                }),
                                (0, P.jsxs)(`select`, {
                                  id: `cons-service`,
                                  value: e.service,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      service: n.target.value,
                                    }),
                                  className: s,
                                  children: [
                                    services.map((e) =>
                                      (0, P.jsx)(
                                        `option`,
                                        {
                                          value: e.title,
                                          children: e.title,
                                        },
                                        e.id,
                                      ),
                                    ),
                                    (0, P.jsx)(`option`, {
                                      value: `Full Turnkey Package`,
                                      children: `Full Turnkey Package`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-3 gap-5`,
                          children: [
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `cons-type`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Residential / Commercial`,
                                }),
                                (0, P.jsxs)(`select`, {
                                  id: `cons-type`,
                                  value: e.projectType,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      projectType: n.target.value,
                                    }),
                                  className: s,
                                  children: [
                                    (0, P.jsx)(`option`, {
                                      value: `Residential`,
                                      children: `Residential`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `Commercial`,
                                      children: `Commercial`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `cons-location`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Project Location`,
                                }),
                                (0, P.jsx)(`input`, {
                                  id: `cons-location`,
                                  type: `text`,
                                  value: e.location,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      location: n.target.value,
                                    }),
                                  placeholder: `City / Locality`,
                                  className: s,
                                }),
                              ],
                            }),
                            (0, P.jsxs)(`div`, {
                              children: [
                                (0, P.jsx)(`label`, {
                                  htmlFor: `cons-budget`,
                                  className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                                  children: `Budget Range`,
                                }),
                                (0, P.jsxs)(`select`, {
                                  id: `cons-budget`,
                                  value: e.budget,
                                  onChange: (n) =>
                                    t({
                                      ...e,
                                      budget: n.target.value,
                                    }),
                                  className: s,
                                  children: [
                                    (0, P.jsx)(`option`, {
                                      value: `Under ₹15 Lakhs`,
                                      children: `Under ₹15 Lakhs`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `₹15 Lakhs – ₹35 Lakhs`,
                                      children: `₹15 Lakhs – ₹35 Lakhs`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `₹35 Lakhs – ₹75 Lakhs`,
                                      children: `₹35 Lakhs – ₹75 Lakhs`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `₹75 Lakhs – ₹1.5 Crore`,
                                      children: `₹75 Lakhs – ₹1.5 Crore`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `Above ₹1.5 Crore`,
                                      children: `Above ₹1.5 Crore`,
                                    }),
                                    (0, P.jsx)(`option`, {
                                      value: `To Be Discussed`,
                                      children: `To Be Discussed`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`div`, {
                          children: [
                            (0, P.jsx)(`label`, {
                              htmlFor: `cons-req`,
                              className: `block text-xs font-semibold text-[#171613] mb-1.5`,
                              children: `Additional Requirements`,
                            }),
                            (0, P.jsx)(`textarea`, {
                              id: `cons-req`,
                              rows: 4,
                              value: e.details,
                              onChange: (n) =>
                                t({
                                  ...e,
                                  details: n.target.value,
                                }),
                              placeholder: `Tell us about your plot area, room count, Vaastu preference, or target timeline...`,
                              className: s,
                            }),
                          ],
                        }),
                        (0, P.jsxs)(`button`, {
                          type: `submit`,
                          className: `w-full inline-flex items-center justify-center gap-2.5 px-6 py-4 rounded-lg bg-[#C9A34A] hover:bg-[#E7CC83] text-[#0E0D0B] text-sm font-semibold transition-colors`,
                          children: [
                            (0, P.jsx)(N, {
                              className: `w-4 h-4`,
                            }),
                            (0, P.jsx)(`span`, {
                              children: `Submit & Send via WhatsApp`,
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
      ],
    });
  },
  Ai = [
    `All`,
    `Construction Services`,
    `Interior Design`,
    `Exterior & 3D Elevation`,
    `Renovation`,
    `Architectural Planning`,
    `Consultation, Budget & Timeline`,
  ],
  FaqPage = () => {
    let [e, t] = (0, _.useState)(`All`),
      n =
        e === `All`
          ? frequentlyAskedQuestions
          : frequentlyAskedQuestions.filter((t) => t.category === e);
    return (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Frequently Asked Questions | CREDCO – Construction & Interiors`,
          description: `Answers to common questions about CREDCO building construction, interior design, exterior design, renovation, 3D elevation, architectural planning, and budgets.`,
          canonicalPath: `/faq`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Frequently Asked Questions`,
          title: `Answers for Homeowners & Businesses`,
          subtitle: `Clarity on how CREDCO plans, designs, estimates and executes construction, renovation and interior design projects.`,
          backgroundImage: photos.heroResidence,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `FAQ`,
            },
          ],
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-14 sm:py-20`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-5xl mx-auto px-4 sm:px-6 lg:px-8`,
            children: [
              (0, P.jsx)(`div`, {
                role: `tablist`,
                "aria-label": `Filter FAQs by category`,
                className: `flex flex-wrap items-center gap-2 mb-10`,
                children: Ai.map((n) => {
                  let r = e === n;
                  return (0, P.jsx)(
                    `button`,
                    {
                      type: `button`,
                      role: `tab`,
                      "aria-selected": r,
                      onClick: () => t(n),
                      className: `px-3.5 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${r ? `bg-[#0E0D0B] text-[#E7CC83]` : `bg-[#E9DFD0]/55 text-[#171613] hover:bg-[#E9DFD0]`}`,
                      children: n,
                    },
                    n,
                  );
                }),
              }),
              (0, P.jsx)(FaqAccordion, {
                items: n,
              }),
            ],
          }),
        }),
        (0, P.jsx)(ConsultationBanner, {
          serviceContext: `FAQ Enquiry`,
        }),
      ],
    });
  },
  PrivacyPolicyPage = () =>
    (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Privacy Policy | CREDCO – Creative Design And Construction Pvt. Ltd.`,
          description: `Read CREDCO's privacy policy covering enquiry data handling, WhatsApp communication, and visitor information protection.`,
          canonicalPath: `/privacy-policy`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Legal & Privacy`,
          title: `Privacy Policy`,
          subtitle: `How ${companyName} handles project enquiry information shared through our website and WhatsApp channels.`,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Privacy Policy`,
            },
          ],
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-14 sm:py-20`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#171613]/85 text-base leading-relaxed`,
            children: [
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `1. Information You Provide`,
                  }),
                  (0, P.jsxs)(`p`, {
                    children: [
                      `When you fill out a consultation or contact form on `,
                      businessWebsite,
                      `, we ask for details such as your full name, phone or WhatsApp number, optional email address, service interest, project type, approximate location, optional budget range and project notes.`,
                    ],
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `2. How Your Enquiry Data Is Transmitted`,
                  }),
                  (0, P.jsxs)(`p`, {
                    children: [
                      `Our website forms format your enquiry locally in your browser and redirect you directly to CREDCO’s official WhatsApp number (`,
                      businessPhone,
                      `) so you can review and send your message yourself. We do not silently transmit or sell your form inputs to third-party lead aggregators.`,
                    ],
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `3. Purpose of Communication`,
                  }),
                  (0, P.jsx)(`p`, {
                    children: `Details you share with us over WhatsApp, phone or email are used strictly to respond to your architectural planning, construction, interior design, exterior design, 3D elevation or renovation requests, prepare scope discussions and schedule site consultations.`,
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `4. Data Protection & Retention`,
                  }),
                  (0, P.jsx)(`p`, {
                    children: `We treat client project drawings, site photos and contact information with confidentiality and retain correspondence only as long as reasonably necessary for ongoing consultations, project delivery or applicable business record obligations.`,
                  }),
                ],
              }),
              (0, P.jsxs)("div", {
                children: [
                  (0, P.jsx)("h2", {
                    className:
                      "font-display text-2xl font-semibold text-[#0E0D0B] mb-2",
                    children: "5. Browser Storage and External Services",
                  }),
                  (0, P.jsx)("p", {
                    children:
                      "This site uses session storage to remember whether the consultation popup has appeared in your browser tab. The hosting provider may process routine request logs to operate and secure the site. WhatsApp, Instagram, Facebook, and other linked services handle activity on their platforms under their own privacy policies.",
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `6. Contact Regarding Privacy`,
                  }),
                  (0, P.jsxs)(`p`, {
                    children: [
                      `To request updates or deletion of your shared contact details, please reach out directly via phone or WhatsApp at `,
                      businessPhone,
                      " or email ",
                      (0, P.jsx)("a", {
                        href: "mailto:" + EMAIL,
                        className: "underline",
                        children: EMAIL,
                      }),
                      `.`,
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    }),
  TermsPage = () =>
    (0, P.jsxs)(P.Fragment, {
      children: [
        (0, P.jsx)(PageMetadata, {
          title: `Terms & Conditions | CREDCO – Creative Design And Construction Pvt. Ltd.`,
          description: `Review the terms and conditions governing website usage, architectural concepts, project proposals, and service engagements with CREDCO.`,
          canonicalPath: `/terms-and-conditions`,
        }),
        (0, P.jsx)(PageHero, {
          kicker: `Legal Terms`,
          title: `Terms & Conditions`,
          subtitle: `General terms governing use of ${businessWebsite} and preliminary design or construction enquiries with ${companyName}.`,
          breadcrumbs: [
            {
              label: `Home`,
              to: `/`,
            },
            {
              label: `Terms & Conditions`,
            },
          ],
        }),
        (0, P.jsx)(`section`, {
          className: `bg-[#FAF8F3] py-14 sm:py-20`,
          children: (0, P.jsxs)(`div`, {
            className: `max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-[#171613]/85 text-base leading-relaxed`,
            children: [
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `1. Acceptance of Terms`,
                  }),
                  (0, P.jsxs)(`p`, {
                    children: [
                      `By accessing `,
                      businessWebsite,
                      `, you agree to these Terms & Conditions. All architectural visuals, editorial articles and project descriptions presented on this site are for informational and illustrative purposes.`,
                    ],
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `2. Demonstration Concepts & Estimates`,
                  }),
                  (0, P.jsx)(`p`, {
                    children: `Sample showcase concepts, 3D elevation previews and gallery visuals illustrate design possibilities. Any timeline or budget discussed during initial WhatsApp or phone consultations is preliminary; formal project pricing, material specifications and delivery schedules are governed solely by written project agreements signed by both parties.`,
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `3. Statutory Approvals & Site Conditions`,
                  }),
                  (0, P.jsx)(`p`, {
                    children: `Municipal building permits, structural certifications and site-specific engineering clearances are subject to local authority regulations and formal written scope agreements. CREDCO does not represent unverified statutory approvals on this website.`,
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `4. Intellectual Property`,
                  }),
                  (0, P.jsxs)(`p`, {
                    children: [
                      `The CREDCO name, architectural emblem, website copy, original floor plans, 3D renders and interior design concepts prepared by `,
                      companyName,
                      ` remain our intellectual property unless explicitly transferred in writing upon full project settlement.`,
                    ],
                  }),
                ],
              }),
              (0, P.jsxs)(`div`, {
                children: [
                  (0, P.jsx)(`h2`, {
                    className: `font-display text-2xl font-semibold text-[#0E0D0B] mb-2`,
                    children: `5. Contact`,
                  }),
                  (0, P.jsxs)(`p`, {
                    children: [
                      "Questions regarding these terms may be directed to ",
                      companyName,
                      " at ",
                      businessPhone,
                      " or ",
                      (0, P.jsx)("a", {
                        href: "mailto:" + EMAIL,
                        className: "underline",
                        children: EMAIL,
                      }),
                      ".",
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
function ScrollToTopOnNavigate() {
  let { pathname: e } = vt();
  return (
    (0, _.useEffect)(() => {
      window.scrollTo({
        top: 0,
        behavior: `auto`,
      });
    }, [e]),
    null
  );
}
function NotFoundPage() {
  return (0, P.jsxs)(`div`, {
    className: `min-h-[75vh] bg-[#FAF8F3] pt-36 pb-20 px-4 flex flex-col items-center justify-center text-center`,
    children: [
      (0, P.jsx)(`p`, {
        className: `text-xs font-semibold uppercase tracking-[0.22em] text-[#C9A34A] mb-3`,
        children: `Page Not Found`,
      }),
      (0, P.jsx)(`h1`, {
        className: `font-display text-4xl font-semibold text-[#0E0D0B]`,
        children: `We Could Not Find That Page`,
      }),
      (0, P.jsx)(`p`, {
        className: `mt-3 text-sm sm:text-base text-[#171613]/75 max-w-md`,
        children: `Return to the CREDCO homepage or explore our services and consultation options.`,
      }),
      (0, P.jsxs)(`div`, {
        className: `mt-7 flex flex-wrap gap-3 justify-center`,
        children: [
          (0, P.jsx)(k, {
            to: `/`,
            className: `px-6 py-3 rounded-lg bg-[#0E0D0B] text-[#FAF8F3] text-sm font-semibold hover:bg-[#171613]`,
            children: `Back to Home`,
          }),
          (0, P.jsx)(k, {
            to: `/consultation`,
            className: `px-6 py-3 rounded-lg bg-[#C9A34A] text-[#0E0D0B] text-sm font-semibold hover:bg-[#E7CC83]`,
            children: `Get Free Consultation`,
          }),
        ],
      }),
    ],
  });
}
function CredcoApp() {
  return (0, P.jsxs)(An, {
    children: [
      (0, P.jsx)(ScrollToTopOnNavigate, {}),
      (0, P.jsxs)(`div`, {
        className: `min-h-screen flex flex-col bg-[#FAF8F3] text-[#171613]`,
        children: [
          (0, P.jsx)(SiteHeader, {}),
          (0, P.jsx)(`main`, {
            className: `flex-1`,
            children: (0, P.jsxs)(Kt, {
              children: [
                (0, P.jsx)(D, {
                  path: `/`,
                  element: (0, P.jsx)(HomePage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/about`,
                  element: (0, P.jsx)(AboutPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/services`,
                  element: (0, P.jsx)(ServicesPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/services/building-construction`,
                  element: (0, P.jsx)(BuildingConstructionPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/services/interior-design`,
                  element: (0, P.jsx)(InteriorDesignPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/services/exterior-design`,
                  element: (0, P.jsx)(ExteriorDesignPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/services/renovation-remodeling`,
                  element: (0, P.jsx)(RenovationPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/services/3d-elevation`,
                  element: (0, P.jsx)(ElevationPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/services/architectural-planning`,
                  element: (0, P.jsx)(ArchitecturalPlanningPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/projects`,
                  element: (0, P.jsx)(ProjectsPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/projects/:slug`,
                  element: (0, P.jsx)(ProjectPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/gallery`,
                  element: (0, P.jsx)(GalleryPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/process`,
                  element: (0, P.jsx)(ProcessPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/blog`,
                  element: (0, P.jsx)(BlogPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/blog/:slug`,
                  element: (0, P.jsx)(BlogArticlePage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/reviews`,
                  element: (0, P.jsx)(ReviewsPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/contact`,
                  element: (0, P.jsx)(ContactPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/consultation`,
                  element: (0, P.jsx)(ConsultationPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/faq`,
                  element: (0, P.jsx)(FaqPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/privacy-policy`,
                  element: (0, P.jsx)(PrivacyPolicyPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `/terms-and-conditions`,
                  element: (0, P.jsx)(TermsPage, {}),
                }),
                (0, P.jsx)(D, {
                  path: `*`,
                  element: (0, P.jsxs)(P.Fragment, {
                    children: [
                      (0, P.jsx)(PageMetadata, {
                        title: "Page Not Found | CREDCO",
                        description:
                          "The page could not be found. Return to the CREDCO homepage or explore our services.",
                        noIndex: true,
                      }),
                      (0, P.jsx)(NotFoundPage, {}),
                    ],
                  }),
                }),
              ],
            }),
          }),
          (0, P.jsx)(SiteFooter, {}),
          (0, P.jsx)(MobileContactNavigation, {}),
          (0, P.jsx)(WelcomePopup, {}),
        ],
      }),
    ],
  });
}
const path = window.location.pathname;
if (path.endsWith(".html")) {
  const prettyPath = path === "/index.html" ? "/" : path.slice(0, -5);
  window.history.replaceState(
    window.history.state,
    "",
    prettyPath + window.location.search + window.location.hash,
  );
}
(0, yr.createRoot)(document.getElementById("root")).render(
  (0, P.jsx)(CredcoApp, {}),
);
