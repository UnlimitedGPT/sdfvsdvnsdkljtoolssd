const tools = [
  {
    link: "https://get.scribehow.com/lp-1/?via=unlimitedgpt",
    name: "Scribe",
    description: "Experience Scribe's magic: turn any process into captivating step-by-step guides instantly. Effortlessly share expertise with text, screenshots, and captivating tutorials.",
    category: "Presentation",
    logo: "https://i.ibb.co/xzmhXdq/Screenshot-2023-06-10-143836.png",
    aff:true
  },
  {
    link: "https://www.codefy.ai/",
    name: "Codefy.ai",
    description: "Codefy.ai revolutionizes the game with its cutting-edge AI capabilities. Harness its power to gain an upper hand. Propel your",
    category: "Coding",
    logo: "https://i.ibb.co/jTD6msD/Screenshot-2023-06-10-143304.png"
  },
  {
    link: "https://www.freepik.com/ai/image-generator",
    name: "Freepik",
    description: "Unlock boundless creativity at Freepik! Explore a wealth of top-notch photos, vectors, videos, and mockups all in one place. Find",
    category: "Image Generator",
    logo: "https://i.ibb.co/j3J1q6f/Screenshot-2023-06-09-224205.png"
  },
  {
    link: "https://webscape.ai/",
    name: "Webscape",
    description: "Meet Webscape, your web companion. Tap into the brilliance of AI that understands your context, effortlessly helping you access, search,",
    category: "Productivity",
    logo: "https://i.ibb.co/J3g4H1N/Screenshot-2023-06-09-223531.png"
  },
  {
    link: "https://getimg.ai/?via=unlimitedgpt",
    name: "Getimg.ai",
    description: "Enter the captivating realm of Getimg.ai, where AI wields its magic to create extraordinary art, photos, images, and avatars.",
    category: "Image Generator",
    logo: "https://i.ibb.co/fxJYkCZ/Screenshot-2023-06-09-222846.png",
    Hot:true,
  },
  {
    link: "https://stablecog.com/",
    name: "Stablecog",
    description: "Stablecog has the incredible ability to depict anything in thousands of captivating styles. With the power of AI, it can",
    category: "Image Generator",
    logo: "https://i.ibb.co/Hzryyns/Screenshot-2023-06-08-221757.png"
  },
  {
    link: "https://synthesys.io/",
    name: "Synthesys",
    description: "Create your future professional AI voiceover or AI video effortlessly using Synthesys. A few clicks are all it takes to",
    category: "Speech AI",
    logo: "https://i.ibb.co/Br6Xx2z/Screenshot-2023-06-08-215407.png"
  },
  {
    link: "https://speechify.com/",
    name: "Speechify",
    description: "Unleash Speechify, the ultimate AI reading companion. Conquer any written material effortlessly with our state-of-the-art text-to-speech technology.",
    category: "Speech AI",
    logo: "https://i.ibb.co/jg0Xvbj/Screenshot-2023-06-08-214740.png"
  },
  {
    link: "https://www.logoai.com/?coupon=unlimitedgpt",
    name: "Logoai",
    description: "Unleash Logoai's magic: an AI-powered logo maker and brand designer. Get a custom logo, matching stationery, and a brand that",
    category: "Image Generator",
    logo: "https://i.ibb.co/mtcGHFm/Screenshot-2023-06-07-134238.png",
    aff:true
  },
  {
    link: "https://cohere.com/",
    name: "Cohere",
    description: "Discover the boundless possibilities of integrating AI into your creations with Cohere. Unleashing the potential of Cohere's models, you can",
    category: "Writing",
    logo: "https://i.ibb.co/x6rSqvR/Screenshot-2023-06-07-133527.png"
  },
  {
    link: "https://www.typewise.app/",
    name: "Typewise",
    description: "Typewise revolutionizes customer service and sales, skyrocketing productivity by 2-3 times. It's the ultimate AI writing solution for teams in",
    category: "Writing",
    logo: "https://i.ibb.co/DfT2tGw/Screenshot-2023-06-07-132514.png"
  },
  {
    link: "https://yatterplus.in/",
    name: "Yatter Plus",
    description: "Introducing Yatter Plus: your AI-powered Whatsapp assistant. Simplify your life with instant answers, language translation, math calculations, and more. Get",
    category: "Communication",
    logo: "https://i.ibb.co/x66XCCX/Screenshot-2023-06-06-131331.png"
  },
  {
    link: "https://uncody.com/",
    name: "Uncody",
    description: "Uncody's revolutionary AI website builder crafts mesmerizing landing pages that captivate and compel. Effortlessly construct a polished and alluring webpage,",
    category: "Coding",
    logo: "https://i.ibb.co/gJHgtQL/Screenshot-2023-06-06-130745.png"
  },
  {
    link: "https://octaneai.grsm.io/qsumva54u32x",
    name: "Octane AI",
    description: "Octane AI: Unleash the power of Marketing AI for Shopify & E-commerce. Discover product matches and captivating quizzes for your brand.",
    category: "Marketing",
    logo: "https://i.ibb.co/8NzXzTb/Screenshot-2023-06-06-130302.png"
  },
  {
    link: "https://warmer.ai/",
    name: "WARMER.AI",
    description: "WARMER.AI, the mastermind behind lightning-fast personalized AI email writing, can launch your cold emails into the stratosphere. Unleash the",
    category: "Sales",
    logo: "https://i.ibb.co/C76DPMx/Screenshot-2023-06-05-175828.png"
  },
  {
    link: "https://beta.monic.ai/",
    name: "Monic.ai",
    description: "Monic.ai transforms your textbooks, articles, slides, and notes into thrilling mock exams. Experience the exhilaration of saving hours in",
    category: "Learning",
    logo: "https://i.ibb.co/PGVpSPT/Screenshot-2023-06-05-175400.png"
  },
  {
    link: "https://paperpal.com/",
    name: "Paperpal",
    description: "Discover Paperpal: Unleash the future of academic writing. Experience real-time, subject-specific language suggestions for faster, better writing success.",
    category: "Learning",
    logo: "https://i.ibb.co/dML4KwG/Screenshot-2023-06-05-174001.png"
  },
  {
    link: "https://www.opus.pro/",
    name: "Opus Clip",
    description: "Meet Opus Clip, the ultimate AI copilot for video editing. It magically turns long videos into captivating shorts with a",
    category: "Video Editor",
    logo: "https://i.ibb.co/LRjWPMC/Screenshot-2023-06-04-225835.png"
  },
  {
    link: "https://leady.com/",
    name: "Leady",
    description: "Introducing Leady, the lead wizard: discover hot prospects, effortlessly generate leads from your website, and turn visitors into sales. Leady's",
    category: "Sales",
    logo: "https://i.ibb.co/0GZ29YY/Screenshot-2023-06-04-225414.png"
  },
  {
    link: "https://www.lusha.com/",
    name: "Lusha",
    description: "Lusha helps you connect with the perfect decision makers. Boost your sales and seal more deals using highly precise B2B",
    category: "Sales",
    logo: "https://i.ibb.co/mqPj7dR/Screenshot-2023-06-04-224826.png"
  },
  {
    link: "https://albert.ai/",
    name: "Albert AI",
    description: "Albert AI, the self-learning marketing ally, conquers digital advertising challenges with speed, versatility, and autonomy.",
    category: "Marketing",
    logo: "https://i.ibb.co/F3Sz9VT/Screenshot-2023-06-03-173840.png"
  },
  {
    link: "https://signum.ai/",
    name: "Signum.AI",
    description: "Signum.AI detects buyer intents by analyzing public data on your CRM contacts, enabling precise timing for effective outreach.",
    category: "Sales",
    logo: "https://i.ibb.co/SR92R8Q/Screenshot-2023-06-03-173340.png"
  },
  {
    link: "https://www.conversica.com/",
    name: "Conversica",
    description: "Conversica: AI redefining business. Revenue Digital Assistants, powered by Conversational AI and leading language models like GPT, drive conversions with",
    category: "Sales",
    logo: "https://i.ibb.co/zb8Fh6S/Screenshot-2023-06-03-173021.png"
  },
  {
    link: "https://pimeyes.com/",
    name: "PimEyes",
    description: "PimEyes, the face search engine, is your photo detective. Snap a picture and uncover its hidden journey. Find out where",
    category: "Personal",
    logo: "https://i.ibb.co/4TCYPp6/Screenshot-2023-06-01-230119.png"
  },
  {
    link: "https://contlo.com/",
    name: "Contlo",
    description: "Welcome to the world of autonomous generative promotion! Contlo, the Next-Gen marketing platform, empowers your brand's AI model and autonomous",
    category: "Marketing",
    logo: "https://i.ibb.co/vZCf065/Screenshot-2023-06-01-225647.png"
  },
  {
    link: "https://www.dora.run/",
    name: "Dora",
    description: "Dora effortlessly crafts and showcases captivating 3D and animated websites, sans the need for complex coding.",
    category: "Design",
    logo: "https://i.ibb.co/QfwYtRc/Screenshot-2023-06-01-225320.png"
  },
  {
    link: "https://alphy.app/",
    name: "Alphy",
    description: "Meet Alphy, the ultimate content companion. Share a YouTube or Twitter link, and Alphy transcribes, summarizes, and prepares for questioning.",
    category: "Speech AI",
    logo: "https://i.ibb.co/p2hmk34/Screenshot-2023-05-31-223557.png"
  },
  {
    link: "https://www.stork.ai/",
    name: "Stork",
    description: "Stork: The ultimate AI-powered collaboration tool for hybrid teams. It offers rich media messaging, advanced video and voice conferencing, auto-transcribing,",
    category: "Business",
    logo: "https://i.ibb.co/txFmPQP/Screenshot-2023-06-07-235802.png"
  },
  {
    link: "https://motion.plask.ai/",
    name: "Plask",
    description: "Plask, the AI-powered mocap animation tool, simplifies 3D motion work. Capture, edit, play, and share animations in minutes, all from",
    category: "Video Editor",
    logo: "https://i.ibb.co/d5Tdct4/Screenshot-2023-05-31-222918.png"
  },
  {
    link: "https://www.tango.us/",
    name: "Tango",
    description: "Screen sharing won't do the trick. Tango works its magic by transforming your knowledge into clear, easy-to-follow instructions in an",
    category: "Presentation",
    logo: "https://i.ibb.co/0V02QXd/Screenshot-2023-05-31-222430.png"
  },
  {
    link: "https://monkeylearn.com/",
    name: "MonkeyLearn",
    description: "MonkeyLearn revolutionizes text analytics with its intuitive no-code platform. Discover the power to effortlessly organize, categorize, and visualize valuable customer",
    category: "Business",
    logo: "https://i.ibb.co/MMVGRM9/Screenshot-2023-05-30-164443.png"
  },
  {
    link: "https://www.probeai.app/",
    name: "ProbeAI",
    description: "ProbeAI, the ultimate AI copilot for Data Analysts, revolutionizes SQL code generation, table selection, and optimization, providing unparalleled support and",
    category: "Coding",
    logo: "https://i.ibb.co/WpzrtwC/Screenshot-2023-05-30-164057.png"
  },
  {
    link: "https://www.ellie.ai/",
    name: "Ellie.ai",
    description: "Ellie.ai: Mastering data products with precision. Understand your business demands and validate product concepts prior to constructing data pipelines.",
    category: "Productivity",
    logo: "https://i.ibb.co/YTg987F/Screenshot-2023-05-30-163650.png"
  },
  {
    link: "https://standuply.com/",
    name: "Standuply",
    description: "Standuply, the Agile Development Guru, guides teams toward triumph. Standuply bridges the gap between your team and company wisdom, connecting",
    category: "Productivity",
    logo: "https://i.ibb.co/44NXjPg/Screenshot-2023-05-30-163323.png"
  },
  {
    link: "https://www.genius.design/",
    name: "Genius by Diagram",
    description: "Diagram's Genius is a cutting-edge design tool that transports you into the future. Prepare to ignite your imagination as you",
    category: "Design",
    logo: "https://i.ibb.co/XjxgMxw/Screenshot-2023-05-30-162954.png"
  },
  {
    link: "https://whimsical.com/",
    name: "Whimsical",
    description: "Step into a captivating realm of visual collaboration at Whimsical, where a delightful fusion of diagramming, whiteboarding, and countless other",
    category: "Productivity",
    logo: "https://i.ibb.co/HrTpX2g/Screenshot-2023-05-30-162445.png"
  },
  {
    link: "https://www.hypertype.co/",
    name: "HyperType",
    description: "Introducing Hypertype, an extraordinary AI-driven tool that eliminates the need for endless searching. This cutting-edge engine effortlessly retrieves the most",
    category: "Writing",
    logo: "https://i.ibb.co/47YhYZ4/Screenshot-2023-05-29-204921.png"
  },
  {
    link: "https://www.kraftful.com/",
    name: "Kraftful",
    description: "Introducing Kraftful, the Product Research ChatGPT! Experience the magic of Kraftful's AI-powered summaries that analyze user feedback, saving you countless",
    category: "Productivity",
    logo: "https://i.ibb.co/zH7gXXq/Screenshot-2023-05-29-204514.png"
  },
  {
    link: "https://www.stylized.ai/",
    name: "Stylized",
    description: "Introducing Stylized, the revolutionary way to capture breathtaking product photos. Unleash your creativity with professional-grade imagery, all without the need",
    category: "Design",
    logo: "https://i.ibb.co/61QMm3g/Screenshot-2023-05-29-203725.png"
  },
  {
    link: "https://www.shortform.com/",
    name: "Shortform",
    description: "Unlock boundless knowledge and elevate your intellect with Shortform. Uncover 1000+ nonfiction book guides, revealing exclusive insights and key points",
    category: "Productivity",
    logo: "https://i.ibb.co/w7XZpGQ/Screenshot-2023-05-29-202850.png"
  },
  {
    link: "https://chat.dante-ai.com/?via=unlimitedgpt",
    name: "Dante",
    description: "Experience the fascinating world of Dante, where personalized GPT chatbots are crafted exclusively for you. Say goodbye to complex coding",
    category: "Coding",
    logo: "https://i.ibb.co/gFC6DHh/Screenshot-2023-05-28-220131.png",
    aff:true
  },
  {
    link: "https://www.gatsby.ai/",
    name: "Gatsby",
    description: "Gatsby, the game-changing ambassador automation platform, streamlines Instagram ambassador programs for global merchants",
    category: "Automation",
    logo: "https://i.ibb.co/R3mGm4V/Screenshot-2023-05-28-215654.png"
  },
  {
    link: "https://uizard.io/",
    name: "Uizard",
    description: "Uizard empowers individuals to effortlessly create captivating interfaces, mockups, mobile apps, web apps, prototypes, websites, and wireframes within minutes. Transform",
    category: "Design",
    logo: "https://i.ibb.co/hKv1JNK/Screenshot-2023-05-28-214610.png"
  },
  {
    link: "https://gerwin.io/",
    name: "Gerwin",
    description: "Gerwin is your creative companion, crafting one-of-a-kind content using the power of Artificial Intelligence. Unleash your writing potential at warp",
    category: "Writing",
    logo: "https://i.ibb.co/ZzpQ4qd/Screenshot-2023-05-27-220921.png"
  },
  {
    link: "https://replicate.com/",
    name: "Replicate",
    description: "Replicate revolutionizes the world of machine learning, making it effortlessly accessible. Unleash the power of cloud computing to effortlessly run",
    category: "Automation",
    logo: "https://i.ibb.co/fGbTmHy/Screenshot-2023-05-27-220538.png"
  },
  {
    link: "https://lightning.ai/",
    name: "LightningAI",
    description: "Experience the lightning-fast power of LightningAI for seamless AI training, deployment, and development with PyTorch. Say goodbye to headaches as",
    category: "Coding",
    logo: "https://i.ibb.co/27Zn0xj/Screenshot-2023-05-27-215923.png"
  },
  {
    link: "https://httpie.io/",
    name: "Httpie",
    description: "Httpie is revolutionizing the world of APIs, effortlessly bridging the gap between developers and the cutting-edge tools they create. With",
    category: "Coding",
    logo: "https://i.ibb.co/HTD3MZz/Screenshot-2023-05-27-215145.png"
  },
  {
    link: "https://getliner.com/",
    name: "Liner",
    description: "Liner: Your all-in-one tool for effortless information gathering and searching. Utilizing LINER AI, it generates reliable answers, suggests further searches,",
    category: "Productivity",
    logo: "https://i.ibb.co/RTFFj3c/Screenshot-2023-05-26-214951.png"
  },
  {
    link: "https://www.chatshape.com/?via=unlimitedgpt",
    name: "ChatShape",
    description: "ChatShape, an innovative AI solution, transforms your website into an engaging hub. Seamlessly integrating a chatbot crafted from your website,",
    category: "Coding",
    logo: "https://i.ibb.co/PcLttLr/Screenshot-2023-05-26-213548.png",
    aff:true
  },
  {
    link: "https://www.nvidia.com/en-us/studio/canvas/",
    name: "NVIDIA Canvas",
    description: "With the help of advanced AI technology, NVIDIA Canvas transforms basic brushstrokes into breathtakingly lifelike landscapes. Effortlessly craft vibrant backgrounds",
    category: "Design",
    logo: "https://i.ibb.co/4ZQKPrt/Screenshot-2023-05-26-213209.png"
  },
  {
    link: "https://liner.ai/",
    name: "Liner.ai",
    description: "Unleash the magic of Liner.ai: effortless machine learning in a few clicks. Train your ML models effortlessly with this",
    category: "Coding",
    logo: "https://i.ibb.co/hHfbRvX/Screenshot-2023-05-26-212704.png"
  },
  {
    link: "https://designer.microsoft.com/",
    name: "Designer",
    description: "Discover Designer: the graphic design app that unleashes your creativity. With Microsoft Designer, create stunning visuals effortlessly using AI-powered wizardry,",
    category: "Design",
    logo: "https://i.ibb.co/JcQGXbK/Screenshot-2023-05-25-131221.png"
  },
  {
    link: "https://brandmark.io/",
    name: "BrandMark",
    description: "Transform your business with Brandmark's expertise in creating distinctive, professional logos. Unlock the potential of your brand through captivating designs",
    category: "Design",
    logo: "https://i.ibb.co/8mqHqxh/Screenshot-2023-05-24-201454.png"
  },
  {
    link: "https://teachablemachine.withgoogle.com/",
    name: "Teachable Machine",
    description: "Transform your computer into a perceptive wizard using Teachable Machine. Train it to recognize your personalized images, sounds, and poses",
    category: "Coding",
    logo: "https://i.ibb.co/brZ715M/Screenshot-2023-05-24-200945.png"
  },
  {
    link: "https://www.smartscout.com/",
    name: "SmartScout",
    description: "Discover untapped product opportunities on Amazon with SmartScout, outshining other tools with its extensive data points. Make profitable decisions effortlessly",
    category: "Sales",
    logo: "https://i.ibb.co/CV2gRDN/Screenshot-2023-05-24-200134.png"
  },
  {
    link: "https://www.sweephy.com/",
    name: "Sweephy",
    description: "Sweephy: Unleash the value hidden in your data. Let Sweephy handle the data mess and unlock pure business insights. Discover",
    category: "Coding",
    logo: "https://i.ibb.co/5RzzC1Y/Screenshot-2023-05-24-000623.png"
  },
  {
    link: "https://flatlogic.com/",
    name: "Flatlogic",
    description: "Effortlessly build stunning full-stack web apps with Flatlogic. Choose your stack, connect to Github, and deploy in minutes. Craft dynamic",
    category: "Coding",
    logo: "https://i.ibb.co/x3DpPYj/Screenshot-2023-05-23-235652.png"
  },
  {
    link: "https://www.runpod.io/",
    name: "RunPod",
    description: "Introducing RunPod.io, the ultimate productivity tool designed to revolutionize your workflow! Say goodbye to scattered notes, endless browser tabs,",
    category: "Coding",
    logo: "https://i.ibb.co/ZLfJH4r/Screenshot-2023-05-23-235157.png"
  },
  {
    link: "https://yous.ai/",
    name: "Yous",
    description: "Experience the thrill of effortless communication with AI-based translators. Engage in dynamic audio/video meetings, phone calls, and chats with",
    category: "Communication",
    logo: "https://i.ibb.co/4WHtrYb/Screenshot-2023-05-23-004700.png"
  },
  {
    link: "https://exceed.ai/",
    name: "Exceed.ai by Genesys",
    description: "Embrace Exceed.ai's mesmerizing Conversational AI to turbocharge lead conversions. Automate, engage, qualify, and schedule meetings at scale. Seamlessly interact",
    category: "Customer Service",
    logo: "https://i.ibb.co/qxy500j/Screenshot-2023-05-23-004204.png"
  },
  {
    link: "https://www.haptik.ai/",
    name: "Haptik",
    description: "Transform conversations into your ultimate asset for business success with Haptik. Engage customers on popular messaging channels like WhatsApp, using",
    category: "Customer Service",
    logo: "https://i.ibb.co/Jz1FJyJ/Screenshot-2023-05-23-003612.png"
  },
  {
    link: "https://kore.ai/",
    name: "Kore.ai",
    description: "Transforming Experiences: Discover Kore.ai's potential to deliver remarkable, personalized service encounters for customers and employees. Harness Conversational AI-powered voice",
    category: "Customer Service",
    logo: "https://i.ibb.co/RyhBxFs/Screenshot-2023-05-23-003109.png"
  },
  {
    link: "https://glossai.co/",
    name: "GlossAi",
    description: "Watch as GlossAi effortlessly transforms your videos, podcasts, and training materials into a captivating array of shareable gems. Delight in",
    category: "Video Generator",
    logo: "https://i.ibb.co/JQr3M8s/Screenshot-2023-05-23-002619.png"
  },
  {
    link: "https://summarizeit.io/",
    name: "SummarizeIt",
    description: "Level up your productivity with SummarizeIt's AI-powered summaries. Ditch time-consuming videos and embrace concise knowledge. Perfect for busy professionals and",
    category: "Productivity",
    logo: "https://i.ibb.co/PtMy4B2/Screenshot-2023-05-23-002105.png"
  },
  {
    link: "https://starryai.com/",
    name: "Starryai",
    description: "Starryai possesses the mesmerizing ability to conjure art through the power of AI. Merely articulate the vision that resides within",
    category: "Image Generator",
    logo: "https://i.ibb.co/fCVbxQ3/Screenshot-2023-05-23-001721.png"
  },
  {
    link: "https://deepai.org/",
    name: "DeepAI",
    description: "DeepAI, a marvel of artificial intelligence, empowers your creativity. With its AI-driven tools, DeepAI brings your ideas to life. Simply",
    category: "Image Generator",
    logo: "https://i.ibb.co/zX11nbG/Screenshot-2023-05-23-001427.png"
  },
  {
    link: "https://www.bluewillow.ai/",
    name: "BlueWillow",
    description: "Embark on a captivating journey with BlueWillow's AI artwork generator. Simply describe your desired image, and BlueWillow's powerful tool will",
    category: "Image Generator",
    logo: "https://i.ibb.co/KVyFZ3t/Screenshot-2023-05-23-000829.png",
    Hot:true,
  },
  {
    link: "https://pebblely.com/",
    name: "Pebblely",
    description: "Pebblely unleashes effortless creativity, transforming products into captivating Instagram-ready photos in seconds. Craft multiple eye-catching product shots in various settings",
    category: "Image Generator",
    logo: "https://i.ibb.co/9rXQK97/Screenshot-2023-05-23-000447.png"
  },
  {
    link: "https://stability.ai/",
    name: "Stability.ai",
    description: "Stability.ai, an AI by and for the people, unlocks humanity's potential. Empower your creativity with Stability.ai's text-to-image suite",
    category: "Image Generator",
    logo: "https://i.ibb.co/N6DNk1M/Screenshot-2023-05-23-000021.png"
  },
  {
    link: "https://www.askviable.com/",
    name: "Viable",
    description: "With Viable, you can effortlessly unlock the potential of your data, saving countless hours by harnessing the brilliance of AI",
    category: "Business",
    logo: "https://i.ibb.co/J5CfT32/Screenshot-2023-05-22-131930.png"
  },
  {
    link: "https://simplified.com/?fpr=mohammed-sadiq39",
    name: "Simplified",
    description: "Simplified: one app, infinite creativity. Unleash AI's power for graphics, video editing, writing, social media, and more. Empowering all to",
    category: "Business",
    logo: "https://i.ibb.co/yysVJSY/Screenshot-2023-05-22-131631.png",
    aff:true
  },
  {
    link: "https://www.ryterai.com/?via=unlimitedgpt",
    name: "RyterAI",
    description: "Unleash limitless creativity with RyterAI. From captivating artwork to innovative ideas, AI empowers you. Address feedback, generate templates, and gain",
    category: "Writing",
    logo: "https://i.ibb.co/FBqS43P/Screenshot-2023-05-22-131149.png",
    aff:true
  },
  {
    link: "https://prowritingaid.com/",
    name: "ProWritingAid",
    description: "Unleash the power of ProWritingAid and watch your words transcend. Write with confidence and ease, guided by its AI-driven analysis",
    category: "Writing",
    logo: "https://i.ibb.co/JqmSc0g/Screenshot-2023-05-22-130805.png"
  },
  {
    link: "https://penelopeai.com/",
    name: "Penelope",
    description: "Penelope, the wondrous markdown editor, guides users on a seamless writing journey. With its remarkable AI capabilities, Penelope goes beyond",
    category: "Writing",
    logo: "https://i.ibb.co/SPKKBfp/Screenshot-2023-05-22-130311.png"
  },
  {
    link: "https://www.helloscribe.ai/",
    name: "HelloScribe",
    description: "HelloScribe, an ingenious AI companion, empowers PR & Marketing experts with its unrivaled precision. With HelloScribe's exceptional AI capabilities, creativity soars,",
    category: "Writing",
    logo: "https://i.ibb.co/XttMCVH/Screenshot-2023-05-22-125853.png"
  },
  {
    link: "https://www.caliberai.net/",
    name: "CaliberAI",
    description: "CaliberAI offers advanced AI protection for your online brand. Safeguard your social media and comment feeds from harmful content. Scan",
    category: "Writing",
    logo: "https://i.ibb.co/XVH4cZW/Screenshot-2023-05-22-125252.png"
  },
  {
    link: "https://elephas.app/",
    name: "Elephas",
    description: "Introducing Elephas, your Mac's personal AI Writing Assistant. Save hours daily with this groundbreaking AI writer that works seamlessly across",
    category: "Writing",
    logo: "https://i.ibb.co/BfPn7XT/Screenshot-2023-05-22-124544.png"
  },
  {
    link: "https://glasp.co/",
    name: "Glasp",
    description: "Glasp, an intellectual's digital companion, embraces the pursuit of knowledge and creativity. It allows individuals to curate their online reading,",
    category: "Writing",
    logo: "https://i.ibb.co/NYrVMYK/Screenshot-2023-05-22-124206.png"
  },
  {
    link: "https://app.bhuman.ai/?ref=zwy0ywu",
    name: "BHuman",
    description: "BHuman allows you to foster genuine human connections at scale with AI-generated videos that appear individually recorded. Impress your customers,",
    category: "Video Generator",
    logo: "https://i.ibb.co/WGkvDbk/Screenshot-2023-05-21-230718.png",
    aff:true
  },
  {
    link: "https://wonderdynamics.com/",
    name: "Wonder Dynamics",
    description: "Welcome to Wonder Dynamics, a wonderland where the extraordinary happens. Witness the AI-powered enchantment as it animates, illuminates, and weaves",
    category: "Video Generator",
    logo: "https://i.ibb.co/d0PnZnd/Screenshot-2023-05-21-225339.png"
  },
  {
    link: "https://wowto.ai/",
    name: "WowTo",
    description: "WowTo revolutionizes the way you share knowledge! Unleash the power of AI to effortlessly construct captivating how-to videos and establish",
    category: "Video Generator",
    logo: "https://i.ibb.co/p4PT9Vk/Screenshot-2023-05-21-224958.png"
  },
  {
    link: "https://www.visla.us/?gr_pk=x0kb&gr_uid=jOw7",
    name: "Visla",
    description: "Visla is your video storytelling companion, an AI-powered platform that simplifies recording, editing, and sharing high-quality videos for teams and",
    category: "Video Generator",
    logo: "https://i.ibb.co/hZkjj6q/Screenshot-2023-05-21-224626.png",
    aff:true
  },
  {
    link: "https://kreadoai.com/",
    name: "Kreado AI",
    description: "Kreado AI, an extraordinary multilingual AI video creator, enables you to effortlessly transform text or keywords into captivating oral videos",
    category: "Marketing",
    logo: "https://i.ibb.co/b3nBZYy/Screenshot-2023-05-21-224302.png"
  },
  {
    link: "https://www.soulmachines.com/",
    name: "Soul Machines",
    description: "Embark on a mesmerizing journey where Soul Machines merges AI, metaverse, and digital celebrities. Witness the extraordinary infusion of GPT",
    category: "Marketing",
    logo: "https://i.ibb.co/ZBxnsDX/Screenshot-2023-05-21-223718.png"
  },
  {
    link: "https://www.altered.ai/",
    name: "Altered",
    description: "Unleash Altered's power to transform your voice into a mesmerizing symphony. Choose from curated portfolios or craft your own masterpiece,",
    category: "Audio Editing",
    logo: "https://i.ibb.co/Nm4NrkV/Screenshot-2023-05-21-223128.png"
  },
  {
    link: "https://bgrem.ai/",
    name: "BgRem",
    description: "Step into a world where BgRem unleashes the full potential of your visuals. Elevate your images and videos with cutting-edge",
    category: "Image Generator",
    logo: "https://i.ibb.co/TmnB4sS/Screenshot-2023-05-21-222214.png"
  },
  {
    link: "https://vercel.com/",
    name: "Vercel",
    description: "With Vercel, developers unlock their creative prowess as they craft, preview, and launch their digital masterpieces. Vercel, a dynamic platform",
    category: "Coding",
    logo: "https://i.ibb.co/0Mj1qV9/Screenshot-2023-05-21-221857.png"
  },
  {
    link: "https://rizzai.com/",
    name: "Rizz",
    description: "Unleash the infinite power of Rizz, the world's mightiest text AI integrated into your keyboard. Experience limitless creativity at your",
    category: "Personal",
    logo: "https://i.ibb.co/ZhGnQRL/Screenshot-2023-05-21-221556.png"
  },
  {
    link: "https://www.questmate.com/",
    name: "Questmate",
    description: "Embark on an exhilarating adventure with Questmate and witness tasks being effortlessly accomplished on autopilot. Craft extraordinary forms and seamless",
    category: "Automation",
    logo: "https://i.ibb.co/wWtRhF9/Screenshot-2023-05-21-221232.png"
  },
  {
    link: "https://octoicons.com/",
    name: "Octoicons",
    description: "Unleash the creative power of Octoicons, where AI and artistry intertwine. With a mere prompt, witness the birth of breathtaking,",
    category: "Design",
    logo: "https://i.ibb.co/Wzqxk4k/Screenshot-2023-05-21-220645.png"
  },
  {
    link: "https://type.ai/",
    name: "Type",
    description: "Type emerges as a remarkable writing companion, fueled by the power of artificial intelligence. It enables individuals to unleash their",
    category: "Writing",
    logo: "https://i.ibb.co/fSksgFm/Screenshot-2023-05-20-235056.png"
  },
  {
    link: "https://www.turntable.so/",
    name: "Turntable",
    description: "Harness the warp-speed capabilities of Turntable, a collaborative AI-driven tool that revolutionizes data transformation. Seamlessly integrate Turntable with dbt Core",
    category: "Coding",
    logo: "https://i.ibb.co/vm36qtR/Screenshot-2023-05-20-234628.png"
  },
  {
    link: "https://www.persana.ai/",
    name: "Persana AI",
    description: "Persana AI, meet your brilliant sales partner who'll supercharge your productivity by 10x. Focus your energy on the most promising",
    category: "Sales",
    logo: "https://i.ibb.co/56Hdt7W/Screenshot-2023-05-20-234304.png"
  },
  {
    link: "https://www.buildt.ai/",
    name: "Buildt",
    description: "Discover Buildt—an AI marvel built for developers. It empowers engineers at Stripe, Airbnb, and beyond to effortlessly explore and",
    category: "Coding",
    logo: "https://i.ibb.co/QQP3VP5/Screenshot-2023-05-20-233825.png"
  },
  {
    link: "https://www.justpaid.io/",
    name: "JustPaid",
    description: "Unleash the power of JustPaid: smart financial tools for confident spending. Take control of your business with payments, AI automation,",
    category: "Business",
    logo: "https://i.ibb.co/qghKPqX/Screenshot-2023-05-20-233448.png"
  },
  {
    link: "https://www.layupai.com/",
    name: "Layup",
    description: "Effortlessly navigate through your company's systems and services, swiftly accomplishing workflows, discovering relevant documents, and extracting valuable insights. With the",
    category: "Productivity",
    logo: "https://i.ibb.co/KGTCp4g/Screenshot-2023-05-20-233129.png"
  },
  {
    link: "https://www.linum.ai/",
    name: "Linum",
    description: "In just five minutes, Linum can conjure up a mesmerizing video that will leave you in awe. It harnesses the",
    category: "Video Generator",
    logo: "https://i.ibb.co/S7ZvTCv/Screenshot-2023-05-20-232815.png"
  },
  {
    link: "https://www.quazel.com/",
    name: "Quazel",
    description: "Quazel, your personal AI tutor, makes language learning fascinating. With 21 supported languages, engage in natural conversations. Embark on exciting",
    category: "Speech AI",
    logo: "https://i.ibb.co/Fs2pw4Y/Screenshot-2023-05-20-232316.png"
  },
  {
    link: "https://www.stack-ai.com/",
    name: "Stack",
    description: "In a matter of minutes, anyone can craft and launch AI-powered applications using Stack. Unleash the power of colossal language",
    category: "Coding",
    logo: "https://i.ibb.co/3M9ztsL/Screenshot-2023-05-20-231904.png"
  },
  {
    link: "https://www.magicflow.ai/",
    name: "Magicflow",
    description: "Unleash the magic of effortless AI workflows with Magicflow. Build, integrate, and test in minutes, while we handle the intricate",
    category: "Coding",
    logo: "https://i.ibb.co/gDb8scx/Screenshot-2023-05-20-231544.png"
  },
  {
    link: "https://eightfold.ai/",
    name: "Eightfold.ai",
    description: "Eightfold.ai, the extraordinary AI marvel, unlocks the full potential of individuals. Serving as a mesmerizing talent enabler, this all-encompassing",
    category: "Recruitment",
    logo: "https://i.ibb.co/yBTdMTt/Screenshot-2023-05-20-231036.png"
  },
  {
    link: "https://meetcody.ai?fpr=unlimitedgpt",
    name: "Cody AI",
    description: "Cody is an intelligent AI assistant like ChatGPT – with the added benefit of being able to train it on your",
    category: "Productivity",
    logo: "https://i.ibb.co/x7hrPX9/Screenshot-2023-05-20-at-4-31-20-PM.png",
    aff:true
  },
  {
    link: "https://textio.com/",
    name: "Textio",
    description: "Unleash the allure of Textio's revolutionary workplace language guidance. Reveal concealed social biases and effortlessly rectify them. With Textio, witness",
    category: "Recruitment",
    logo: "https://i.ibb.co/jGXPMDT/Screenshot-2023-05-20-143211.png"
  },
  {
    link: "https://loxo.co/",
    name: "Loxo",
    description: "Experience the power of Loxo as it transforms into a hiring powerhouse. Bid farewell to the days of juggling multiple",
    category: "Recruitment",
    logo: "https://i.ibb.co/d7vxzbj/Screenshot-2023-05-20-142829.png"
  },
  {
    link: "https://hireez.com/",
    name: "hireEZ",
    description: "Discover a world of talent with hireEZ, where your greatest asset - people - can be easily found and recruited.",
    category: "Recruitment",
    logo: "https://i.ibb.co/XZshjPC/Screenshot-2023-05-20-142537.png"
  },
  {
    link: "https://www.frase.io/",
    name: "Frase",
    description: "The fastest and easiest way to create content that ranks on Google. Frase puts your entire SEO content workflow on",
    category: "Business",
    logo: "https://i.ibb.co/TwdRgHk/Screenshot-2023-05-20-at-1-22-10-AM.png"
  },
  {
    link: "https://www.findem.ai/",
    name: "Findem",
    description: "Unleash Findem's potential: Discover perfect talent, today and tomorrow. Harness millions of talent attributes for intelligent acquisition.",
    category: "Recruitment",
    logo: "https://i.ibb.co/NWpXqz9/Screenshot-2023-05-19-161752.png"
  },
  {
    link: "https://fetcher.ai/",
    name: "Fetcher",
    description: "Imagine a remarkable team, handpicked exclusively for you by Fetcher. This incredible tool automates the entire process of finding and",
    category: "Recruitment",
    logo: "https://i.ibb.co/xJQM3mt/Screenshot-2023-05-19-161304.png"
  },
  {
    link: "https://www.manatal.com/?via=unlimitedgpt",
    name: "Manatal",
    description: "Manatal embodies the ultimate solution for recruiters, encompassing all their essential tools in a single, remarkable platform. This AI-driven Recruitment",
    category: "Recruitment",
    logo: "https://i.ibb.co/BPYtCkM/Screenshot-2023-05-19-160615.png",
    aff:true
  },
  {
    link: "https://www.paradox.ai/",
    name: "Paradox",
    description: "Introducing Paradox, the revolutionary conversational recruiting software that effortlessly handles tasks your teams can't find time for. It guides candidates",
    category: "Recruitment",
    logo: "https://i.ibb.co/t2qMxr5/Screenshot-2023-05-18-233356.png"
  },
  {
    link: "https://reply.io/",
    name: "Reply.io",
    description: "Discover limitless revenue growth with Reply.io, where AI takes the lead. This sales engagement platform wields the power of",
    category: "Sales",
    logo: "https://i.ibb.co/WDkmmd4/Screenshot-2023-05-18-232730.png"
  },
  {
    link: "https://www.algolia.com/",
    name: "Algolia",
    description: "In Algolia's mesmerizing realm, an extraordinary AI Search and Discovery Platform dwells, serving as a catalyst for unveiling the wonders",
    category: "Customer Service",
    logo: "https://i.ibb.co/C2xDhyq/Screenshot-2023-05-18-232139.png"
  },
  {
    link: "https://headlime.com/?invite=o9lK6lk8wgNna1eqYLg4UP9j4Vg2",
    name: "Headlime",
    description: "Discover the ultimate copywriting companion, Headlime! Say goodbye to the laborious task of writing copy as our AI wizardry transforms",
    category: "Marketing",
    logo: "https://i.ibb.co/Lx6djqp/Screenshot-2023-05-17-210512.png",
    aff:true
  },
  {
    link: "https://emplifi.io/",
    name: "Emplifi.io",
    description: "Empower your revenue growth through Emplifi.io's customer engagement platform. Unleash the power of connection with your customers. Embed care",
    category: "Social Media",
    logo: "https://i.ibb.co/kB7n06W/Screenshot-2023-05-17-210034.png"
  },
  {
    link: "https://www.smartly.io/",
    name: "Smartly.io",
    description: "Unleash your potential with Smartly.io. Connect effortlessly with your customers, leaving multiple platforms behind. Reach and captivate your audience",
    category: "Social Media",
    logo: "https://i.ibb.co/6vjxMk0/Screenshot-2023-05-17-205637.png"
  },
  {
    link: "https://surferseo.com/",
    name: "Surfer",
    description: "Unleash the power of Surfer to skyrocket your organic traffic. Don't leave your SEO strategy to fate. Surfer equips you",
    category: "Marketing",
    logo: "https://i.ibb.co/NK2m3pv/Screenshot-2023-05-17-205239.png"
  },
  {
    link: "https://growthbarseo.com/unlimitedgpt?afmc=sc",
    name: "GrowthBar",
    description: "Supercharge your blog content creation with GrowthBar's AI-driven SEO expertise. Compose and optimize captivating, search engine-friendly articles at lightning speed.",
    category: "Marketing",
    logo: "https://i.ibb.co/8jX159s/Screenshot-2023-05-16-224000.png",
    aff:true
  },
  {
    link: "https://manychat.pxf.io/Wq4jvn",
    name: "ManyChat",
    description: "With ManyChat, customers can be engaged instantly, breathing life into interactive dialogues across Instagram Direct Messages, Facebook Messenger, and SMS,",
    category: "Chatbot",
    logo: "https://i.ibb.co/P6C1fD0/Screenshot-2023-05-16-223444.png",
    aff:true
  },
  {
    link: "https://customers.ai/?a_aid=unlimitedgpt",
    name: "Customers.ai",
    description: "Unlock the power of Customers.ai and discover your website's lead conversion rate effortlessly. Receive a quick audit and seize",
    category: "Marketing",
    logo: "https://i.ibb.co/sqHgQjT/Screenshot-2023-05-16-222804.png",
    aff:true
  },
  {
    link: "https://get.brightdata.com/06kb9i9vomn8",
    name: "Bright Data",
    description: "Bright Data is the world’s #1 web data platform. Fortune 500 companies, academic institutions, and small businesses all rely",
    category: "Business",
    logo: "https://i.ibb.co/my2w0Pg/Screenshot-2023-05-16-at-8-44-18-PM.png"
  },
  {
    link: "https://chatfuel.com/",
    name: "Chatfuel",
    description: "In the realm of Chatfuel, find inspiration and let automation handle the rest. Unleash an AI that understands your customers",
    category: "Chatbot",
    logo: "https://i.ibb.co/rF7YfSm/Screenshot-2023-05-15-172504.png"
  },
  {
    link: "https://instatext.io/?via=unlimitedgpt",
    name: "InstaText",
    description: "Elevate your writing with InstaText. This powerful tool enhances your text like a native speaker, providing efficient proofreading, editing, and",
    category: "Writing",
    logo: "https://i.ibb.co/hsPjY4k/Screenshot-2023-05-15-172008.png",
    aff:true
  },
  {
    link: "https://www.acrolinx.com/",
    name: "Acrolinx",
    description: "Acrolinx takes charge of overseeing and enhancing enterprise content, ensuring both human and AI-generated material meets the highest standards. By",
    category: "Marketing",
    logo: "https://i.ibb.co/prTMMyQ/Screenshot-2023-05-15-171639.png"
  },
  {
    link: "https://www.theseventhsense.com/",
    name: "Seventh Sense",
    description: "Seventh Sense's AI software optimizes email marketing for maximum engagement, without annoying the majority.",
    category: "Marketing",
    logo: "https://i.ibb.co/6PG6558/Screenshot-2023-05-13-231550.png"
  },
  {
    link: "https://www.semrush.com/",
    name: "Semrush",
    description: "Semrush enables comprehensive online marketing, including SEO, content, competitor research, PPC, and social media, in one platform with measurable results.",
    category: "Marketing",
    logo: "https://i.ibb.co/pKHns0P/Screenshot-2023-05-13-230629.png"
  },
  {
    link: "https://www.astria.ai/",
    name: "Astria",
    description: "Astria is an AI tool for creating custom images and videos without the need for GPU management, Python scripts, or",
    category: "Image Generator",
    logo: "https://i.ibb.co/dm8jzmz/Screenshot-2023-05-13-230232.png"
  },
  {
    link: "https://creasquare.io/",
    name: "Creasquare",
    description: "With Creasquare, one can effortlessly create social media content in record time. The platform offers an all-inclusive package to produce",
    category: "Social Media",
    logo: "https://i.ibb.co/xfSSyL0/Screenshot-2023-05-12-170923.png"
  },
  {
    link: "https://www.marketmuse.com/?via=unlimitedgpt",
    name: "MarketMuse",
    description: "With MarketMuse's content strategies, one can approach every content decision with confidence. While most content decisions are made using generic",
    category: "Marketing",
    logo: "https://i.ibb.co/wwkw4Tv/Screenshot-2023-05-12-170542.png",
    aff:true
  },
  {
    link: "https://analisa.io/",
    name: "Analisa.io",
    description: "With Analisa.io's Instagram and TikTok AI Analytics, one can gain real-time insights into various aspects of an account or",
    category: "Social Media",
    logo: "https://i.ibb.co/tPjkHgm/Screenshot-2023-05-12-170040.png"
  },
  {
    link: "https://systeme.io/?sa=sa00988351568a0453afb1d2e31cd298ad873d9b3c",
    name: "Systeme",
    description: "Looking for an all-in-one marketing platform that's intuitive and easy to use? Look no further than Systeme! This platform has",
    category: "Marketing",
    logo: "https://i.ibb.co/64ht3zB/Screenshot-2023-05-12-165522.png",
    aff:true
  },
  {
    link: "https://postly.ai/",
    name: "Postly",
    description: "By using Postly, they can harness the immense potential of AI to create and distribute their social media marketing campaigns",
    category: "Social Media",
    logo: "https://i.ibb.co/zGSkqvb/Screenshot-2023-05-12-165134.png"
  },
  {
    link: "https://www.affable.ai/",
    name: "Affable.ai",
    description: "By utilizing Affable.ai's innovative end-to-end influencer marketing platform, one can swiftly launch and manage multiple campaigns. This tool empowers",
    category: "Social Media",
    logo: "https://i.ibb.co/d7D7LGr/Screenshot-2023-05-12-164756.png"
  },
  {
    link: "https://postwise.ai?_get=unlimitedgpt",
    name: "Postwise",
    description: "With Postwise at their disposal, crafting tweets that go viral is a breeze. By utilizing AI-powered tools, users can create",
    category: "Social Media",
    logo: "https://i.ibb.co/BgNcZMz/Screenshot-2023-05-12-163824.png",
    aff:true
  },
  {
    link: "https://www.assetsai.art/",
    name: "AssetsAI",
    description: "Gamers can elevate their gaming experience with AssetsAI's curated collection of AI-powered game assets. These assets are handpicked and unique,",
    category: "Gaming",
    logo: "https://i.ibb.co/yY0cs1w/Screenshot-2023-05-12-162012.png"
  },
  {
    link: "https://autoportrait.ai/",
    name: "AutoPortrait.ai",
    description: "With AutoPortrait.ai, one can generate stunning AI-generated portraits that capture the essence of their subject. The tool uses advanced",
    category: "Image Generator",
    logo: "https://i.ibb.co/FDsSpqw/Screenshot-2023-05-12-161702.png"
  },
  {
    link: "https://magical.so/",
    name: "Magical",
    description: "Imagine having an AI assistant named Magical, who can effortlessly manage your schedule and meeting notes. Powered by GPT technology,",
    category: "Business",
    logo: "https://i.ibb.co/P9wNL4t/Screenshot-2023-05-12-161345.png"
  },
  {
    link: "https://chapterme.co/",
    name: "ChapterMe",
    description: "With ChapterMe, video creators can effortlessly incorporate chapters into their content without spending hours doing it manually. Using AI technology,",
    category: "Video Editor",
    logo: "https://i.ibb.co/GxFnR9T/Screenshot-2023-05-12-161045.png"
  },
  {
    link: "https://www.brightbot.app/",
    name: "BrightBot",
    description: "By employing BrightBot, a 24/7 AI-powered chatbot, website owners can attract more customers and boost their conversion rates. It",
    category: "Chatbot",
    logo: "https://i.ibb.co/GPWDZ5j/Screenshot-2023-05-12-160236.png"
  },
  {
    link: "https://justblog.ai/",
    name: "JustBlog.ai",
    description: "With JustBlog.ai, one can effortlessly generate a fascinating blog by selecting a title and providing a few instructions. Its",
    category: "Writing",
    logo: "https://i.ibb.co/23d85JJ/Screenshot-2023-05-12-155644.png"
  },
  {
    link: "https://gpt.space/",
    name: "GPT Workspace",
    description: "By integrating ChatGPT with Google Workspace, users can enhance their productivity by directly accessing ChatGPT from Google Docs, Sheets, Slides,",
    category: "Productivity",
    logo: "https://i.ibb.co/VSJ3CLg/Screenshot-2023-05-12-155132.png"
  },
  {
    link: "https://www.thegist.ai/",
    name: "theGist",
    description: "By using theGist, one can quickly grasp the essence of an email or Slack message. You can become a hero",
    category: "Productivity",
    logo: "https://i.ibb.co/k6djyfd/Screenshot-2023-05-12-154857.png"
  },
  {
    link: "https://katteb.com/",
    name: "Katteb",
    description: "With Katteb's help, fact-checking content becomes a breeze. The future of writing has arrived, and Katteb is leading the way",
    category: "Writing",
    logo: "https://i.ibb.co/DfMqg4V/Screenshot-2023-05-12-154522.png"
  },
  {
    link: "https://vue.ai/",
    name: "Vue.ai",
    description: "Retail giants worldwide rely on Vue.ai, an innovative AI and automation tool. Vue.ai boasts a suite of experience",
    category: "Sales",
    logo: "https://i.ibb.co/ZTy179t/Screenshot-2023-05-12-154214.png"
  },
  {
    link: "https://www.hoppycopy.co/?via=unlimitedgpt",
    name: "HoppyCopy",
    description: "With HoppyCopy, they can churn out emails that convert like magic, all at lightning speed. Say goodbye to hours wasted",
    category: "Writing",
    logo: "https://i.ibb.co/tCTg9MF/Screenshot-2023-05-12-153920.png",
    aff:true
  },
  {
    link: "https://writer.com/",
    name: "Writer",
    description: "With the help of Writer, one can create accurate and trustworthy content within minutes. This writing tool is designed to",
    category: "Writing",
    logo: "https://i.ibb.co/r5c8GQJ/Screenshot-2023-05-12-153544.png"
  },
  {
    link: "https://ai-writer.com?via=unlimitedgpt",
    name: "AI-Writer",
    description: "With AI-Writer, generating trustworthy and relevant content is as easy as a few clicks. This platform is equipped with advanced",
    category: "Writing",
    logo: "https://i.ibb.co/rpG9NZF/Screenshot-2023-05-12-153015.png",
    aff:true
  },
  {
    link: "https://www.caktus.ai/",
    name: "Caktus",
    description: "With Caktus, students can unlock the full potential of their minds. This advanced study tool provides an affordable AI assistant",
    category: "Productivity",
    logo: "https://i.ibb.co/BzFLc4C/Screenshot-2023-05-12-152546.png"
  },
  {
    link: "https://www.perplexity.ai/",
    name: "Perplexity AI",
    description: "With Perplexity AI, individuals can explore and exchange information like never before. Its mission is to enhance the way people",
    category: "Productivity",
    logo: "https://i.ibb.co/qM4nMV3/Screenshot-2023-05-12-152219.png"
  },
  {
    link: "https://pipl.ai/",
    name: "Pipl.ai",
    description: "Pipl.ai simplifies cold emailing and boosts revenue with features like unlimited inbox connectivity, free warm-up for all accounts, and",
    category: "Sales",
    logo: "https://i.ibb.co/dMMJ8vh/Screenshot-2023-05-12-151720.png"
  },
  {
    link: "https://you.com/",
    name: "YOU",
    description: "The multi-dimensional interface of YOU allows users to explore more content with minimal effort, thanks to its horizontal and vertical",
    category: "Productivity",
    logo: "https://i.ibb.co/mHVLzKr/Screenshot-2023-05-12-151137.png"
  },
  {
    link: "https://fathom.video/",
    name: "Fathom",
    description: "Upgrade your productivity with Fathom, your personal AI Meeting Assistant that's free to use. Fathom simplifies your meetings by recording,",
    category: "Business",
    logo: "https://i.ibb.co/D5cZ7n3/Screenshot-2023-05-11-221111.png"
  },
  {
    link: "https://www.crowdstrike.com/",
    name: "CrowdStrike",
    description: "CrowdStrike offers powerful protection against cyberattacks, preventing breaches and averting a range of threats. With their cutting-edge security solutions, they",
    category: "Business",
    logo: "https://i.ibb.co/Dkzzbg4/Screenshot-2023-05-11-220720.png"
  },
  {
    link: "https://trevorai.com/",
    name: "Trevor",
    description: "Trevor - the app that helps you take charge of your day, one task at a time. Trevor's simple time-blocking",
    category: "Productivity",
    logo: "https://i.ibb.co/TKKKmKz/Screenshot-2023-05-11-000337.png"
  },
  {
    link: "https://timelyapp.com/",
    name: "Timely",
    description: "Introducing Timely, the innovative time-tracking software that is powered by AI. Timely is the ultimate tool for automating company time",
    category: "Productivity",
    logo: "https://i.ibb.co/NxbZmSd/Screenshot-2023-05-10-235804.png"
  },
  {
    link: "https://tara.ai/",
    name: "Tara.AI",
    description: "Tara.AI empowers businesses to consistently deliver high-quality products to their customers with every commitment. By utilizing Tara.AI's capabilities,",
    category: "Productivity",
    logo: "https://i.ibb.co/4gWmWCj/Screenshot-2023-05-10-235406.png"
  },
  {
    link: "https://www.zoominfo.com/products/chorus",
    name: "Chorus",
    description: "Chorus helps businesses make every interaction valuable. Chorus's proprietary machine learning technology, supported by 14 patents, has made them the",
    category: "Speech AI",
    logo: "https://i.ibb.co/ydB8t2h/Screenshot-2023-05-10-234433.png"
  },
  {
    link: "https://www.gong.io/",
    name: "Gong",
    description: "Gong transforms customer interactions into valuable insights for sales teams and deals. By utilizing precise AI models and a vast",
    category: "Business",
    logo: "https://i.ibb.co/fnJV9gd/Screenshot-2023-05-10-234033.png"
  },
  {
    link: "https://www.ocoya.com/?via=unlimitedgpt",
    name: "Ocoya",
    description: "Experience lightning-fast social media management with Ocoya's AI technology. Effortlessly create and schedule engaging content in record time. Elevate your",
    category: "Social Media",
    logo: "https://i.ibb.co/4TNDShb/Screenshot-2023-05-10-233544.png",
    aff:true
  },
  {
    link: "https://on-page.ai/",
    name: "On-Page.ai",
    description: "On-Page.ai can boost your Google ranking for your most lucrative keyword, especially in highly competitive markets. Recent case studies",
    category: "Writing",
    logo: "https://i.ibb.co/r2Qnwgt/Screenshot-2023-05-10-232522.png"
  },
  {
    link: "https://www.growbots.com/",
    name: "Growbots",
    description: "Meet Growbots, the solution for finding and reaching out to potential customers. With its authentic human touch, this tool makes",
    category: "Sales",
    logo: "https://i.ibb.co/Tr0stYZ/Screenshot-2023-05-10-231820.png"
  },
  {
    link: "https://blaze.today/",
    name: "Text Blaze",
    description: "Text Blaze streamlines the typing process and minimizes errors, with customizable templates that are user-friendly and automated. The possibilities for",
    category: "Writing",
    logo: "https://i.ibb.co/Vxcdmyg/Screenshot-2023-05-10-231108.png"
  },
  {
    link: "https://adzis.com/",
    name: "AdZis",
    description: "AdZis empowers eCommerce businesses to stay ahead of the competition by publishing content consistently with the help of its advanced",
    category: "Writing",
    logo: "https://i.ibb.co/bXwVRzm/Screenshot-2023-05-10-230751.png"
  },
  {
    link: "https://www.genei.io/",
    name: "Genei",
    description: "Genei is a valuable tool for accelerating research. It streamlines the summarization of background material and enables faster production of",
    category: "Writing",
    logo: "https://i.ibb.co/NKmxVjT/Screenshot-2023-05-10-230208.png"
  },
  {
    link: "https://longShot.ai?deal=unlimitedgpt",
    name: "LongShot",
    description: "Introducing LONGSHOT AI, a revolutionary tool that turns ideas into captivating blogs in mere minutes. With the power of artificial",
    category: "Writing",
    logo: "https://i.ibb.co/JyrRBTM/Screenshot-2023-05-10-225706.png",
    aff:true
  },
  {
    link: "https://ject.ai/",
    name: "Ject.AI",
    description: "Ject.AI offers an opportunity to expand your perspectives and unlock new ideas. Through diverse connections and fresh angles, this",
    category: "Writing",
    logo: "https://i.ibb.co/VCZcB2d/Screenshot-2023-05-10-225310.png"
  },
  {
    link: "https://www.narrativa.com/",
    name: "Narrativa",
    description: "Gabriele by Narrativa. Gabriele is an innovative platform that uses machine learning to generate natural language solutions for your business.",
    category: "Writing",
    logo: "https://i.ibb.co/SDkyhPk/Screenshot-2023-05-10-224257.png"
  },
  {
    link: "https://www.happeo.com/",
    name: "Happeo",
    description: "Looking to streamline your team's communication and access to information? Happeo has got you covered. Happeo's intranet platform offers fast",
    category: "Communication",
    logo: "https://i.ibb.co/vqpr4vf/Screenshot-2023-05-09-195246.png"
  },
  {
    link: "https://www.proofhub.com/",
    name: "ProofHub",
    description: "ProofHub simplifies project and team management by bringing everything under one roof. Before ProofHub, teams struggled with scattered projects, unclear",
    category: "Communication",
    logo: "https://i.ibb.co/VYpr39w/Screenshot-2023-05-09-193821.png"
  },
  {
    link: "https://zaap.ai/?ref=unlimitedgpt",
    name: "Zaap",
    description: "Zaap offers an all-inclusive Creator Toolkit, providing a single page to showcase links, sell digital products and coaching, build a",
    category: "Social Media",
    logo: "https://i.ibb.co/cL8nY4q/Screenshot-2023-05-08-234109.png",
    aff:true
  },
  {
    link: "https://tldv.cello.so/vtwsTeDrjdX",
    name: "tl;dv",
    description: "Imagine being in control of your meetings and effortlessly keeping track of all the important details. With tl;dv meeting",
    category: "Business",
    logo: "https://i.ibb.co/S0K6t10/Screenshot-2023-05-08-233332.png"
  },
  {
    link: "https://calendly.com/",
    name: "Calendly",
    description: "With Calendly, scheduling ahead becomes effortless. It is a scheduling automation platform that eliminates the need for endless email threads",
    category: "Automation",
    logo: "https://i.ibb.co/ySzS9qb/Screenshot-2023-05-08-232203.png"
  },
  {
    link: "https://bit.ai/",
    name: "Bit.ai",
    description: "Bit.ai is a powerful platform for easy content creation, collaboration, and organization. Bit.ai offers a range of tools",
    category: "Communication",
    logo: "https://i.ibb.co/HB3CdtS/Screenshot-2023-05-08-231715.png"
  },
  {
    link: "https://www.switchboard.ai/?via=unlimitedgpt",
    name: "Switchboard",
    description: "Switchboard streamlines image creation through the use of an API or user-friendly tools like Zapier and Pabbly Connect. This makes",
    category: "Image Generator",
    logo: "https://i.ibb.co/3Bb46x2/Screenshot-2023-05-08-230453.png",
    aff:true
  },
  {
    link: "https://www.spinrewriter.com/",
    name: "SpinRewriter",
    description: "Transform one article into 500 unique pieces in just 45 seconds with Spin Rewriter. This exceptional tool incorporates ENL technology",
    category: "Writing",
    logo: "https://i.ibb.co/Jt3GnYT/Screenshot-2023-05-08-230057.png"
  },
  {
    link: "https://coolaiid.com/",
    name: "CoolAIid",
    description: "Transform your home design with CoolAIid's AI technology. Whether you're a DIY enthusiast or a professional designer, CoolAIid's platform offers",
    category: "Design",
    logo: "https://i.ibb.co/THdybWM/Screenshot-2023-05-08-225357.png"
  },
  {
    link: "https://www.texta.ai/?via=unlimitedgpt",
    name: "Texta",
    description: "Transform your blogging game with Texta - the ultimate one-click solution for crafting top-notch content. Elevate your writing with the",
    category: "Writing",
    logo: "https://i.ibb.co/hcPW7hZ/Screenshot-2023-05-07-230025.png",
    aff:true
  },
  {
    link: "https://abtesting.ai/?via=unlimitedgpt",
    name: "ABtesting.ai",
    description: "Transform your landing page into a conversion machine with ABtesting.ai. ABtesting.ai's AI-powered A/B testing software is simple,",
    category: "Automation",
    logo: "https://i.ibb.co/dr3gLQj/Screenshot-2023-05-07-225624.png",
    aff:true
  },
  {
    link: "https://www.fineshare.com/",
    name: "FineShare",
    description: "FineShare is a powerful all-in-one tool for content creators. With FineCam, you can enhance your live video production and capture",
    category: "Video Editor",
    logo: "https://i.ibb.co/zfdNCGX/Screenshot-2023-05-07-224951.png"
  },
  {
    link: "https://tldrthis.com/",
    name: "TLDR This",
    description: "With just a click, you can quickly summarize any text into simple and condensed content, freeing yourself from information overload.",
    category: "Writing",
    logo: "https://i.ibb.co/3YFRHhH/Screenshot-2023-05-05-224937.png"
  },
  {
    link: "https://dream.ai/",
    name: "Dream by WOMBO",
    description: "Using Dream by WOMBO, turn your imagination into stunning artwork in seconds. Choose an art style and enter a prompt,",
    category: "Image Generator",
    logo: "https://i.ibb.co/m98Ymc4/Screenshot-2023-05-05-224541.png"
  },
  {
    link: "https://www.artbreeder.com/",
    name: "Artbreeder",
    description: "Create stunning AI art like never before with Artbreeder. Just piece together your favorite shapes and images, add a prompt",
    category: "Image Generator",
    logo: "https://i.ibb.co/J7PFbwh/Screenshot-2023-05-05-223722.png"
  },
  {
    link: "https://vrew.voyagerx.com/",
    name: "Vrew",
    description: "Vrew makes video editing as effortless as text editing, thanks to its AI-powered subtitle generation. Adding captions to lengthy videos",
    category: "Video Editor",
    logo: "https://i.ibb.co/zG7NGP5/Screenshot-2023-05-05-223301.png"
  },
  {
    link: "https://www.radintel.ai/",
    name: "Rad AI",
    description: "Say goodbye to traditional influencer marketing! With Rad AI, you can tap into the potential of artificial intelligence for effective",
    category: "Marketing",
    logo: "https://i.ibb.co/C2PYGft/Screenshot-2023-05-05-222842.png"
  },
  {
    link: "https://weblium.com/",
    name: "Weblium",
    description: "Build a website in seconds with Weblium! It's the easiest website builder out there, no skills required. Create a stunning",
    category: "Coding",
    logo: "https://i.ibb.co/GCxmnK8/Screenshot-2023-05-05-222324.png"
  },
  {
    link: "https://parsio.io/?ref=unlimitedgpt",
    name: "Parsio (OCR + AI chat)",
    description: "Automate your data extraction with an AI-powered document parser. Upgrade your data extraction process with our AI-powered PDF parser. Say",
    category: "OCR-PDF",
    logo: "https://i.ibb.co/Lktt82H/Screenshot-2023-05-05-at-9-36-32-AM.png",
    aff:true
  },
  {
    link: "https://uberduck.ai/",
    name: "Uberduck",
    description: "Create amazing music using Uberduck's AI vocal technology, featuring over 5,000 expressive voices. Easily develop high-quality audio applications in",
    category: "Speech AI",
    logo: "https://i.ibb.co/mXBP5WR/Screenshot-2023-05-04-225931.png"
  },
  {
    link: "https://meetgeek.ai/",
    name: "Meetgeek",
    description: "Introducing Meetgeek, your personal AI Meeting Assistant! With Meetgeek, you can automatically record, transcribe, and summarize every conversation, capturing all",
    category: "Speech AI",
    logo: "https://i.ibb.co/C21L4h1/Screenshot-2023-05-04-224107.png"
  },
  {
    link: "https://fakeyou.com/",
    name: "FakeYou",
    description: "Create personalized audio and video content featuring your favorite characters with FakeYou's advanced deep fake technology. With features like AI",
    category: "Speech AI",
    logo: "https://i.ibb.co/LPFmGSL/Screenshot-2023-05-01-161048.png"
  },
  {
    link: "https://animeai.app/",
    name: "Animeai",
    description: "Experience the magic of Animeai, where AI brings your anime dreams to life. Transform your photo into an epic avatar",
    category: "Image Generator",
    logo: "https://i.ibb.co/27DNgDf/Screenshot-2023-05-01-160705.png"
  },
  {
    link: "https://convert.leiapix.com/",
    name: "Leia Pix Converter",
    description: "Transform your cherished images into mesmerizing Depth Animations that come to life with LeiaPix Converter. Enjoy the magic of breathing",
    category: "Design",
    logo: "https://i.ibb.co/LQG4vRQ/Screenshot-2023-05-01-160010.png"
  },
  {
    link: "https://www.bardeen.ai/",
    name: "Bardeen",
    description: "Imagine building automation with the ease of texting a friend. Bardeen makes it possible. Just tell the AI your desired",
    category: "Automation",
    logo: "https://i.ibb.co/RHqg6TJ/Screenshot-2023-05-01-155154.png"
  },
  {
    link: "https://inboxpro.io?ref=unlimitedgpt",
    name: "InboxPro",
    description: "InboxPro - the ultimate tool powered by AI and automation features. Boost your sales and uplift customer support with ease",
    category: "Customer Service",
    logo: "https://i.ibb.co/QnzxgMt/Screenshot-2023-05-01-154604.png",
    aff:true
  },
  {
    link: "https://taplio.com/",
    name: "Taplio",
    description: "Transform your LinkedIn presence with Taplio's AI-powered platform. Spend just 10 minutes a day to elevate your personal brand. Craft",
    category: "Social Media",
    logo: "https://i.ibb.co/xXM6T5F/Screenshot-2023-05-01-154258.png"
  },
  {
    link: "https://tweethunter.io/?via=unlimitedgpt",
    name: "Tweet Hunter",
    description: "Discover the ultimate tool for building and profiting from your Twitter audience with Tweet Hunter. Experience faster sales, growth and",
    category: "Marketing",
    logo: "https://i.ibb.co/wQ5CMp4/Screenshot-2023-05-01-153822.png",
    aff:true
  },
  {
    link: "https://www.autopod.fm/",
    name: "AutoPod",
    description: "Rev up your podcast and video show production with AutoPod - the ultimate editing solution. With AutoPod's suite of plug-ins",
    category: "Video Editor",
    logo: "https://i.ibb.co/0YL5QD7/Screenshot-2023-05-01-153519.png"
  },
  {
    link: "https://nightcafe.studio/",
    name: "NightCafe Studio",
    description: "Create amazing artworks in seconds using the power of Artificial Intelligence. NightCafe Creator is an AI Art Generator app with",
    category: "Design",
    logo: "https://i.ibb.co/XxxCCWd/Screenshot-2023-04-29-at-9-03-13-AM.png"
  },
  {
    link: "https://online.hitpaw.com/online-video-enhancer.html?",
    name: "HitPaw Online Video Enhancer",
    description: "HitPaw Online Video Enhancer is 4K video enhancer in any case. It provides 4 different AI models to meet all",
    category: "Video Editor",
    logo: "https://i.ibb.co/2h273mt/Screenshot-2023-04-28-at-9-09-57-AM.png"
  },
  {
    link: "https://www.ava.me/",
    name: "Ava",
    description: "Ava's live captioning solution, Captions for All, empowers both the Deaf and hard-of-hearing communities, as well as inclusive organizations. With",
    category: "Speech AI",
    logo: "https://i.ibb.co/R4LQLQF/Screenshot-2023-04-25-233315.png"
  },
  {
    link: "https://tactiq.io/?via=unlimitedgpt",
    name: "Tactiq",
    description: "Be in control of your conversation and let Tactiq handle the note-taking. With Tactiq's live transcription feature, you can capture",
    category: "Speech AI",
    logo: "https://i.ibb.co/kgHhKR6/Screenshot-2023-04-25-232618.png",
    aff:true
  },
  {
    link: "https://gliacloud.com/",
    name: "GliaCloud",
    description: "Transform your story into captivating videos effortlessly with GliaCloud's AI technology. Convert news articles, social media updates, live sports coverage,",
    category: "Video Generator",
    logo: "https://i.ibb.co/FW85nFc/Screenshot-2023-04-25-231350-1.png"
  },
  {
    link: "https://app.airgram.io/signup?via=unlimitedgpt",
    name: "Airgram",
    description: "Airgram takes the hassle out of note-taking during meetings so you can focus on what really matters. With Airgram, you",
    category: "Business",
    logo: "https://i.ibb.co/NnrvxhF/Screenshot-2023-04-25-230602.png",
    aff:true
  },
  {
    link: "https://venngage.com/",
    name: "Venngage",
    description: "Create stunning infographics and visuals effortlessly with Venngage, even if you're not a designer. Impress your audience with professional-looking graphics",
    category: "Presentation",
    logo: "https://i.ibb.co/hgD0QYW/Screenshot-2023-04-25-224622.png"
  },
  {
    link: "https://recastai.com/",
    name: "Re:cast AI",
    description: "Re:cast AI delivers on-brand content at scale for your marketing needs. Create captivating visuals for social media ads, large",
    category: "Image Generator",
    logo: "https://i.ibb.co/MPrLTTL/Screenshot-2023-04-25-223231.png"
  },
  {
    link: "https://illustroke.com?aff=TTeL1K8N",
    name: "Illustroke",
    description: "Transform your words into breathtaking visuals with Illustroke's vector illustrations. Say goodbye to long hours of designing, as our AI-powered",
    category: "Image Generator",
    logo: "https://i.ibb.co/FKMTVyy/Screenshot-2023-04-25-222659.png",
    aff:true
  },
  {
    link: "https://app.getmerlin.in/",
    name: "Merlin",
    description: "Merlin can help you finish your work in seconds. It's your all-in-one solution for generating email ideas, writing promotional emails,",
    category: "Business",
    logo: "https://i.ibb.co/TrC1Wtf/Screenshot-2023-04-25-222013.png"
  },
  {
    link: "https://www.kive.ai/",
    name: "Kive",
    description: "Get inspired and organized with Kive! Kive's AI-powered platform lets you easily curate visual libraries, set the mood, and brief",
    category: "Image Generator",
    logo: "https://i.ibb.co/pWN9g98/Screenshot-2023-04-25-220959.png"
  },
  {
    link: "https://get.keap.com/kzkmwqwfulxy",
    name: "Keap",
    description: "Unlock your small business's potential with Keap - the ultimate all-in-one solution. Attract more leads, effortlessly convert them to loyal",
    category: "Customer Service",
    logo: "https://i.ibb.co/mGrVDXG/Screenshot-2023-04-19-194910.png"
  },
  {
    link: "https://hiver.referralrock.com/l/1UNLIMITEDG95/",
    name: "Hiver",
    description: "Forge valuable connections with your vendors, employees, and customers through genuine interaction using Hiver. Create lasting impressions by working together",
    category: "Customer Service",
    logo: "https://i.ibb.co/M7N8Cpb/Screenshot-2023-04-19-194521.png"
  },
  {
    link: "https://www.rolemodel.ai/",
    name: "Rolemodel.ai",
    description: "Discover the power of conversational AI and become a role model with Rolemodel.AI. This amazing personal AI assistant allows",
    category: "Presentation",
    logo: "https://i.ibb.co/PjjhyBN/Screenshot-2023-04-19-194138.png"
  },
  {
    link: "https://trythatch.com/",
    name: "Thatch",
    description: "With Thatch, streamline your offline communications and modernize your business with efficient tools for managing physical mail, fax, phone, and",
    category: "Business",
    logo: "https://i.ibb.co/88k7YRD/Screenshot-2023-04-19-193825.png"
  },
  {
    link: "https://www.ai2sql.io/",
    name: "AI2sql",
    description: "With AI2sql, crafting SQL queries is a breeze. No expertise required, it's easy to please. Efficient and error-free, it's a",
    category: "Coding",
    logo: "https://i.ibb.co/GF9FLpK/Screenshot-2023-04-19-193533.png"
  },
  {
    link: "https://nando.ai?ref=mmm3mgr",
    name: "Nando AI",
    description: "Transform your online business with Nando AI's tools! Craft compelling product descriptions, video scripts, ad concepts, copy, blog posts, social",
    category: "Writing",
    logo: "https://i.ibb.co/9czRnF9/Screenshot-2023-04-19-193249.png",
    aff:true
  },
  {
    link: "https://www.evoto.ai/",
    name: "Evoto",
    description: "Step into the future of photo editing with Evoto, a cutting-edge editor that streamlines your process and sets your imagination",
    category: "Photo Editor",
    logo: "https://i.ibb.co/8d7hpfN/Screenshot-2023-04-19-192929.png"
  },
  {
    link: "https://opus.ai/",
    name: "Opus",
    description: "Opus brings your words to life, turning them into entire worlds. Whether you're a dreamer, gamer, artist, storyteller, musician, advertiser,",
    category: "Video Generator",
    logo: "https://i.ibb.co/5kP6vsT/Screenshot-2023-04-19-192555.png"
  },
  {
    link: "https://www.chatbot.com/?a=yCPIKs_4R&utm_campaign=pp_chatbot-default&utm_source=PP",
    name: "ChatBot",
    description: "Create your own chatbot effortlessly with ChatBot, the complete solution for automating customer support. Build and launch a conversational chatbot",
    category: "Customer Service",
    logo: "https://i.ibb.co/c8dw39n/Screenshot-2023-04-19-192041.png",
    aff:true
  },
  {
    link: "https://search.krea.ai/",
    name: "KREA",
    description: "Experience the magic of AI art with KREA's generative visuals, available to everyone. Let your imagination run wild with stunning",
    category: "Image Generator",
    logo: "https://i.ibb.co/4d80Qq9/Screenshot-2023-04-19-191801.png"
  },
  {
    link: "https://salesstack.ai/",
    name: "SalesStack",
    description: "Transform your communication with the power of AI! SalesStack is the ultimate tool for entrepreneurs, builders, developers, artists, and designers",
    category: "Communication",
    logo: "https://i.ibb.co/5vHzvKy/Screenshot-2023-04-19-191437.png"
  },
  {
    link: "https://www.optimove.com/",
    name: "Optimove",
    description: "Optimove streamlines your CRM journeys with AI, empowering you to personalize experiences for your customers at a larger scale. With",
    category: "Sales",
    logo: "https://i.ibb.co/WcPxRdf/Screenshot-2023-04-19-191015.png"
  },
  {
    link: "https://inkforall.com/?fpr=unlimitedgpt",
    name: "INK",
    description: "Looking for a safer way to use AI content marketing without risking your brand? INK is the answer! With Google",
    category: "Writing",
    logo: "https://i.ibb.co/cN5m8Xq/Screenshot-2023-04-19-190736.png",
    aff:true
  },
  {
    link: "https://www.deckrobot.com/",
    name: "Deckrobot",
    description: "Transform your presentations with ease using DeckRobot. Create stunning, on-brand PowerPoint slides in just one click, with the help of",
    category: "Presentation",
    logo: "https://i.ibb.co/Tvjg3CV/Screenshot-2023-04-19-190436.png"
  },
  {
    link: "https://pitch.com/",
    name: "Pitch",
    description: "Pitch is the perfect tool for creating impressive presentations as a team. It brings together the best features of productivity,",
    category: "Presentation",
    logo: "https://i.ibb.co/S5RsQG6/Screenshot-2023-04-19-190054.png"
  },
  {
    link: "https://www.chai-research.com/",
    name: "Chai Research",
    description: "Chai Research will brighten your day with laughter and joy, even after a tough one. It's paving the way for",
    category: "Chatbot",
    logo: "https://i.ibb.co/wC46SL8/Screenshot-2023-04-19-185524.png"
  },
  {
    link: "https://www.unriddle.ai/",
    name: "Unriddle",
    description: "Unlock the power of AI and become an expert in minutes with Unriddle. Say goodbye to research struggles with your",
    category: "Writing",
    logo: "https://i.ibb.co/kQmLn4m/Screenshot-2023-04-19-185016.png"
  },
  {
    link: "https://www.scholarcy.com/",
    name: "Scholarcy",
    description: "Scholarcy's AI-generated summaries simplify research with millions of papers published annually. Despite your usual research tools finding the most relevant",
    category: "Writing",
    logo: "https://i.ibb.co/L97sZD1/Screenshot-2023-04-19-184708.png"
  },
  {
    link: "https://scite.ai/assistant",
    name: "Assistant by Scite_",
    description: "Start drafting your essay, grant proposal, or paragraph easily with Assistant by Scite_. Discover how the composition of a bank's",
    category: "Writing",
    logo: "https://i.ibb.co/mJB53PZ/Screenshot-2023-04-19-184240.png"
  },
  {
    link: "https://deepgram.com/",
    name: "Deepgram",
    description: "Deepgram offers developers unparalleled speech-to-text capabilities with exceptional accuracy, speed, and scalability at an unbeatable price. With Deepgram, developers can",
    category: "Coding",
    logo: "https://i.ibb.co/FzcCxrr/Screenshot-2023-04-19-183907.png"
  },
  {
    link: "https://lumen5.com/",
    name: "Lumen5",
    description: "With Lumen5, your brand can increase its popularity and generate more interest using videos effortlessly. Lumen5's online video maker allows",
    category: "Video Generator",
    logo: "https://i.ibb.co/h87dHPL/Screenshot-2023-04-19-183522.png"
  },
  {
    link: "https://www.kickresume.com/",
    name: "Kickresume",
    description: "Craft an impressive resume that kickstarts your career journey with Kickresume - the leading AI Resume Builder. Kickresume has customizable",
    category: "Writing",
    logo: "https://i.ibb.co/7k2Y3WH/Screenshot-2023-04-19-183143.png"
  },
  {
    link: "https://www.zillionpitches.com/",
    name: "ZillionPitches",
    description: "Introducing Zillion Pitches, the app that helps founders perfect their pitches with AI technology. Impress investors with your pitch for",
    category: "Business",
    logo: "https://i.ibb.co/5v8sDNc/Screenshot-2023-04-19-182637.png"
  },
  {
    link: "https://www.chatbase.co/?via=unlimitedgpt",
    name: "Chatbase",
    description: "Looking for a chatbot for your website? Try Chatbase! It's a personalized ChatGPT that can answer any questions about your",
    category: "Chatbot",
    logo: "https://i.ibb.co/hfzTQKw/Screenshot-2023-04-19-182132.png",
    aff:true
  },
  {
    link: "https://lxi.ai/",
    name: "Lxi.ai",
    description: "Lxi.ai offers a Custom Question Answering solution that provides reliable answers from a GPT-powered AI by leveraging information from",
    category: "Customer Service",
    logo: "https://i.ibb.co/hXBBCpF/c-MZgc-UKx-400x400.png"
  },
  {
    link: "https://www.taption.com/",
    name: "Taption",
    description: "With Taption, transcribing your video is as easy as a tap. It effortlessly generates transcripts, translations, and subtitles in over",
    category: "Speech AI",
    logo: "https://i.ibb.co/PQHdpYD/Screenshot-2023-04-17-231451.png"
  },
  {
    link: "https://novuswriter.ai/",
    name: "NovusWriter",
    description: "NovusWriter revolutionizes content creation by leveraging the power of AI. In just seconds, users can effortlessly generate both written and",
    category: "Writing",
    logo: "https://i.ibb.co/7KR4JHB/Screenshot-2023-04-17-231041.png"
  },
  {
    link: "https://www.neuraltext.com/",
    name: "Neuraltext",
    description: "Neuraltext offers an effortless solution to content creation by helping users write smarter, not harder. By automating content operations, Neuraltext",
    category: "Writing",
    logo: "https://i.ibb.co/n6Wc1Yh/Screenshot-2023-04-17-230713.png"
  },
  {
    link: "https://www.people.ai/",
    name: "People.ai",
    description: "People.ai is a solution for businesses that want to increase their revenue. By utilizing People.ai, companies can improve",
    category: "Sales",
    logo: "https://i.ibb.co/XLB74Mr/Screenshot-2023-04-17-230327.png"
  },
  {
    link: "https://www.faceapp.com/",
    name: "Faceapp",
    description: "With its impressive array of AI filters, backgrounds, effects, and other photo editing tools, FaceApp has earned a place as",
    category: "Photo Editor",
    logo: "https://i.ibb.co/d4ctQZ6/Screenshot-2023-04-17-225953.png"
  },
  {
    link: "https://followr.ai/?via=unlimitedgpt",
    name: "Followr",
    description: "Followr simplifies social media management by automating scheduling, assisting content creation with AI, and providing advanced analytics. Followr helps users",
    category: "Marketing",
    logo: "https://i.ibb.co/vHwzwxZ/Screenshot-2023-04-17-225603.png",
    aff:true
  },
  {
    link: "https://eklipse.gg/",
    name: "Eklipse",
    description: "With Eklipse, you can easily transform your stream highlights into eye-catching content for YouTube, TikTok, and Instagram Reels - all",
    category: "Video Editor",
    logo: "https://i.ibb.co/MsFkzpb/Screenshot-2023-04-17-225234.png"
  },
  {
    link: "https://www.useblackbox.io/",
    name: "Blackbox",
    description: "The AI-powered coding assistant, Blackbox, empowers developers to code with lightning-fast speed and precision, making coding 10x more efficient and",
    category: "Coding",
    logo: "https://i.ibb.co/VT7nqwQ/Screenshot-2023-04-17-224713.png"
  },
  {
    link: "https://sourceai.dev/",
    name: "SourceAI",
    description: "Introducing SourceAI, the revolutionary code generator powered by cutting-edge AI technology. With SourceAI's intuitive and user-friendly interface, anyone can generate",
    category: "Coding",
    logo: "https://i.ibb.co/xzv1QvY/Screenshot-2023-04-17-224228.png"
  },
  {
    link: "https://hacker-ai.ai/",
    name: "Hacker AI",
    description: "The Hacker AI is an AI-based source code analysis tool that detects vulnerabilities that could be exploited by hackers. With",
    category: "Coding",
    logo: "https://i.ibb.co/Jy9SsVh/Screenshot-2023-04-17-223600.png"
  },
  {
    link: "https://codecomplete.ai/",
    name: "CodeComplete",
    description: "CodeComplete is a state-of-the-art coding assistant designed to support businesses. It is a self-hosted tool that can be tailored to",
    category: "Coding",
    logo: "https://i.ibb.co/QNWZrrJ/Screenshot-2023-04-17-222818.png"
  },
  {
    link: "https://photomyne.com/",
    name: "Photomyne",
    description: "Photomyne can help you bring your cherished memories from the past to the present. Photomyne allows you to easily scan",
    category: "Photo Editor",
    logo: "https://i.ibb.co/5GyjTjm/Screenshot-2023-04-17-222354.png"
  },
  {
    link: "https://avc.ai/",
    name: "AVC.AI",
    description: "AVC.AI offers a user-friendly solution for improving and restoring photo quality through the power of deep learning algorithms. By",
    category: "Photo Editor",
    logo: "https://i.ibb.co/ssHyHtv/Screenshot-2023-04-17-221916.png"
  },
  {
    link: "https://vanceai.com/",
    name: "VanceAI",
    description: "VanceAI simplifies photo processing by providing AI-powered tools such as enhancement, upscaling, sharpening, denoising, and background removal, all accessible through",
    category: "Photo Editor",
    logo: "https://i.ibb.co/P1KLFyY/Screenshot-2023-04-17-221443.png"
  },
  {
    link: "https://www.getmunch.com/?utm_campaign=influencers&utm_medium=website&utm_source=rewardful&via=unlimitedgpt",
    name: "Munch",
    description: "Munch helps creators maximize the potential of their long-form videos by extracting the most captivating and relevant clips using advanced",
    category: "Marketing",
    logo: "https://i.ibb.co/56fky2R/Screenshot-2023-04-17-220317.png",
    aff:true
  },
  {
    link: "https://voicemaker.in/",
    name: "Voicemaker",
    description: "With Voicemaker, easily generate audio files for your business needs and continue using them even after your subscription ends. Share",
    category: "Speech AI",
    logo: "https://i.ibb.co/L9NZ1fq/Screenshot-2023-04-14-231127.png"
  },
  {
    link: "https://headlinesai.pro/",
    name: "HeadlineAI",
    description: "With HeadlineAI revolutionize your content with AI-generated Headlines! Perfect for YouTube, Medium, Reddit, and IH - Boost your conversions today!",
    category: "Writing",
    logo: "https://i.ibb.co/gg78xLM/Screenshot-2023-04-14-230556.png"
  },
  {
    link: "https://wishpond.com?fpr=unlimitedgpt",
    name: "Wishpond",
    description: "Wishpond offers a growth-oriented platform equipped with marketing tools that can help businesses scale rapidly without needing a coding background.",
    category: "Marketing",
    logo: "https://i.ibb.co/c1M6s3b/Screenshot-2023-04-14-230005.png",
    aff:true
  },
  {
    link: "https://www.imagica.ai/studio",
    name: "Imagica",
    description: "Build AI apps in minutes with Imagica - no coding required. From idea to a product at lightning speed. Over",
    category: "Coding",
    logo: "https://i.ibb.co/vQrbTf3/Screenshot-2023-04-14-225311.png"
  },
  {
    link: "https://toolbuilder.ai/",
    name: "Toolbuilder",
    description: "Discover the possibilities of Toolbuilder, the AI-generated tool builder that lets you effortlessly create your own AI tools without any",
    category: "Coding",
    logo: "https://i.ibb.co/cxZSf82/Screenshot-2023-04-14-224325.png"
  },
  {
    link: "https://www.scenario.com/",
    name: "Scenario",
    description: "Produce top-notch, unique game elements through AI-powered Scenario. Maintain a consistent style while crafting game assets that are exclusive to",
    category: "Image Generator",
    logo: "https://i.ibb.co/ts3yg6k/Screenshot-2023-04-14-223712.png"
  },
  {
    link: "https://www.orbofi.com/",
    name: "Orbofi",
    description: "Orbofi is an AI content platform for web3, games, and online communities that allow users to generate AI assets, develop",
    category: "Image Generator",
    logo: "https://i.ibb.co/MZTfKD6/Screenshot-2023-04-14-223051.png"
  },
  {
    link: "https://spellbox.app/",
    name: "SpellBox",
    description: "Introducing SpellBox, the all-in-one AI coding assistant that simplifies your coding process. Say farewell to tedious hours of coding and",
    category: "Coding",
    logo: "https://i.ibb.co/rZ9m3pv/Screenshot-2023-04-14-221723.png"
  },
  {
    link: "https://www.brainfi.sh/",
    name: "Brainfish",
    description: "Introducing Brainfish, the world's premier AI-powered customer service platform. Say farewell to customer queries going unanswered with instant responses to",
    category: "Writing",
    logo: "https://i.ibb.co/Svr80mj/Screenshot-2023-04-14-221006.png"
  },
  {
    link: "https://rezon8ai.com/",
    name: "Rezon8AI",
    description: "Rezon8AI offers a convenient solution for managing reviews effortlessly. With its AI-powered system, businesses can save time and effort by",
    category: "Writing",
    logo: "https://i.ibb.co/g31YdXW/Screenshot-2023-04-14-220358.png"
  },
  {
    link: "https://www.caffeinatedcx.com/",
    name: "Caffeinated CX",
    description: "Accelerate your customer support response time with Caffeinated CX - the AI-powered autofill solution that helps your team resolve tickets",
    category: "Customer Service",
    logo: "https://i.ibb.co/fMzFCC4/Screenshot-2023-04-14-215858.png"
  },
  {
    link: "https://yobi.app/",
    name: "Yobi",
    description: "Yobi is changing the game for small businesses with its cutting-edge AI technology. Yobi's super app offers a modern solution",
    category: "Business",
    logo: "https://i.ibb.co/3S4H7wb/Screenshot-2023-04-14-215229.png"
  },
  {
    link: "https://easy-peasy.ai/?via=unlimitedgpt",
    name: "Easy-Peasy.AI",
    description: "Easy-Peasy.AI is the ultimate tool for crafting outstanding emails, video scripts, product descriptions, and marketing materials. With the power",
    category: "Marketing",
    logo: "https://i.ibb.co/JsC4rPn/Screenshot-2023-04-14-214517.png",
    aff:true
  },
  {
    link: "https://ingestai.io/",
    name: "IngestAI",
    description: "Transform your business productivity with AI by leveraging IngestAI. In just a few minutes, you can create AI-powered chatbots for",
    category: "Chatbot",
    logo: "https://i.ibb.co/tKTXkQ9/Screenshot-2023-04-14-212949.png"
  },
  {
    link: "https://yaara.ai/?via=unlimitedgpt",
    name: "Yaara.ai",
    description: "Introducing Yaara.ai, the revolutionary writing tool that utilizes AI technology to craft high-converting copy for improved conversions and ROI.",
    category: "Marketing",
    logo: "https://i.ibb.co/5nDDgFb/Screenshot-2023-04-14-014246.png",
    aff:true
  },
  {
    link: "https://kaiber.ai/",
    name: "Kaiber",
    description: "Unleash Your Imagination with Kaiber. Turn your photos and music into captivating stories with Kaiber's AI engine. No inspiration is",
    category: "Video Generator",
    logo: "https://i.ibb.co/FVmtTHg/Screenshot-2023-04-14-013655.png"
  },
  {
    link: "https://morise.ai?via=unlimitedgpt",
    name: "Morise.ai",
    description: "With Morise.ai, your videos can go viral effortlessly while you concentrate on crafting them. Morise.ai has been taught",
    category: "Marketing",
    logo: "https://i.ibb.co/Z874tqT/Screenshot-2023-04-14-013107.png",
    aff:true
  },
  {
    link: "https://ecold.ai/",
    name: "eCold.ai",
    description: "Transform your cold email game with eCold.ai. Within seconds, receive personalized lines tailored to your needs. No more wasting",
    category: "Marketing",
    logo: "https://i.ibb.co/60FMp5Q/Screenshot-2023-04-14-012442.png"
  },
  {
    link: "https://vidby.com/",
    name: "Vidby",
    description: "Vidby offers a cutting-edge solution for quick and precise video translation and dubbing in over 70 languages. With Vidby, your",
    category: "Speech AI",
    logo: "https://i.ibb.co/tYGxCPm/Screenshot-2023-04-14-011723.png"
  },
  {
    link: "https://www.speechmatics.com/",
    name: "Speechmatics",
    description: "Looking for speech technology that's inclusive and accurate? Look no further than Speechmatics. With its comprehensive features and unmatched accuracy,",
    category: "Writing",
    logo: "https://i.ibb.co/YyfQKGS/Screenshot-2023-04-14-011044.png"
  },
  {
    link: "https://www.quattr.com/",
    name: "Quattr",
    description: "Maximize your online presence with Quattr, the ultimate AI-powered SEO platform for growth and content teams. Say goodbye to time-consuming",
    category: "Writing",
    logo: "https://i.ibb.co/9gX4DkL/Screenshot-2023-04-14-010537.png"
  },
  {
    link: "https://shuffll.com/?via=unlimitedgpt",
    name: "Shuffll",
    description: "Shuffll uses AI to create engaging videos in three simple steps: Discover, Generate, and Record. Get inspiration from competitors, let",
    category: "Video Generator",
    logo: "https://i.ibb.co/XWH6CFn/shuffll.png",
    aff:true
  },
  {
    link: "https://ortto.com/",
    name: "Ortto",
    description: "Simplify journeys with Ortto. Unify data, messaging, and analytics for better targeting. Automate tasks and understand user behavior with comprehensive",
    category: "Sales",
    logo: "https://i.ibb.co/qCg2PtB/Screenshot-2023-04-11-231021.png"
  },
  {
    link: "https://waveline.ai/",
    name: "Waveline",
    description: "Integrate AI into your workflow, business, or product quickly with Waveline. No need for ML experience - building and incorporating",
    category: "Business",
    logo: "https://i.ibb.co/pdtYCNQ/Screenshot-2023-04-11-225520.png"
  },
  {
    link: "https://imgcreator.zmo.ai/",
    name: "ImgCreator",
    description: "ImgCreator is the go-to tool for anyone seeking to create stunning designs, art, and images effortlessly. With AI technology and",
    category: "Image Generator",
    logo: "https://i.ibb.co/X4yTS3c/Screenshot-2023-04-11-224931.png"
  },
  {
    link: "https://commercial.bria.ai/",
    name: "Bria",
    description: "Introducing Bria - the solution for faster, better, and customized visual content. Bria's advanced Generative AI technology enables users to",
    category: "Design",
    logo: "https://i.ibb.co/R9Y77jB/Screenshot-2023-04-11-224207.png"
  },
  {
    link: "https://booltool.boolv.tech/?ref=unlimitedgpt",
    name: "Boolv",
    description: "Welcome to Boolv - the perfect platform for businesses with remarkable products to sell! Join the content marketing revolution today",
    category: "Writing",
    logo: "https://i.ibb.co/gRLcZkn/Screenshot-2023-04-11-223454.png",
    aff:true
  },
  {
    link: "https://www.befunky.com/",
    name: "Befunky",
    description: "Unleash your creativity with BeFunky's easy-to-use online platform for photo editing, graphic design, and collage-making. Whether you're a beginner or",
    category: "Design",
    logo: "https://i.ibb.co/8775ySM/Screenshot-2023-04-11-222529.png"
  },
  {
    link: "https://podcastle.ai/",
    name: "Podcastle",
    description: "Podcastle provides a complete solution for audio storytelling, offering high-quality recording, advanced editing powered by AI, and effortless exporting -",
    category: "Speech AI",
    logo: "https://i.ibb.co/LxSG7Ly/Screenshot-2023-04-11-221754.png"
  },
  {
    link: "https://cleanvoice.ai/",
    name: "Cleanvoice",
    description: "Say goodbye to hours spent editing your podcast! Cleanvoice, an AI-powered tool, can effortlessly eliminate filler sounds, stuttering, and mouth",
    category: "Automation",
    logo: "https://i.ibb.co/TThPZh7/Screenshot-2023-04-10-233654.png"
  },
  {
    link: "https://contentbot.ai/",
    name: "ContentBot",
    description: "Experience the future of writing with ContentBot - the ultimate solution for effortless content marketing. With features such as content",
    category: "Writing",
    logo: "https://i.ibb.co/mJD2Z12/Screenshot-2023-04-10-232937.png"
  },
  {
    link: "https://www.deepl.com/write",
    name: "DeepL",
    description: "Transform your writing instantly with DeepL's powerful tools. Correct grammar and punctuation errors, customize your tone, enhance your language with",
    category: "Writing",
    logo: "https://i.ibb.co/8DRkkZz/Screenshot-2023-04-10-232213.png"
  },
  {
    link: "https://echo.win/",
    name: "Echowin",
    description: "Introducing Echowin - the AI phone assistant that forwards calls, generates leads, and answers calls for businesses 24/7. With",
    category: "Customer Service",
    logo: "https://i.ibb.co/7nbSjRK/Screenshot-2023-04-10-231424.png"
  },
  {
    link: "https://customgpt.ai?fpr=unlimitedgpt",
    name: "CustomGPT.ai",
    description: "Boost your customer engagement by 10x and improve employee efficiency and revenue growth with CustomGPT.ai. This AI platform utilizes",
    category: "Chatbot",
    logo: "https://i.ibb.co/jMgf2mv/Screenshot-2023-04-10-230229.png",
    aff:true
  },
  {
    link: "https://axiom.ai/",
    name: "Axiom.ai",
    description: "Automate website tasks and actions without coding with Axiom.ai's browser automation. Save valuable time with browser bots that can",
    category: "Coding",
    logo: "https://i.ibb.co/23n137n/Screenshot-2023-04-10-225719.png"
  },
  {
    link: "https://10web.io/?_from=unlimitedgpt",
    name: "10Web",
    description: "The 10Web WordPress Platform is powered by artificial intelligence and offers a range of features including an automated website builder,",
    category: "Coding",
    logo: "https://i.ibb.co/sgLrhZK/Screenshot-2023-04-10-225334.png",
    Hot:true,
  },
  {
    link: "https://www.freeday.ai/",
    name: "Freeday",
    description: "Make your team more productive and creative with Freeday. Outsource repetitive and mundane tasks to our digital employees and save",
    category: "Productivity",
    logo: "https://i.ibb.co/Ydtx384/Screenshot-2023-04-10-224938.png"
  },
  {
    link: "https://norby.io/",
    name: "Norby AI",
    description: "Enhance your website's customer support with Norby AI. By integrating a ChatGPT-powered chatbot, your customers can receive fast and accurate",
    category: "Customer Service",
    logo: "https://i.ibb.co/YTyKszC/Screenshot-2023-04-10-224511.png"
  },
  {
    link: "https://emailtree.ai/",
    name: "Emailtree.ai",
    description: "Emailtree.ai is a revolutionary platform that enables businesses of all sizes to enhance their revenue and customer satisfaction with",
    category: "Customer Service",
    logo: "https://i.ibb.co/FhyTjH2/Screenshot-2023-04-10-223950.png"
  },
  {
    link: "https://www.fotor.com/",
    name: "Fotor",
    description: "Transform your photos with Fotor's easy-to-use online photo editor! With just a few clicks, you can crop, resize, add text,",
    category: "Photo Editor",
    logo: "https://i.ibb.co/XY44gy0/Screenshot-2023-04-10-000805.png"
  },
  {
    link: "https://hotpot.ai/",
    name: "Hotpot.ai",
    description: "Transform your creative vision into reality with Hotpot - the perfect tool to craft exceptional graphics, stunning visuals, and compelling",
    category: "Design",
    logo: "https://i.ibb.co/CPjjDCH/Screenshot-2023-04-09-234439.png"
  },
  {
    link: "https://smartbear.com/",
    name: "SmartBear",
    description: "SmartBear offers test automation, API testing, code review, and performance monitoring tools to help teams confidently create and deliver high-quality",
    category: "Coding",
    logo: "https://i.ibb.co/x8NvHvs/Screenshot-2023-04-09-225517.png"
  },
  {
    link: "https://www.listener.fm/",
    name: "Listener.fm",
    description: "Revamp Your Podcast's Post-Production Process with AI-Generated Titles, Descriptions, and Show Notes using Listener.fm. Streamline Your Workflow and Enhance",
    category: "Writing",
    logo: "https://i.ibb.co/MShP1CW/Screenshot-2023-04-09-224912.png"
  },
  {
    link: "https://hello.podium.page/?via=unlimitedgpt",
    name: "Podium",
    description: "Create high-quality content for your podcast effortlessly with Podium, an AI copywriter. Save time and streamline your podcast production by",
    category: "Writing",
    logo: "https://i.ibb.co/yhL98XD/Screenshot-2023-04-09-224310.png",
    aff:true
  },
  {
    link: "https://detail.co/",
    name: "Detail",
    description: "Easily capture and remix inspiring videos on your Mac using Detail. Detail lets you record from multiple angles at once,",
    category: "Video Editor",
    logo: "https://i.ibb.co/0G2LBkN/Screenshot-2023-04-08-031405.png"
  },
  {
    link: "https://www.veesual.ai/",
    name: "Veesual",
    description: "Veesual.ai is a cutting-edge platform that utilizes advanced technology to create visually appealing and engaging content. With Veesual.ai,",
    category: "Design",
    logo: "https://i.ibb.co/VC5X5Rh/Screenshot-2023-04-08-025202.png"
  },
  {
    link: "https://e-bot7.com/",
    name: "E-bot7",
    description: "Say hello to E-bot7, the top-rated and user-friendly Conversational AI solution. Experience the effortless and hassle-free way to manage your",
    category: "Chatbot",
    logo: "https://i.ibb.co/HLZ795p/Screenshot-2023-04-08-023822.png"
  },
  {
    link: "https://www.contents.com/",
    name: "Contents.com",
    description: "Create content that packs a punch in no time with Contents.com! This innovative platform harnesses the power of generative",
    category: "Writing",
    logo: "https://i.ibb.co/XxXDZc5/Screenshot-2023-04-08-023325.png"
  },
  {
    link: "https://yseop.com/",
    name: "Yseop",
    description: "Boost your business performance with Yseop's Generative AI tool. Yseop's digital assistant is transforming the future of work for regulated",
    category: "Business",
    logo: "https://i.ibb.co/3hLWWVw/Screenshot-2023-04-08-022451.png"
  },
  {
    link: "https://www.veed.io/",
    name: "VEED",
    description: "VEED assists in creating awesome videos that are accessible to everyone, including you! Given the audience's inclination towards videos, why",
    category: "Video Editor",
    logo: "https://i.ibb.co/hHvr5QJ/Screenshot-2023-04-08-022005.png"
  },
  {
    link: "https://www.aive.com/",
    name: "Aive",
    description: "Aive is the AI video platform that adapts your content for social media. Simplify large-scale video production, enhance post-production, and",
    category: "Video Generator",
    logo: "https://i.ibb.co/M7PKvDc/Screenshot-2023-04-08-021044.png"
  },
  {
    link: "https://www.papercup.com/",
    name: "Papercup",
    description: "Experience the power of Papercup's AI Dubbing technology, the ultimate solution for taking your video content to the global market",
    category: "Speech AI",
    logo: "https://i.ibb.co/k9HYgNG/Screenshot-2023-04-08-020725.png"
  },
  {
    link: "https://www.altered.ai/",
    name: "Altered",
    description: "Transform your vocal identity with Altered's one-of-a-kind technology. Experience the power to switch seamlessly between an exclusive range of carefully",
    category: "Speech AI",
    logo: "https://i.ibb.co/fNTcNYr/Screenshot-2023-04-08-020101.png"
  },
  {
    link: "https://wluper.com/",
    name: "Wluper",
    description: "Wluper provides an advanced Conversational AI solution that helps enhance your team's efficiency and productivity. The platform seamlessly integrates with",
    category: "Speech AI",
    logo: "https://i.ibb.co/nD5tLmg/Screenshot-2023-04-08-015606.png"
  },
  {
    link: "https://www.voicemod.net/",
    name: "Voicemod",
    description: "The Voicemod Voice Changer for PC offers a real-time AI Voice Changer and soundboard that allows users to express themselves",
    category: "Speech AI",
    logo: "https://i.ibb.co/Lhy7wjh/Screenshot-2023-04-08-014943.png"
  },
  {
    link: "https://www.corti.ai/",
    name: "Corti",
    description: "With Corti Voice-based AI, doctors can focus on patients instead of paperwork. This technology listens to patient encounters, transcribes them,",
    category: "Speech AI",
    logo: "https://i.ibb.co/LgKz28x/Screenshot-2023-04-08-014404.png"
  },
  {
    link: "https://aitister.com/",
    name: "AITISTER",
    description: "Unleash your creativity with Aitister - a cutting-edge design tool that generates unlimited unique designs effortlessly. With our powerful Artificial",
    category: "Design",
    logo: "https://i.ibb.co/pXH1WgH/Screenshot-2023-04-08-013712.png"
  },
  {
    link: "https://writerly.ai/",
    name: "Writerly",
    description: "Unleash your content creation superpower with Writerly. Writerly's AI technology empowers innovative businesses, teams, and creators to effortlessly produce SEO-friendly",
    category: "Writing",
    logo: "https://i.ibb.co/yk04yCt/Screenshot-2023-04-08-013247.png"
  },
  {
    link: "https://aiseo.ai/",
    name: "AISEO",
    description: "Rev up your writing skills with AISEO Assistant! This AI-powered tool will help you create content in a jiffy. From",
    category: "Writing",
    logo: "https://i.ibb.co/F8Hf0Zh/Screenshot-2023-04-08-012734.png"
  },
  {
    link: "https://www.zebracat.ai/",
    name: "Zebracat",
    description: "Zebracat harnesses the power of AI to produce stunning marketing videos at an incredible speed, 10x faster than traditional methods.",
    category: "Video Generator",
    logo: "https://i.ibb.co/FnJ0q6Y/Screenshot-2023-04-07-220321.png"
  },
  {
    link: "https://drafter.ai/",
    name: "Drafter AI",
    description: "With Drafter AI, you can create AI-powered tools in just a few hours instead of months. No coding is necessary",
    category: "Coding",
    logo: "https://i.ibb.co/hBk26R7/Screenshot-2023-04-07-215812-1.png"
  },
  {
    link: "https://clearword.com/",
    name: "Clearword",
    description: "Clearword effortlessly transforms every meeting into a series of decisive actions and outcomes, delivering crystal-clear messaging and absolute clarity for",
    category: "Productivity",
    logo: "https://i.ibb.co/ykWKrbW/Screenshot-2023-04-07-215453.png"
  },
  {
    link: "https://phrasee.co/",
    name: "Phrasee",
    description: "Transform your online presence with AI-powered content from Phrasee. Phrasee's platform generates on-brand copy that drives clicks, conversions, and customer",
    category: "Marketing",
    logo: "https://i.ibb.co/0YDyw9g/Screenshot-2023-04-07-214908.png"
  },
  {
    link: "https://copymonkey.ai/?via=unlimitedgpt",
    name: "CopyMonkey",
    description: "With CopyMonkey, you can create and improve your Amazon listings in just seconds. By leveraging the power of AI, it",
    category: "Marketing",
    logo: "https://i.ibb.co/q9D3ZQB/Screenshot-2023-04-07-214516.png",
    aff:true
  },
  {
    link: "https://app.digitalfirst.ai?fpr=unlimitedgpt",
    name: "Digital First AI",
    description: "Revolutionize your marketing strategy with Digital First AI. Harness the power of AI to generate and execute customized marketing plans",
    category: "Writing",
    logo: "https://i.ibb.co/sb90Zvr/Screenshot-2023-04-07-214107.png",
    aff:true
  },
  {
    link: "https://app.neuro-flash.com/free?fpr=unlimitedgpt",
    name: "Neuroflash",
    description: "Transform your content creation process with Neuroflash, the ultimate AI tool loved by over 300,000 users worldwide. Say goodbye",
    category: "Writing",
    logo: "https://i.ibb.co/KLsHQyp/Screenshot-2023-04-07-213715.png",
    aff:true
  },
  {
    link: "https://wordlift.io/",
    name: "Wordlift",
    description: "Boost your website's traffic effortlessly with Wordlift! This innovative SEO tool utilizes the power of artificial intelligence to do the",
    category: "Writing",
    logo: "https://i.ibb.co/jgHLsmB/Screenshot-2023-04-07-213219.png"
  },
  {
    link: "https://neural.love/",
    name: "Neural.Love",
    description: "Transform your content creation with Neural.Love's free AI-powered tools. Create stunning masterpieces by inputting 2-3 words or upload 20+",
    category: "Image Generator",
    logo: "https://i.ibb.co/ZxppCSM/Screenshot-2023-04-07-212600.png"
  },
  {
    link: "https://textcortex.com/?via=unlimitedgpt",
    name: "Text.Cortex",
    description: "Meet Zeno, your AI assistant for increased productivity with Text.Cortex. It helps you create quality content, fix grammar, summarize",
    category: "Writing",
    logo: "https://i.ibb.co/KqK8NhY/Screenshot-2023-04-07-212052.png",
    aff:true
  },
  {
    link: "https://www.sendpotion.com/",
    name: "Potion",
    description: "Create personalized videos effortlessly with Potion. Boost your sales by booking more meetings, building trust, and converting more leads with",
    category: "Video Generator",
    logo: "https://i.ibb.co/6W53rvB/Screenshot-2023-04-07-211519.png"
  },
  {
    link: "https://www.trymaverick.com/",
    name: "Maverick",
    description: "Rev up your Ecommerce customer experience with personalized videos at scale! With Maverick's innovative use of AI-generated videos, your online",
    category: "Video Generator",
    logo: "https://i.ibb.co/Jpqf4PV/Screenshot-2023-04-07-210149.png"
  },
  {
    link: "https://www.adauris.ai/",
    name: "Ad Auris",
    description: "With Ad Auris, convert your written content into audio quickly and easily. Enjoy hassle-free audio for your writing, whether you're",
    category: "Speech AI",
    logo: "https://i.ibb.co/CJm8mnd/Screenshot-2023-04-07-205824.png"
  },
  {
    link: "https://nanonets.com/",
    name: "Nanonets",
    description: "Say goodbye to tedious manual data entry with Nanonets AI tool. Experience lightning-fast document data capture, saving valuable time and",
    category: "Automation",
    logo: "https://i.ibb.co/6FJpB54/Screenshot-2023-04-07-205454.png"
  },
  {
    link: "https://steno.ai/",
    name: "Steno",
    description: "Explore your preferred podcasts with Steno's full transcription feature. Follow along with the audio as you read and reference the",
    category: "Speech AI",
    logo: "https://i.ibb.co/5xbz9Tt/Screenshot-2023-04-07-205147.png"
  },
  {
    link: "https://slidesai.io/?via=unlimitedgpt",
    name: "SlidesAI",
    description: "Transform your presentations with SlideAI! Effortlessly generate professional and captivating slides within seconds, without the hassle of manual creation. SlideAI",
    category: "Presentation",
    logo: "https://i.ibb.co/0MLDNB5/Screenshot-2023-04-07-194716.png",
    aff:true
  },
  {
    link: "https://looka.com/",
    name: "Looka",
    description: "Create a stunning brand that reflects your style with Looka. Utilize Looka's advanced AI technology to create a logo and",
    category: "Business",
    logo: "https://i.ibb.co/LdB9TSt/Screenshot-2023-04-07-194302.png"
  },
  {
    link: "https://windsor.ai/",
    name: "Windsor.ai",
    description: "Maximize the potential of your marketing efforts by integrating all your data with Windsor.ai. With its multi-touch marketing attribution",
    category: "Business",
    logo: "https://i.ibb.co/G0PjyHw/Screenshot-2023-04-07-193956.png"
  },
  {
    link: "https://www.sloyd.ai/",
    name: "Sloyd",
    description: "Transform your imagination into reality with Sloyd's effortless 3D modelling. Experience the magic of instant 3D creation like never before.",
    category: "Design",
    logo: "https://i.ibb.co/qpkYTWQ/Screenshot-2023-04-07-192923.png"
  },
  {
    link: "https://www.rosebud.ai/ai-game-assets",
    name: "PixelVibe by Rosebud AI",
    description: "Create game assets quickly and consistently with PixelVibe's AI technology. Your AI-powered collaborator will help you generate concepts and assets",
    category: "Design",
    logo: "https://i.ibb.co/zmpjMZw/Screenshot-2023-04-07-192553.png"
  },
  {
    link: "https://botika.io/",
    name: "Botika",
    description: "Bring more diversity to your fashion campaigns with Botika. With the power of AI, effortlessly generate unlimited models to scale",
    category: "Design",
    logo: "https://i.ibb.co/W0pRVjh/Screenshot-2023-04-07-191949.png"
  },
  {
    link: "https://letsenhance.io/ai-image-generation",
    name: "Let'sEnhance.io",
    description: "Transform your photos instantly with Let'sEnhance.io! Elevate image quality, enhance resolution, and add crystal-clear details. Achieve stunning results with",
    category: "Image Generator",
    logo: "https://i.ibb.co/vvnRZLq/Screenshot-2023-04-07-191524.png"
  },
  {
    link: "https://www.trypencil.com/",
    name: "Pencil",
    description: "Experience lightning-fast ad creation with Pencil, the AI Ad Generator that enables brands and agencies to produce new ad versions",
    category: "Image Generator",
    logo: "https://i.ibb.co/59r4zgQ/Screenshot-2023-04-07-190913.png"
  },
  {
    link: "https://www.autobound.ai/",
    name: "Autobound",
    description: "Want to triple your email reply rate? Autobound can help! Say goodbye to spending 20 minutes on each prospect research",
    category: "Writing",
    logo: "https://i.ibb.co/RCgXs31/Screenshot-2023-04-07-190500.png"
  },
  {
    link: "https://www.compose.ai/",
    name: "Compose AI",
    description: "Boost your writing speed by 40% with the help of AI! Compose AI, a Chrome extension, offers autocompletion and text",
    category: "Writing",
    logo: "https://i.ibb.co/qgh57Jw/Screenshot-2023-04-07-190211.png"
  },
  {
    link: "https://www.persado.com/",
    name: "Persado",
    description: "Persado's generative AI platform is designed to inspire individuals to engage and take action, which is the key to achieving",
    category: "Writing",
    logo: "https://i.ibb.co/0J0tgDx/Screenshot-2023-04-07-185800.png"
  },
  {
    link: "https://www.solacevision.com/",
    name: "Solace Vision",
    description: "Transform your written words into stunning 3D creations with Solace Vision's natural language-powered platform. Bring your ideas to life in",
    category: "Design",
    logo: "https://i.ibb.co/xSrXK40/Screenshot-2023-04-07-180940.png"
  },
  {
    link: "https://www.lately.ai/",
    name: "Lately",
    description: "Say the perfect words in your own unique way on a large scale with Lately's AI. Lately's technology is designed",
    category: "Writing",
    logo: "https://i.ibb.co/SdCy7RZ/Screenshot-2023-04-07-180303.png"
  },
  {
    link: "https://jenni.ai/",
    name: "Jenni",
    description: "Transform your writing game with the ultimate AI writing assistant. Jenni's got your back to help you complete your written",
    category: "Writing",
    logo: "https://i.ibb.co/yR7pfW0/Screenshot-2023-04-07-175727.png"
  },
  {
    link: "https://www.steve.ai/",
    name: "Steve AI",
    description: "Create stunning live-action videos and animations from plain text with Steve AI - the ultimate AI tool for video creation.",
    category: "Video Generator",
    logo: "https://i.ibb.co/9bJdqYH/Screenshot-2023-04-07-175143.png"
  },
  {
    link: "https://www.balto.ai/",
    name: "Balto",
    description: "Maximize Your Agents' Potential with Balto's Cutting-Edge AI. Empower your team with behaviour-changing technology that ensures customer satisfaction, boosts revenue,",
    category: "Communication",
    logo: "https://i.ibb.co/smfrY3q/Screenshot-2023-04-07-174534.png"
  },
  {
    link: "https://sapling.ai/",
    name: "Sapling",
    description: "Sapling is a language model assistant that provides real-time suggestions to customer-facing teams, helping them compose personalized responses twice as",
    category: "Customer Service",
    logo: "https://i.ibb.co/4YLy4hZ/Screenshot-2023-04-07-174032.png"
  },
  {
    link: "https://ushur.com/",
    name: "Ushur",
    description: "Transform your customer interactions with Ushur - the cutting-edge Customer Experience Automation™ provider. With AI and No-code technology, every micro-engagement™",
    category: "Chatbot",
    logo: "https://i.ibb.co/r3WfZVF/Screenshot-2023-04-07-173553.png"
  },
  {
    link: "https://www.tymely.ai/",
    name: "Tymely",
    description: "Experience the future of customer service with Tymely - a revolutionary AI-powered platform that takes customer service to the next",
    category: "Chatbot",
    logo: "https://i.ibb.co/G32Tb8s/Screenshot-2023-04-07-173126.png"
  },
  {
    link: "https://www.the.com/",
    name: "The.com",
    description: "Boost your earnings, customer experience, sales, audience, and website traffic by leveraging The.com. Create 50 customized pages for your",
    category: "Coding",
    logo: "https://i.ibb.co/2hQBjSG/Screenshot-2023-04-07-172700.png"
  },
  {
    link: "https://durable.co/",
    name: "Durable",
    description: "Create your own stunning website effortlessly with Durable's AI website builder. It generates complete websites with images and text in",
    category: "Coding",
    logo: "https://i.ibb.co/kHzh9hh/Screenshot-2023-04-06-222501.png"
  },
  {
    link: "https://www.codacy.com/",
    name: "Codacy",
    description: "Elevate your team's code game with Codacy! Our platform supports over 40 programming languages and boasts a community of over",
    category: "Coding",
    logo: "https://i.ibb.co/grKgjTJ/Screenshot-2023-04-06-222111.png"
  },
  {
    link: "https://www.dhiwise.com/",
    name: "DhiWise",
    description: "Unlock lightning-fast app development without sacrificing code quality or developer experience with DhiWise. Create React and Flutter applications with ease",
    category: "Coding",
    logo: "https://i.ibb.co/Fg8MYfx/Screenshot-2023-04-06-221643.png"
  },
  {
    link: "https://forethought.ai/",
    name: "Forethought",
    description: "Making the most out of limited resources is crucial in modern business. Maximizing efficiency and ROI for support teams is",
    category: "Chatbot",
    logo: "https://i.ibb.co/tK28KBM/Screenshot-2023-04-06-221033.png"
  },
  {
    link: "https://www.descript.com?lmref=zRn6Sw",
    name: "Descript",
    description: "Transform your video and podcast editing process with Descript - an easy, efficient, and enjoyable way to edit. With Descript,",
    category: "Video Editor",
    logo: "https://i.ibb.co/YkvN0vT/Screenshot-2023-04-06-220425.png",
    Hot:true,
  },
  {
    link: "https://picsart.com/",
    name: "Picsart",
    description: "Picsart is a versatile platform that lets you explore your creativity with photo, video editing, and design tools. You'll find",
    category: "Photo Editor",
    logo: "https://i.ibb.co/56Kghx7/Screenshot-2023-04-06-220034.png"
  },
  {
    link: "https://www.photoroom.com/",
    name: "PhotoRoom",
    description: "PhotoRoom is an all-in-one creative photo editing platform that enables users to create professional designs effortlessly. The app allows for",
    category: "Photo Editor",
    logo: "https://i.ibb.co/W38sQmS/Screenshot-2023-04-06-215443.png",
    Hot:true,
  },
  {
    link: "https://www.aragon.ai/?via=unlimitedgpt",
    name: "Aragon",
    description: "Get stunning professional headshots effortlessly with Aragon. Utilize the latest in A.I. technology to create high-quality headshots of yourself",
    category: "Image Generator",
    logo: "https://i.ibb.co/GP978pn/Screenshot-2023-04-06-215006.png",
    Hot:true,
  },
  {
    link: "https://www.deepmotion.com/",
    name: "DeepMotion",
    description: "Revamp your animation workflow by incorporating cutting-edge markerless motion capture and live 3D body tracking powered by AI through our",
    category: "Design",
    logo: "https://i.ibb.co/gZW7j63/Screenshot-2023-04-06-214629.png"
  },
  {
    link: "https://stenography.dev/",
    name: "Stenography",
    description: "Stenography is a revolutionary tool that blends advanced AI technology (OpenAI Codex) with code parsing techniques to create a smart",
    category: "Coding",
    logo: "https://i.ibb.co/4tznCvR/Screenshot-2023-04-06-214227.png"
  },
  {
    link: "https://coqui.ai/",
    name: "Coqui",
    description: "Introducing Coqui Studio, the game-changer in voiceovers. Experience the magic of realistic and emotive text-to-speech, thanks to our cutting-edge generative",
    category: "Speech AI",
    logo: "https://i.ibb.co/swDDk42/Screenshot-2023-04-06-213737.png"
  },
  {
    link: "https://www.wellsaidlabs.com/?via=unlimitedgpt",
    name: "WellSaid",
    description: "Transform your written words into compelling voiceovers instantly with WellSaid Labs. As the leading AI voice platform, it is trusted",
    category: "Speech AI",
    logo: "https://i.ibb.co/NpZvRSQ/Screenshot-2023-04-06-213350.png",
    Hot:true,
  },
  {
    link: "https://www.readspeaker.com/",
    name: "Readspeaker.ai",
    description: "Connect with potential customers, comfort current clients, and foster brand loyalty. With ReadSpeaker.ai's text-to-speech technology, your conversational AI systems",
    category: "Speech AI",
    logo: "https://i.ibb.co/3vxP3P4/Screenshot-2023-04-06-212846.png"
  },
  {
    link: "https://www.kaedim3d.com/",
    name: "Kaedim",
    description: "Transform your 3D modelling game with Kaedim. All you need is an image to create stunning 3D art with ease",
    category: "Design",
    logo: "https://i.ibb.co/T8BhtMw/Screenshot-2023-04-06-211322.png"
  },
  {
    link: "https://www.peppercontent.io/",
    name: "Peppertype.ai",
    description: "Revolutionize your content creation with Peppertype's AI-driven platform. From ideation to distribution and measurement, it's now easier than ever to",
    category: "Writing",
    logo: "https://i.ibb.co/3dHX09x/Screenshot-2023-04-06-210925.png"
  },
  {
    link: "https://gomoonbeam.com/?via=unlimitedgpt",
    name: "Moonbeam",
    description: "Eliminate the hassle of starting your next academic article, presentation, speech, blog, essay, tech doc, or proposal from scratch. Let",
    category: "Writing",
    logo: "https://i.ibb.co/7YVMRnL/Screenshot-2023-04-06-210623.png",
    Hot:true,
  },
  {
    link: "https://www.deepswap.ai/",
    name: "Deepwap AI",
    description: "Deepswap.ai is an online AI face swap app to generate faceswap videos, photos, and GIFs. Over 150 million users",
    category: "Image Generator",
    logo: "https://i.ibb.co/bv09QnN/Screenshot-2023-04-11-at-10-37-04-PM.png"
  },
  {
    link: "https://www.askcodi.com/",
    name: "AskCodi",
    description: "Save time, and work smarter! AskCodi is designed to simplify your development process, helping you complete tasks more efficiently. By",
    category: "Coding",
    logo: "https://i.ibb.co/vzFvnCX/Screenshot-2023-04-04-212708.png"
  },
  {
    link: "https://invideo.sjv.io/unlimitedgpt",
    name: "InVideo",
    description: "Produce professional-grade videos effortlessly from the get-go using InVideo. With InVideo's pre-designed templates, you can easily personalize your video even",
    category: "Video Editor",
    logo: "https://i.ibb.co/5GzJ72K/Screenshot-2023-04-04-212358.png",
    Hot:true,
  },
  {
    link: "http://www.deeparteffects.com/",
    name: "Deep Art Effects",
    description: "Transform your images into works of art with Deep Art Effects. Using the power of AI, the Deep Art Effects",
    category: "Photo Editor",
    logo: "https://i.ibb.co/yVXJyth/Screenshot-2023-04-04-211857.png"
  },
  {
    link: "https://designs.ai/",
    name: "Designs.ai",
    description: "With Designs.ai, bring your creative ideas to life in no time! With just a few clicks, you can design",
    category: "Design",
    logo: "https://i.ibb.co/9tsP3K4/Screenshot-2023-04-04-211537.png"
  },
  {
    link: "https://quillbot.com/",
    name: "Quillbot",
    description: "Transform your writing with QuillBot's AI-driven paraphrasing tool. Paraphrase by QuillBot is free, user-friendly, and lightning-fast, making it the ultimate",
    category: "Writing",
    logo: "https://i.ibb.co/HHS8RX6/Screenshot-2023-04-04-211020.png"
  },
  {
    link: "https://shakespeare.ai/lp/start-for-free/?fpr=mohammed-sadiq69",
    name: "Shakespeare",
    description: "Experience the future of marketing with Shakespeare. Shakespeare is an AI-powered expert dedicated to working on your campaigns round-the-clock, delivering",
    category: "Writing",
    logo: "https://i.ibb.co/stL2dB1/Screenshot-2023-04-04-210652.png",
    aff:true
  },
  {
    link: "https://wordai.com/?ref=3abb3d",
    name: "WordAi",
    description: "Revolutionize Your Content Creation with WordAi's AI Technology. Save time and money while producing exceptional content that pleases both your",
    category: "Writing",
    logo: "https://i.ibb.co/GVrRq7M/Screenshot-2023-04-04-210008.png",
    aff:true
  },
  {
    link: "https://www.articleforge.com/",
    name: "Article Forge",
    description: "Create outstanding content effortlessly with Article Forge. Article Forge harnesses the power of advanced artificial intelligence and deep learning to",
    category: "Writing",
    logo: "https://i.ibb.co/PTKqbZr/Screenshot-2023-04-04-205533.png"
  },
  {
    link: "https://gamma.app/",
    name: "Gamma",
    description: "Introducing Gamma, a fresh canvas for your ideas fueled by AI. Simply start typing and watch your content come to",
    category: "Presentation",
    logo: "https://i.ibb.co/YtW4L4f/Screenshot-2023-04-04-204812.png"
  },
  {
    link: "https://picwish.com/",
    name: "PicWish",
    description: "PicWish is a photo editing platform that leverages AI technology to simplify and enhance your editing process. With PicWish, you",
    category: "Photo Editor",
    logo: "https://i.ibb.co/7GxqJTw/Screenshot-2023-04-04-204429.png"
  },
  {
    link: "https://fliki.ai/?via=unlimitedgpt",
    name: "Fliki",
    description: "Transform your text into engaging videos with Fliki's AI voices. Effortlessly create professional-looking videos from your scripts or blog posts",
    category: "Video Generator",
    logo: "https://i.ibb.co/MMrFTPN/Screenshot-2023-04-04-001540.png",
    aff:true
  },
  {
    link: "https://www.flexclip.com/",
    name: "FlexClip",
    description: "With FlexClip, your video editing experience will be as smooth as silk. Impress your audience with visually appealing clips that",
    category: "Video Editor",
    logo: "https://i.ibb.co/DRhDTNY/Screenshot-2023-04-03-235955.png"
  },
  {
    link: "https://taskade.com?via=unlimitedgpt",
    name: "Taskade",
    description: "Improve your team's efficiency with Taskade, a tool for creating a second brain. Use AI Content Writer to speed up",
    category: "Business",
    logo: "https://i.ibb.co/Xj1ZHyb/Screenshot-2023-04-03-234809.png",
    aff:true
  },
  {
    link: "https://smartlead.ai/?via=unlimitedgpt",
    name: "Smartlead",
    description: "Smartlead.ai offers a solution to boost email sales with advanced features. The platform provides unlimited sender accounts, AI personalization,",
    category: "Sales",
    logo: "https://i.ibb.co/9wZbz0Y/Screenshot-2023-04-03-233527.png",
    aff:true
  },
  {
    link: "https://seamless.ai/",
    name: "Seamless.ai",
    description: "Seamless.AI offers sales software that can help businesses find verified phone numbers, emails, and direct dials for potential customers.",
    category: "Sales",
    logo: "https://i.ibb.co/chz1js4/Screenshot-2023-04-03-231422.png"
  },
  {
    link: "https://pixis.ai/",
    name: "Pixis",
    description: "Pixis AI offers a specialized infrastructure for growth marketing that utilizes AI solutions to help scale demand generation. The technology",
    category: "Business",
    logo: "https://i.ibb.co/MMB2yCb/Screenshot-2023-04-03-230514.png"
  },
  {
    link: "https://crawlq.ai/",
    name: "CrawlQ",
    description: "Capture your customers' attention with mesmerizing conversational AI - the game-changer for branding! Witness remarkable business growth with high-return on",
    category: "Writing",
    logo: "https://i.ibb.co/MMstHkk/Screenshot-2023-04-03-222353.png"
  },
  {
    link: "https://www.smartwriter.ai/",
    name: "Smartwriter",
    description: "Create tailored emails in seconds and increase your response rate by 8x with AI-powered Smartwriter. Automate your outreach strategy and",
    category: "Writing",
    logo: "https://i.ibb.co/fxs2hst/Screenshot-2023-04-03-220746.png"
  },
  {
    link: "https://gocharlie.ai?fpr=unlimitedgpt",
    name: "GoCharlie",
    description: "Introducing Charlie - the ultimate companion for content creators! With Charlie by your side, say goodbye to limits and hello",
    category: "Marketing",
    logo: "https://i.ibb.co/w0TJ3ws/Screenshot-2023-04-03-215645.png",
    aff:true
  },
  {
    link: "https://socialstudio.ai/?ref=unlimitedgpt",
    name: "Social Studio",
    description: "Unleash the power of automation with Social Studio, your very own AI assistant for Instagram. With its ingenious Artificial Intelligence,",
    category: "Automation",
    logo: "https://i.ibb.co/Fq3NHdj/Screenshot-2023-04-03-213407.png",
    aff:true
  },
  {
    link: "https://predis.ai?ref=unlimitedgpt",
    name: "Predis.ai",
    description: "Are you struggling to create Social Media content? Don't fret, being an expert isn't a must! Predis AI Social Media",
    category: "Marketing",
    logo: "https://i.ibb.co/7WDVJv8/Screenshot-2023-04-03-212153.png",
    aff:true
  },
  {
    link: "https://www.creaitor.ai/?ref=unlimitedgpt",
    name: "Creaitor.ai",
    description: "Save time and create amazing content effortlessly with Creaitor.ai. Creaitor.ai's advanced AI technology handles all your writing needs",
    category: "Writing",
    logo: "https://i.ibb.co/p2cQBLb/Screenshot-2023-04-03-112650.png",
    aff:true
  },
  {
    link: "https://www.listnr.tech/?gr_pk=81j7&gr_uid=jOw7",
    name: "Listnr",
    description: "Check out Listnr - the AI-powered Text to Speech Generator! With Listnr, you can create high-quality TTS audio using some",
    category: "Speech AI",
    logo: "https://i.ibb.co/72j9w9D/Screenshot-2023-04-03-111941.png",
    aff:true
  },
  {
    link: "https://getgenie.ai?rui=1064",
    name: "GetGenie",
    description: "Experience the magic of GetGenie AI, the ultimate WordPress tool that seamlessly combines all the essential features in one place.",
    category: "Marketing",
    logo: "https://i.ibb.co/crzpKpw/Screenshot-2023-04-03-111119.png",
    aff:true
  },
  {
    link: "https://www.lalal.ai/?fp_ref=unlimitedgpt",
    name: "LALAL.AI",
    description: "LALAL.AI extracts the vocal, accompaniment, and various instruments seamlessly with the world's #1 AI-powered technology. Enjoy unparalleled high-quality stem",
    category: "Speech AI",
    logo: "https://i.ibb.co/wdMWBTv/Screenshot-2023-04-03-110118.png",
    aff:true
  },
  {
    link: "https://www.trinka.ai/",
    name: "Trinka AI",
    description: "Trinka is an online grammar checker and language correction AI tool for academic and technical writing. Trinka finds difficult errors",
    category: "Writing",
    logo: "https://i.ibb.co/jWp5PvP/Screenshot-2023-04-02-at-10-12-24-AM.png"
  },
  {
    link: "https://www.resemble.ai/",
    name: "Resemble AI",
    description: "The Resemble platform offers a comprehensive voice AI toolkit that includes Text-to-Speech, Speech-to-Speech, Neural Audio Editing, and Language Dubbing features.",
    category: "Speech AI",
    logo: "https://i.ibb.co/G0nj5vq/Screenshot-2023-04-02-200715.png"
  },
  {
    link: "https://linguix.com/",
    name: "Linguix",
    description: "Enhance your HR, Marketing, Sales, and Support content effortlessly with Linguix. Rest easy, knowing your team's writing is flawless.",
    category: "Business",
    logo: "https://i.ibb.co/gZ6vM8R/Screenshot-2023-04-02-200218.png"
  },
  {
    link: "https://waifulabs.com/",
    name: "WaifuLabs",
    description: "WaifuLabs brings your anime character to life with its cutting-edge AI technology. Whether you want a cute, cool or unique",
    category: "Design",
    logo: "https://i.ibb.co/tpX0Gk1/Screenshot-2023-04-02-195808.png"
  },
  {
    link: "https://www.colossyan.com/?via=unlimitedgpt",
    name: "Colossyan",
    description: "Make stunning videos effortlessly with Colossyan's AI actors, and say goodbye to the hassle of studio production. Colossyan Creator handles",
    category: "Video Generator",
    logo: "https://i.ibb.co/sqRMfy5/Screenshot-2023-04-02-195102.png",
    aff:true
  },
  {
    link: "https://kasisto.com/",
    name: "Kasisto",
    description: "Kasisto helps banks improve their digital services with smart assistants. These assistants can be customized to fit the needs of",
    category: "Chatbot",
    logo: "https://i.ibb.co/HDHK8HJ/Screenshot-2023-04-02-194552.png"
  },
  {
    link: "https://metabob.com/",
    name: "Metabob",
    description: "Revamp your coding experience with Metabob, the cutting-edge Generative AI tool for seamless code refactoring and debugging. From detecting to",
    category: "Coding",
    logo: "https://i.ibb.co/T0TQk8c/Screenshot-2023-04-02-194237.png"
  },
  {
    link: "https://www.observe.ai/",
    name: "Observe.ai",
    description: "Transform your contact center with Observe.ai and see amazing results. Get valuable insights from every customer interaction, supercharge your",
    category: "Customer Service",
    logo: "https://i.ibb.co/cyP9Psy/Screenshot-2023-04-02-193827.png"
  },
  {
    link: "https://www.eliseai.com/",
    name: "EliseAI",
    description: "Experience the power of tailored AI with EliseAI. Streamline your operations and achieve better outcomes with our cutting-edge technology. Let",
    category: "Chatbot",
    logo: "https://i.ibb.co/t3mWYP8/Screenshot-2023-04-02-193415.png"
  },
  {
    link: "https://copymatic.ai/?via=unlimitedgpt",
    name: "Copymatic",
    description: "Speed up your writing with Copymatic. Use AI to create content, copy, and images quickly. Increase traffic and save time.",
    category: "Writing",
    logo: "https://i.ibb.co/qsB228c/Screenshot-2023-04-02-193122.png",
    aff:true
  },
  {
    link: "https://www.marsx.dev/",
    name: "MarsX",
    description: "MarsX combines Code, NoCode, and AI to transform software development. Experience an innovative approach to creativity and efficiency.",
    category: "Coding",
    logo: "https://i.ibb.co/NxY35rD/Screenshot-2023-04-02-192142.png"
  },
  {
    link: "https://flair.ai/",
    name: "Flair",
    description: "Unleash your creativity with Flair, the ultimate AI design tool for all your branded content needs! With Flair, designing has",
    category: "Design",
    logo: "https://i.ibb.co/VHRy2B2/Screenshot-2023-04-02-191844.png"
  },
  {
    link: "https://yuma.ai/",
    name: "Yuma.ai",
    description: "Revolutionize your customer support with ChatGPT! Yuma Ticket Assistant, the ultimate AI solution, seamlessly integrates with your Help Desk software",
    category: "Automation",
    logo: "https://i.ibb.co/L6YcDqx/Screenshot-2023-04-02-191555.png"
  },
  {
    link: "https://tiledesk.com/?via=unlimitedgpt",
    name: "Tiledesk",
    description: "Tiledesk offers a comprehensive customer engagement solution, covering everything from generating leads to post-sales support across multiple channels like WhatsApp",
    category: "Chatbot",
    logo: "https://i.ibb.co/6B2g5F8/Screenshot-2023-04-02-191057.png"
  },
  {
    link: "https://secondnature.ai/",
    name: "SecondNature",
    description: "Experience the power of Second Nature's Sales Training Software - the ultimate solution to simplify complex sales training. With cutting-edge",
    category: "Video Generator",
    logo: "https://i.ibb.co/3kZYxxP/Screenshot-2023-04-02-190653.png"
  },
  {
    link: "https://codeium.com/",
    name: "Codeium",
    description: "Try Codeium to enhance your coding skills! By leveraging AI, you can search your repo quickly, autocomplete code faster, and",
    category: "Coding",
    logo: "https://i.ibb.co/x606GCg/Screenshot-2023-04-02-190334.png"
  },
  {
    link: "https://www.safurai.com/",
    name: "Safurai",
    description: "Code like a pro with Safurai, the AI-powered coding assistant that makes coding 10x faster, safer, and better. Say goodbye",
    category: "Coding",
    logo: "https://i.ibb.co/7tYTnfT/Screenshot-2023-04-02-185756.png"
  },
  {
    link: "https://www.gitfluence.com/",
    name: "Gitfluence",
    description: "Discover the Perfect Git Command in No Time! With Gitfluence's AI-powered tool, you can easily locate the ideal command. Begin",
    category: "Coding",
    logo: "https://i.ibb.co/g3FKfL4/Screenshot-2023-04-02-185307.png"
  },
  {
    link: "https://shortlyai.com?fp_ref=unlimitedgpt",
    name: "ShortlyAI",
    description: "Say goodbye to writer's block and hello to superhuman writing abilities with ShortyAI's AI writing assistant. With just a simple",
    category: "Writing",
    logo: "https://i.ibb.co/zXkRMG6/Screenshot-2023-04-02-184715.png",
    aff:true
  },
  {
    link: "https://kafkai.com/en/?via=unlimitedgpt",
    name: "Kafkai",
    description: "Discover Kafkai, the exceptional AI Content Generator that produces readable and SEO-friendly articles at an unbeatable cost. With Kafkai, you",
    category: "Marketing",
    logo: "https://i.ibb.co/2qFPLQn/Screenshot-2023-04-02-184404.png",
    aff:true
  },
  {
    link: "https://rytr.me/?via=unlimitedgpt",
    name: "Rytr",
    description: "Transform the way you write with Rytr - the ultimate AI writing assistant! Craft top-notch content in mere seconds, while",
    category: "Writing",
    logo: "https://i.ibb.co/NZ7qTx1/Screenshot-2023-04-02-184108.png",
    aff:true
  },
  {
    link: "https://anyword.com/",
    name: "Anyword",
    description: "Revolutionize your marketing with Anyword's AI Copywriting, designed for post-generative marketing. Anyword's advanced predictive analytics empower you to know what",
    category: "Marketing",
    logo: "https://i.ibb.co/3RF7PsP/Screenshot-2023-04-02-183320.png"
  },
  {
    link: "https://www.synthesia.io/?via=unlimitedgpt-co",
    name: "Synthesia",
    description: "Synthesia is an AI video avatar platform that creates professional videos from a text in different languages. The company replaces",
    category: "Video Generator",
    logo: "https://i.ibb.co/Dz4sZ5h/Screenshot-2023-04-02-at-1-13-43-AM.png",
    aff:true
  },
  {
    link: "https://pictory.ai?ref=unlimited11",
    name: "Pictory",
    description: "In today's digital age, video content is king. However, creating engaging and shareable content from long-form videos can be a",
    category: "Video Generator",
    logo: "https://i.ibb.co/GHJw4vv/Screenshot-2023-04-02-at-12-57-24-AM.png",
    aff:true
  },
  {
    link: "https://debuild.app/",
    name: "Debuild",
    description: "Build your web app quickly and easily with Debuild. This powerful low-code tool utilizes AI to simplify the process and",
    category: "Coding",
    logo: "https://i.ibb.co/82xcYQs/Screenshot-2023-04-01-231912.png"
  },
  {
    link: "https://outplayhq.com/",
    name: "Outplay",
    description: "Boost your sales without overspending. Outplay's sales platform has all the tools you need to improve your team's efficiency, including",
    category: "Sales",
    logo: "https://i.ibb.co/1X2Td37/Screenshot-2023-04-01-231702.png"
  },
  {
    link: "https://replika.com/",
    name: "Replika",
    description: "Meet Replika, your caring AI companion that's here to lend an ear and chat with you whenever you need. With",
    category: "Chatbot",
    logo: "https://i.ibb.co/KxWcGtg/Screenshot-2023-04-01-231321.png"
  },
  {
    link: "https://certainly.io/",
    name: "Certainly.",
    description: "With Certainly, you can clone your top salesperson digitally and offer personalized assistance to your customers. By analyzing their needs,",
    category: "Sales",
    logo: "https://i.ibb.co/jbSpJg3/Screenshot-2023-04-01-230754.png"
  },
  {
    link: "https://playgroundai.com/",
    name: "Playground",
    description: "Use Playground to create any image you can imagine. Let your creativity flow and design without any constraints. The possibilities",
    category: "Image Generator",
    logo: "https://i.ibb.co/Bf2SHM9/Screenshot-2023-04-01-230226.png"
  },
  {
    link: "https://app.copysmith.ai/signup/#a_aid=unlimitedgpt",
    name: "Copysmith",
    description: "Writing product descriptions is a breeze with Copysmith's AI content generator. It's quick, effortless, and even enjoyable. Let the AI",
    category: "Writing",
    logo: "https://i.ibb.co/QJcHVzj/Screenshot-2023-04-01-225404.png",
    aff:true
  },
  {
    link: "https://www.clickable.so/",
    name: "Clickable",
    description: "Create stunning and effective ads effortlessly with Clickable, an AI-powered tool. Whether it's for social media, email or other channels,",
    category: "Design",
    logo: "https://i.ibb.co/LQWRqPn/Screenshot-2023-04-01-224444.png"
  },
  {
    link: "https://www.frase.io/?via=unlimitedgpt",
    name: "Frase",
    description: "Unlock the secret to producing high-quality SEO content in a fraction of the time with Frase AI. Frase's powerful tool",
    category: "Writing",
    logo: "https://i.ibb.co/6bY5V9S/Screenshot-2023-04-01-223917.png",
    aff:true
  },
  {
    link: "https://cresta.com/",
    name: "Cresta",
    description: "Rev up your Sales Performance with the Power of AI! Cresta for Sales is your team's ultimate ally to craft",
    category: "Sales",
    logo: "https://i.ibb.co/R3kZGS0/Screenshot-2023-04-01-223459.png"
  },
  {
    link: "https://www.quickchat.ai/",
    name: "Quickchat",
    description: "Discover the latest breakthrough in AI technology that can create AI Assistants that talk like a Human! With Quickchat, the",
    category: "Chatbot",
    logo: "https://i.ibb.co/NSqD91r/Screenshot-2023-04-01-222924.png"
  },
  {
    link: "https://andisearch.com/",
    name: "Andi",
    description: "Meet Andi, an AI search chatbot that answers accurately and respects your privacy. Unlike traditional search engines, Andi uses advanced",
    category: "Chatbot",
    logo: "https://i.ibb.co/ZxmMf7n/Screenshot-2023-04-01-222019.png"
  },
  {
    link: "https://www.twain.ai/",
    name: "Twain",
    description: "Craft compelling emails that elicit responses with Twain, the ultimate AI communication assistant for outreach.",
    category: "Sales",
    logo: "https://i.ibb.co/x2jV275/Screenshot-2023-04-01-221634.png"
  },
  {
    link: "https://www.regie.ai/",
    name: "Regie.ai",
    description: "Regie.ai offers a new way to personalize your sales outreach. It allows you to quickly create sales messages that",
    category: "Sales",
    logo: "https://i.ibb.co/xJBmf5H/Screenshot-2023-04-01-221156.png"
  },
  {
    link: "https://hourone.ai/",
    name: "Hour One",
    description: "With Hour One's innovative platform, you can transform any written content into stunning videos featuring lifelike presenters in minutes. Whether",
    category: "Video Generator",
    logo: "https://i.ibb.co/NSQ3zn3/Screenshot-2023-04-01-215816.png"
  },
  {
    link: "https://www.canva.com/",
    name: "Canva",
    description: "Canva is an online design and publishing platform that offers graphic design software solutions to its users. It empowers the",
    category: "Design",
    logo: "https://i.ibb.co/wyYzSnk/download.jpg"
  },
  {
    link: "https://verloop.io/",
    name: "Verloop.io",
    description: "Transform your customer support with Verloop.io's Conversational AI platform. Verloop.io's advanced NLP and ML technology delivers seamless, personalized",
    category: "Customer Service",
    logo: "https://i.ibb.co/5Mc4xsb/Screenshot-2023-03-31-185639.png"
  },
  {
    link: "https://www.codiga.io/",
    name: "Codiga",
    description: "Codiga is the ultimate destination for pristine code that guarantees utmost safety and security. Its static code analysis tool is",
    category: "Coding",
    logo: "https://i.ibb.co/KqnRsts/Screenshot-2023-03-31-185209.png"
  },
  {
    link: "https://www.d-id.com/",
    name: "D-ID",
    description: "Bring your digital world to life with D-ID's Text-to-Video technology! With just a tap, you can conjure up a talking",
    category: "Video Generator",
    logo: "https://i.ibb.co/WgWgDJH/Screenshot-2023-03-31-184029.png"
  },
  {
    link: "https://www.yepic.ai/",
    name: "Yepic AI",
    description: "Experience the power of Yepic AI, the ultimate video toolkit at your fingertips. Unleash your creativity and customize your videos",
    category: "Video Generator",
    logo: "https://i.ibb.co/wNF8jZ4/Screenshot-2023-03-31-183714.png"
  },
  {
    link: "https://bloop.ai/",
    name: "Bloop.",
    description: "Quickly locate and comprehend code with the power of GPT-4 and semantic code search using Bloop.",
    category: "Coding",
    logo: "https://i.ibb.co/PhKgHn1/Screenshot-2023-03-31-172749.png"
  },
  {
    link: "https://supernormal.com/",
    name: "Supernormal",
    description: "Transform your meeting notes from average to amazing effortlessly with Supernormal. Elevate your team's output to the next level with",
    category: "Business",
    logo: "https://i.ibb.co/7Qgd6K1/Screenshot-2023-03-31-171825.png"
  },
  {
    link: "https://www.didimo.co/",
    name: "DIDIMO",
    description: "Experience the power of AI with DIDIMO's stunning 3D characters, delivering top-notch speed, scale, and quality.",
    category: "Image Generator",
    logo: "https://i.ibb.co/C6nrnKS/Screenshot-2023-03-31-165526.png"
  },
  {
    link: "https://www.mavenoid.com/",
    name: "Mavenoid",
    description: "Mavenoid is a scalable product support platform that offers both self-service and live support for hardware companies. It ensures 24/",
    category: "Communication",
    logo: "https://i.ibb.co/StR09wN/Screenshot-2023-03-31-164809.png"
  },
  {
    link: "https://www.meetjamie.ai/",
    name: "Jamie",
    description: "With Jamie, you can effortlessly summarize any meeting across any tool and in any language. This AI assistant creates concise",
    category: "Speech AI",
    logo: "https://i.ibb.co/Kz8db1m/Screenshot-2023-03-31-163125.png"
  },
  {
    link: "https://www.mentum.ai/",
    name: "Mentum.ai",
    description: "Transform your writing experience with Mentum.ai - an AI writing assistant that makes content creation for your blog, social",
    category: "Writing",
    logo: "https://i.ibb.co/hBvtQcX/Screenshot-2023-03-31-161008.png"
  },
  {
    link: "https://www.tryleap.ai/",
    name: "Leap",
    description: "Elevate your app's capabilities with Leap's AI features. In mere minutes, access top-of-the-line APIs and SDKs for generating, editing, and",
    category: "Coding",
    logo: "https://i.ibb.co/C7kRm0y/Screenshot-2023-03-31-160530.png"
  },
  {
    link: "https://numerous.ai/",
    name: "Numerous.ai",
    description: "Eliminate tedious spreadsheet tasks. Quickly extract and categorize text, generate formulas, and leverage the power of ChatGPT without leaving your",
    category: "Productivity",
    logo: "https://i.ibb.co/JkLpfsP/Screenshot-2023-03-31-155515.png"
  },
  {
    link: "https://www.autoenhance.ai/",
    name: "Autoenhance.ai",
    description: "Transform your property images in minutes with the AI photo editor. Say goodbye to the hassle of spending hours on",
    category: "Photo Editor",
    logo: "https://i.ibb.co/y5dWbFn/Screenshot-2023-03-31-020038.png"
  },
  {
    link: "https://levity.ai/",
    name: "Levity",
    description: "Transform your routine with AI automation. Levity's robust AI capabilities simplify your daily tasks. Bid farewell to manual text, document,",
    category: "Productivity",
    logo: "https://i.ibb.co/prPzmtb/Screenshot-2023-03-31-001830.png"
  },
  {
    link: "https://www.builder.ai/",
    name: "Builder.ai",
    description: "Transform your app-building dream into a reality with Builder.ai. No technical expertise required - just bring your vision and",
    category: "Business",
    logo: "https://i.ibb.co/xXwTPHQ/Screenshot-2023-03-31-000701.png"
  },
  {
    link: "https://www.diffblue.com/",
    name: "Diffblue",
    description: "Level up your \"Shift Left\" game using Diffblue AI for Code! Discover bugs sooner in your pipeline by effortlessly generating",
    category: "Coding",
    logo: "https://i.ibb.co/XYtVqyf/Screenshot-2023-03-31-000014.png"
  },
  {
    link: "https://www.genmo.ai/",
    name: "Genmo",
    description: "Genmo Chat fosters collaboration between humans and generative models, resulting in exceptional creative outcomes. This innovative tool enables effortless creation",
    category: "Chatbot",
    logo: "https://i.ibb.co/xLRfFkK/Screenshot-2023-03-30-235001.png"
  },
  {
    link: "https://www.neptyne.com/",
    name: "Neptyne",
    description: "Revolutionize your spreadsheet game with Neptyne - The Programmable Spreadsheet. Unleash the power of Python and AI to take your",
    category: "Coding",
    logo: "https://i.ibb.co/jJv2rZH/Screenshot-2023-03-30-230447.png"
  },
  {
    link: "https://www.adobe.com/sensei/generative-ai/firefly.html",
    name: "Adobe Firefly",
    description: "Introducing Adobe Firefly: the AI-powered creative companion that brings imagination to life. With Firefly, the possibilities for artistic expression are",
    category: "Design",
    logo: "https://i.ibb.co/3vt90qr/Screenshot-2023-03-30-222656.png",
    Hot:true,
  },
  {
    link: "https://lexica.art/",
    name: "Lexica",
    description: "Introducing Lexica, the innovative image search engine of tomorrow! Boasting millions of stunning images generated by stable diffusion AI, this",
    category: "Design",
    logo: "https://i.ibb.co/DrC4kWF/Screenshot-2023-03-30-191210.png"
  },
  {
    link: "https://www.wordtune.com/",
    name: "Wordtune",
    description: "Revolutionize your writing with Wordtune's advanced AI tools and language models. Say exactly what you mean with clear, authentic writing",
    category: "Writing",
    logo: "https://i.ibb.co/4VcVdwQ/Screenshot-2023-03-30-185835.png"
  },
  {
    link: "https://www.rephrase.ai/",
    name: "Rephrase.ai",
    description: "With Rephrase, you can turn your mundane text into captivating videos in mere moments. This AI platform enables you to",
    category: "Video Generator",
    logo: "https://i.ibb.co/PWqMSpQ/Screenshot-2023-03-30-183808.png"
  },
  {
    link: "https://www.sumly.ai/",
    name: "Sumly.ai",
    description: "Sumly AI can send you summaries of your favorite podcasts via email so you don't miss anything important. It's an",
    category: "Personal",
    logo: "https://i.ibb.co/8gRkHzD/Screenshot-2023-03-30-182534.png"
  },
  {
    link: "https://www.glean.com/",
    name: "Glean",
    description: "Empower your productivity and ignite your passion with the incredible AI-powered workplace search tool - Glean! Get immediate access to",
    category: "Productivity",
    logo: "https://i.ibb.co/zsdKD4K/Screenshot-2023-03-30-181335.png"
  },
  {
    link: "https://www.lang.ai/",
    name: "Lang.ai",
    description: "Unleash the true potential of CX data with the help of Lang.ai, Sail smoothly over the choppy waters of",
    category: "Automation",
    logo: "https://i.ibb.co/VMW6HrC/Screenshot-2023-03-30-180450.png"
  },
  {
    link: "https://writesonic.com/chat?ref=unlimitedgpt",
    name: "Writesonic",
    description: "Get SEO-optimized, plagiarism-free content for your blogs, ads, emails, and website at lightning speed with Writesonic. Get ready to take",
    category: "Writing",
    logo: "https://i.ibb.co/Bqjrc0T/Screenshot-2023-03-30-180021.png",
    Hot:true,
  },
  {
    link: "https://www.tavus.io/",
    name: "Tavus",
    description: "Tavus automates video personalization with AI-generated videos that customize unique voice variables for each customer, ensuring loyalty and repeat conversions.",
    category: "Video Generator",
    logo: "https://i.ibb.co/SwYwwT2/Screenshot-2023-03-29-221400.png"
  },
  {
    link: "https://csm.ai/",
    name: "CSM",
    description: "Transform your game design with ease using CSM, an innovative AI technology that converts images and text into immersive 3D",
    category: "Design",
    logo: "https://i.ibb.co/0Xf7Pnk/Screenshot-2023-03-29-220213.png"
  },
  {
    link: "https://www.dialpad.com/",
    name: "Dialpad",
    description: "Transform the way you communicate with Dialpad - a stunning AI-powered app that seamlessly integrates calling, messaging, meeting, and customer",
    category: "Business",
    logo: "https://i.ibb.co/8rkgCjn/Screenshot-2023-03-29-215545.png"
  },
  {
    link: "https://www.usemeru.com/",
    name: "Meru",
    description: "Meru is a lightning bolt of AI capabilities! Unleash the power to create, launch, and expand your applications like never",
    category: "Coding",
    logo: "https://i.ibb.co/TwLP4HC/Screenshot-2023-03-29-214822.png"
  },
  {
    link: "https://inworld.ai/",
    name: "Inworld",
    description: "Create realistic AI characters for games and real-time media with Inworld. Use text-to-character prompts to build dynamic personalities and integrate",
    category: "Gaming",
    logo: "https://i.ibb.co/VVM7zX9/Screenshot-2023-03-29-214224.png"
  },
  {
    link: "https://www.cogram.com/",
    name: "Cogram",
    description: "Transform your team's output with a smart workmate on board! Introducing Cogram - the ultimate AI-powered assistant that not only",
    category: "Business",
    logo: "https://i.ibb.co/j3HMDqB/Screenshot-2023-03-29-213332-1.png"
  },
  {
    link: "https://lumalabs.ai/",
    name: "Luma AI",
    description: "Step into a world of mesmerizing 3D with Luma AI! Luma AI offers unrivalled photorealism, stunning reflections, and intricate details",
    category: "Video Generator",
    logo: "https://i.ibb.co/6JpZBfL/Screenshot-2023-03-29-212526.png"
  },
  {
    link: "https://tome.app/",
    name: "Tome",
    description: "Tome liberates your inner storyteller, allowing you to effortlessly convey ideas naturally and engagingly. Say goodbye to the tedious task",
    category: "Presentation",
    logo: "https://i.ibb.co/Dzjf8kx/Screenshot-2023-03-29-211456.png"
  },
  {
    link: "https://www.assemblyai.com/",
    name: "AssemblyAI",
    description: "Use AssemblyAI's powerful speech AI models via their simple API for reliable and scalable speech recognition, speaker detection, and summarization.",
    category: "Speech AI",
    logo: "https://i.ibb.co/GvDFGX7/Screenshot-2023-03-29-210953.png"
  },
  {
    link: "https://vizologi.com/",
    name: "Vizologi",
    description: "Transform your business strategy with Vizologi's cutting-edge AI technology. Discover game-changing insights on companies, markets, and business intelligence to take",
    category: "Business",
    logo: "https://i.ibb.co/8xkhN1c/Screenshot-2023-03-29-194531.png"
  },
  {
    link: "https://productbot.ai/",
    name: "Product Bot AI",
    description: "Productbot - the revolutionary software that solves the cold start problem of software system design. With its cutting-edge automated documentation",
    category: "Productivity",
    logo: "https://i.ibb.co/tKmVBQg/Screenshot-2023-03-29-193405.png"
  },
  {
    link: "https://www.warp.dev/warp-ai",
    name: "Warp AI",
    description: "Step into the future with WARP AI, where you hold the power to command the most advanced Artificial Intelligence right",
    category: "Coding",
    logo: "https://i.ibb.co/f1V0drH/Screenshot-2023-03-29-192609.png"
  },
  {
    link: "https://www.buildai.space/",
    name: "Build AI",
    description: "Revolutionize your business with AI integration in just minutes with BuildAI. Create customized web apps powered by AI without any",
    category: "Business",
    logo: "https://i.ibb.co/DwZF0K5/Screenshot-2023-03-29-191654.png"
  },
  {
    link: "https://facet.ai/",
    name: "Facet.ai",
    description: "Witness a revolutionary shift in image creation with Facet - the world's premier AI-enhanced image editor. Experience the future of",
    category: "Design",
    logo: "https://i.ibb.co/3zSGKdP/Screenshot-2023-03-29-190327.png"
  },
  {
    link: "https://codewp.ai/",
    name: "CodeWP",
    description: "CodeWP is an artificial intelligence tool that generates code for WordPress websites. It is trained specifically for WordPress and includes",
    category: "Coding",
    logo: "https://i.ibb.co/4Pd7xWx/Screenshot-2023-03-28-220651.png"
  },
  {
    link: "https://elai.io/",
    name: "Elai",
    description: "Transform plain text into stunning AI videos in a matter of minutes with Elai, all without the need for any",
    category: "Presentation",
    logo: "https://i.ibb.co/TbyBx0S/Screenshot-2023-03-28-220314.png"
  },
  {
    link: "https://research.runwayml.com/gen2",
    name: "Gen-2 by Runway",
    description: "Gen-2 is an advanced multi-modal system that utilizes AI to generate videos using text, images, and video clips.",
    category: "Video Generator",
    logo: "https://i.ibb.co/t8ZLQwt/Screenshot-2023-03-28-215711.png"
  },
  {
    link: "https://unbounce.com/",
    name: "Unbounce",
    description: "Boost your business with Unbounce, the AI-assisted landing page creator designed to help you convert more visitors into loyal customers.",
    category: "Business",
    logo: "https://i.ibb.co/ZhnBKKH/Screenshot-2023-03-27-183457.png"
  },
  {
    link: "https://marketingblocks.ai/",
    name: "MarketingBlocks",
    description: "Transform your marketing strategy with the power of AI. Ethan offers a wide range of marketing assets that are customized",
    category: "Marketing",
    logo: "https://i.ibb.co/BcwNzR0/Screenshot-2023-03-27-182843.png"
  },
  {
    link: "https://ailawyer.pro//?ref=unlimitedgpt",
    name: "AI Lawyer",
    description: "AI Lawyer is an AI-powered legal assistant who is available to offer you expert legal advice whenever and wherever you",
    category: "Legal",
    logo: "https://i.ibb.co/K2m2Q3v/Screenshot-2023-03-27-182026.webp",
    aff:true
  },
  {
    link: "https://autify.com/",
    name: "Autify",
    description: "Rev up your software testing with Autify's AI-driven automation! Say goodbye to tedious manual testing and hello to speedy releases.",
    category: "Automation",
    logo: "https://i.ibb.co/kghnCPk/Screenshot-2023-03-27-181627.png"
  },
  {
    link: "https://bearly.ai/",
    name: "Bearly.ai",
    description: "Experience lightning-fast productivity with Bearly, the cutting-edge AI tool that streamlines your workflow. From reading to writing to content creation,",
    category: "Marketing",
    logo: "https://i.ibb.co/5668hN6/Screenshot-2023-03-26-130630.png"
  },
  {
    link: "https://www.play.ht/?via=unlimitedgpt",
    name: "Play.ht",
    description: "Play.ht's online voice generator employs state-of-the-art AI technology to produce incredibly realistic Text to Speech audio. Select from a",
    category: "Speech AI",
    logo: "https://i.ibb.co/y6NBm90/Screenshot-2023-03-26-125938.png",
    Hot:true,
  },
  {
    link: "https://bertha.ai/?ref=14399",
    name: "Bertha AI",
    description: "Use Bertha, a tool for WordPress and Chrome, to create marketing copy quickly and easily using the power of ChatGpt",
    category: "Automation",
    logo: "https://i.ibb.co/TcX7qsj/Screenshot-2023-03-25-230322.png",
    aff:true
  },
  {
    link: "https://www.omneky.com/",
    name: "Omneky",
    description: "Use AI technology to create personalized ads that are tailored to each customer's preferences. Omneky's advanced deep learning algorithms enable",
    category: "Business",
    logo: "https://i.ibb.co/ZztCL0H/Screenshot-2023-03-25-225921.png"
  },
  {
    link: "https://www.hyperwriteai.com/",
    name: "HyperWriter",
    description: "Breeze through your writing tasks with confidence using HyperWrite. From initial concept to polished final draft, experience the dynamic AI-powered",
    category: "Writing",
    logo: "https://i.ibb.co/zN7gRbF/Screenshot-2023-03-25-225514.png"
  },
  {
    link: "https://www.alpacaml.com/",
    name: "Alpaca",
    description: "Revolutionize your creative process with Alpaca - the ultimate tool that seamlessly integrates the power of Artificial Intelligence into the",
    category: "Design",
    logo: "https://i.ibb.co/WKjCyTy/Screenshot-2023-03-25-224923.png"
  },
  {
    link: "https://interiorai.com/?via=unlimitedgpt",
    name: "Interior AI",
    description: "Get inspired with Interior Design Ideas and take your space to the next level with a Virtual Staging App powered",
    category: "Design",
    logo: "https://i.ibb.co/JvZBzTJ/Screenshot-2023-03-25-223717.png",
    Hot:true,
  },
  {
    link: "https://cutt.ly/n62mb7b",
    name: "Dubverse",
    description: "Dubverse is revolutionizing the world of video dubbing with its cutting-edge online platform. Powered by advanced artificial intelligence technology, Dubverse",
    category: "Speech AI",
    logo: "https://i.ibb.co/J2NgvKj/Screenshot-2023-03-24-201449.png"
  },
  {
    link: "https://www.second.dev/",
    name: "Second",
    description: "Why bother with more web developers when you can have AI developer bots do the job? Second has got you",
    category: "Coding",
    logo: "https://i.ibb.co/7WWzwzR/Screenshot-2023-03-24-200746.png"
  },
  {
    link: "https://www.quinv.io/",
    name: "Quinvio AI",
    description: "With the help of Quinvio AI, you can speedily craft amazing videos. Simply jot down your ideas, explore the AI-generated",
    category: "Presentation",
    logo: "https://i.ibb.co/6stgWPK/Screenshot-2023-03-24-200214.png"
  },
  {
    link: "https://www.decktopus.com/?via=unlimitedgpt",
    name: "Decktopus AI",
    description: "Decktopus is the ultimate online presentation tool that harnesses the power of AI to help you craft captivating presentations effortlessly,",
    category: "Presentation",
    logo: "https://i.ibb.co/3BPXXC8/Screenshot-2023-03-24-195535.png",
    aff:true
  },
  {
    link: "https://withpoly.com/browse/textures",
    name: "Poly",
    description: "Unleash your creativity with Poly! This amazing tool allows you to craft textures and generate 3D materials effortlessly. Whether you",
    category: "Design",
    logo: "https://i.ibb.co/FgpX5tY/Screenshot-2023-03-23-183518.png"
  },
  {
    link: "https://get.mem.ai/",
    name: "Mem",
    description: "Experience the next level of workspace personalization with Mem - the world's pioneering AI-powered platform that adapts to your unique",
    category: "Productivity",
    logo: "https://i.ibb.co/NTbt0C1/Screenshot-2023-03-23-182839.png"
  },
  {
    link: "https://charisma.ai/",
    name: "Charisma.ai",
    description: "Charisma's cutting-edge technology breathes life into digital humans, providing an unparalleled level of immersion and engagement. With its innovative AI,",
    category: "Gaming",
    logo: "https://i.ibb.co/10SF31M/Screenshot-2023-03-23-182018.png"
  },
  {
    link: "https://replit.com/",
    name: "Replit",
    description: "Collaborate with the power of AI to build software effortlessly on any device with Replit. This browser-based IDE supports 50+",
    category: "Coding",
    logo: "https://i.ibb.co/QYbB7X4/Screenshot-2023-03-23-180637.png"
  },
  {
    link: "https://poly.ai/",
    name: "PolyAI",
    description: "PolyAI uses AI and machine learning to create voice assistants that converse naturally with customers, solving problems and delivering top-notch",
    category: "Communication",
    logo: "https://i.ibb.co/M19QxVB/Screenshot-2023-03-22-225102.png"
  },
  {
    link: "https://www.sendsteps.com/",
    name: "Sendsteps",
    description: "Revolutionize your presentation game with the ultimate tool: AI. Let Sendsteps.ai take care of the tedious writing, designing and",
    category: "Presentation",
    logo: "https://i.ibb.co/nfwGqd3/Screenshot-2023-03-22-223936.png"
  },
  {
    link: "https://reclaim.ai/",
    name: "Reclaim.ai",
    description: "Reclaim is a smart calendar tool that uses AI to create a perfect schedule for your team, saves up to",
    category: "Productivity",
    logo: "https://i.ibb.co/1rzS6XB/Screenshot-2023-03-22-222530.png"
  },
  {
    link: "https://mutable.ai/",
    name: "Mutable AI",
    description: "MutableAI is a futuristic AI development tool that goes beyond just offering Copilot-like autocomplete, code refactorer, and documentation writing. With",
    category: "Coding",
    logo: "https://i.ibb.co/qDc56Z0/Screenshot-2023-03-22-215643.png"
  },
  {
    link: "https://whatthediff.ai/",
    name: "What The Diff",
    description: "With, What The Diff imagine having a super-smart GitHub app at your fingertips, powered by the latest AI technology, which",
    category: "Coding",
    logo: "https://i.ibb.co/9v4GR95/Screenshot-2023-03-21-233250.png"
  },
  {
    link: "https://www.programming-helper.com/",
    name: "Programming helper",
    description: "With the help of AI, you can now effortlessly generate code simply by describing what you need to Programming helper.",
    category: "Coding",
    logo: "https://i.ibb.co/TqmSC12/Screenshot-2023-03-21-232822.png"
  },
  {
    link: "https://www.audyo.ai/",
    name: "Audyo",
    description: "Audyo revolutionizes audio production by allowing users to effortlessly create and edit lifelike AI voices with a simple interface and",
    category: "Speech AI",
    logo: "https://i.ibb.co/7S1Pnnf/Screenshot-2023-03-21-231304.png"
  },
  {
    link: "https://www.copy.ai/?via=unlimitedgpt",
    name: "Copy.ai",
    description: "Experience a powerful boost in sales, captivate your customers, and craft captivating content effortlessly with Copy.ai – the ultimate copywriting",
    category: "Marketing",
    logo: "https://i.ibb.co/Wz5Hq63/Screenshot-2023-03-21-230550.png",
    aff:true
  },
  {
    link: "https://dimensions.ink/",
    name: "Dimensions",
    description: "Dimensions lets you transform your creative ideas into breathtaking imagery effortlessly! With Dimensions, you'll have access to a user-friendly range",
    category: "Design",
    logo: "https://i.ibb.co/60FmTtB/Screenshot-2023-03-21-225725.png"
  },
  {
    link: "https://www.personal.ai/",
    name: "Personal.ai",
    description: "Personal.ai set loose your imagination and tap into your creative prowess! This cutting-edge productivity tool, fueled by the power",
    category: "Personal",
    logo: "https://i.ibb.co/RjBKkzk/For-n-Ishant-blog.png"
  },
  {
    link: "https://scribblediffusion.com/",
    name: "Scribble Diffusion",
    description: "Scribble Diffusion lets you unleash your artistic side with  - an open-source web application that utilizes ControlNet technology and Replicate",
    category: "Design",
    logo: "https://i.ibb.co/5s9XTLj/Screenshot-2023-03-21-121119.png"
  },
  {
    link: "https://murf.ai/?lmref=ROinow",
    name: "Murf.ai",
    description: "Murf's revolutionary AI technology brings real human voices to life, providing you with top-notch studio-quality voiceovers in mere minutes. From",
    category: "Speech AI",
    logo: "https://i.ibb.co/mywvfCq/Screenshot-2023-03-21-115943.png",
    Hot:true,
  },
  {
    link: "https://stockimg.ai/",
    name: "Stockimg AI",
    description: "Stockimg AI empowers your team's creativity with AI-generated images! With Stockimg AI, you can effortlessly create unique and eye-catching designs",
    category: "Design",
    logo: "https://i.ibb.co/vmZXVvY/Screenshot-2023-03-21-115200.png"
  },
  {
    link: "https://explain.dev/",
    name: "ExplainDev",
    description: "ExplainDev helps you to elevate your coding game! Boost your confidence and independence when dealing with other people's code. Access",
    category: "Coding",
    logo: "https://i.ibb.co/T1fGvwB/Screenshot-2023-03-21-114445.png"
  },
  {
    link: "https://heyday.xyz/",
    name: "Heyday",
    description: "Heyday improves your ability to retain knowledge effortlessly. Heyday is a memory assistant that utilises artificial intelligence (AI) to bring",
    category: "Personal",
    logo: "https://i.ibb.co/cJDkNfS/Screenshot-2023-03-20-013122.png"
  },
  {
    link: "https://ludo.ai/",
    name: "Ludo AI",
    description: "Ludo AI utilises the capabilities of artificial intelligence to produce popular games. Ludo AI can assist you with extensive game",
    category: "Gaming",
    logo: "https://i.ibb.co/t2TJ1Yr/Screenshot-2023-03-20-012214.png"
  },
  {
    link: "https://originality.ai?lmref=-eoq-Q",
    name: "Originality.ai",
    description: "Originality.ai is a plagiarism checker that uses AI to scan text and check for uniqueness. It helps educators, students,",
    category: "Business",
    logo: "https://i.ibb.co/CtJn5zh/Screenshot-2023-03-20-010556.png",
    aff:true
  },
  {
    link: "https://fireflies.ai/",
    name: "Fireflies.ai",
    description: "Fireflies.ai is an AI-powered meeting assistant designed to automate note-taking and transcribing during meetings. It integrates with various video",
    category: "Business",
    logo: "https://i.ibb.co/3WkVGwq/Screenshot-2023-03-20-003128-1.png"
  },
  {
    link: "https://voice.ai/",
    name: "Voice.ai",
    description: "Voice.ai is a tool that can be used during streaming, gaming, meetings, and calls as a real-time voice changer.",
    category: "Communication",
    logo: "https://i.ibb.co/QdWqPkP/Screenshot-2023-03-19-235722.png"
  },
  {
    link: "https://byautomata.io/?via=unlimitedgpt",
    name: "Automata",
    description: "Automata uses artificial intelligence and machine learning to re-purpose content in the best way possible. Their platform allows businesses to",
    category: "Business",
    logo: "https://i.ibb.co/hLwZPDH/Screenshot-2023-03-19-233442.png",
    aff:true
  },
  {
    link: "https://jasonai.tech/",
    name: "Jason AI",
    description: "Jason AI is an artificial intelligence platform that uses natural language processing and machine learning to provide conversational interfaces for",
    category: "Business",
    logo: "https://i.ibb.co/dLW2QLS/Screenshot-2023-03-19-225434.png"
  },
  {
    link: "https://podcast.adobe.com/enhance",
    name: "Adobe Podcast",
    description: "Adobe Podcast helps you create studio-quality audio. Remove noise from voice recordings with speech enhancement. Speech enhancement makes voice recordings",
    category: "Audio Editing",
    logo: "https://i.ibb.co/xYf22J2/Screenshot-2023-02-17-at-12-30-26-AM.png",
    Hot:true,
  },
  {
    link: "https://mintlify.com/",
    name: "Mintlify",
    description: "Mintlify is an AI documentation writer. Build the documentation you've always wanted. Beautiful out of the box, easy to maintain,",
    category: "Coding",
    logo: "https://i.ibb.co/25ZvXLm/Screenshot-2023-02-17-at-12-17-47-AM.png"
  },
  {
    link: "https://github.com/features/copilot",
    name: "GitHub Copilot",
    description: "Trained on billions of lines of code, GitHub Copilot turns natural language prompts into coding suggestions across dozens of languages.",
    category: "Coding",
    logo: "https://i.ibb.co/stBCTZn/Screenshot-2023-02-17-at-12-12-48-AM.png"
  },
  {
    link: "https://www.tabnine.com/",
    name: "Tabnine",
    description: "Tabnine uses generative AI technology to predict and suggests your next lines of code based on context & syntax. Tabnine's AI",
    category: "Coding",
    logo: "https://i.ibb.co/p1W3YLs/Screenshot-2023-02-17-at-12-08-07-AM.png"
  },
  {
    link: "https://elevenlabs.io/",
    name: "ElevenLabs",
    description: "It can clone anyone's voice in seconds. Eleven brings the most compelling, rich and lifelike voices to creators and publishers",
    category: "Speech AI",
    logo: "https://i.ibb.co/QHcFk1F/Screenshot-2023-02-16-at-10-53-28-PM.png"
  },
  {
    link: "https://www.usegalileo.ai/",
    name: "Galileo AI",
    description: "Generate UI designs from a simple text description. It empowers you to design faster than ever.",
    category: "Design",
    logo: "https://i.ibb.co/vQmgy2q/Screenshot-2023-02-16-at-10-36-21-PM.png"
  },
  {
    link: "https://www.poised.com/",
    name: "Poised",
    description: "Poised is the AI-powered communication coach that helps you speak with confidence and clarity. Private and secure, an essential tool",
    category: "Communication",
    logo: "https://i.ibb.co/fxTSMd8/Screenshot-2023-02-16-at-10-25-32-PM.png"
  },
  {
    link: "https://www.jasper.ai/",
    name: "Jasper",
    description: "Write better, everywhere with AI\nThe AI content platform.",
    category: "Marketing",
    logo: "https://i.ibb.co/kHrrg7H/Jasper-logo-squared.png"
  }
  ];
  
  const toolContainer = document.querySelector('.tool-container');

let currentCategory = 'all';

function createTool(tool) {
  const toolDiv = document.createElement('div');
  toolDiv.className = 'tool';

  if (tool.Hot) {
    toolDiv.classList.add('hot-tool');
  }
  
  const logo = document.createElement('img');
  logo.src = tool.logo;
  toolDiv.appendChild(logo);

  const name = document.createElement('h2');
  name.textContent = tool.name;
  toolDiv.appendChild(name);

    // Add the hot icon if the tool has Hot: true
    if (tool.Hot) {
      const hotIcon = document.createElement('span');
      hotIcon.className = 'hot-icon';
      name.appendChild(hotIcon);
    }
  
    toolDiv.appendChild(name);

  const description = document.createElement('p');
  description.textContent = tool.description;
  toolDiv.appendChild(description);

  const category = document.createElement('strong');
  category.textContent = `${tool.category}`;
  toolDiv.appendChild(category);

  toolDiv.addEventListener('click', () => {
    window.open(tool.link, '_blank');
  });

  return toolDiv;
}


function filterTools(category) {
  currentCategory = category;
  toolContainer.innerHTML = '';

  const filteredTools = category === 'all'
    ? tools
    : tools.filter(tool => tool.category === category);

  // Sort tools with Hot:true at the top, followed by aff:true, and then the rest
  const sortedTools = filteredTools.sort((a, b) => {
    if (a.Hot && !b.Hot) {
      return -1;
    } else if (!a.Hot && b.Hot) {
      return 1;
    } else if (a.aff && !b.aff && !a.Hot && !b.Hot) {
      return -1;
    } else if (!a.aff && b.aff && !a.Hot && !b.Hot) {
      return 1;
    } else {
      return 0;
    }
  });

  // Replace the original separatedTools logic with the new sortedTools logic
  const separatedTools = { hotTools: [], otherTools: [] };
  sortedTools.forEach(tool => {
    if (tool.Hot) {
      separatedTools.hotTools.push(tool);
    } else {
      separatedTools.otherTools.push(tool);
    }
  });

  // Combine the arrays, with hotTools at the top
  const combinedTools = [...separatedTools.hotTools, ...separatedTools.otherTools];

  if (combinedTools.length > 0) {
    const firstToolDiv = createTool(combinedTools[0]);
    firstToolDiv.setAttribute('data-index', 0);
    toolContainer.appendChild(firstToolDiv);
    observer.observe(firstToolDiv);
  }
}

// Add event listeners to the filter buttons
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');
    filterTools(category);
  });
});

// Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const toolIndex = parseInt(entry.target.getAttribute('data-index'), 10);

      const filteredTools = currentCategory === 'all'
        ? tools
        : tools.filter(tool => tool.category === currentCategory);

      if (toolIndex < filteredTools.length - 1) {
        const nextToolDiv = createTool(filteredTools[toolIndex + 1]);
        nextToolDiv.setAttribute('data-index', toolIndex + 1);
        toolContainer.appendChild(nextToolDiv);
        observer.observe(nextToolDiv);
      }
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -100px 0px' });

// Load the first tool and start observing
const firstToolDiv = createTool(tools[0]);
firstToolDiv.setAttribute('data-index', 0);
toolContainer.appendChild(firstToolDiv);
observer.observe(firstToolDiv);

// Set the default category to "all"
filterTools('all');
