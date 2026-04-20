import { courseFees, workshopFees, fmt, emi } from "./pricingConfig.js";

export const socialIconsData = [
  {
    id: 1,
    class: "fab fa-linkedin-in",
    href: "https://www.linkedin.com/company/102031252/admin/dashboard/",
  },
  {
    id: 2,
    class: "fab fa-instagram",
    href: "https://www.instagram.com/analyticshala/",
  },
];

export const menuMobileData = [
  { id: 0, class: "one", icon: "fas fa-home", name: "Home", href: "/" },
  {
    id: 1,
    class: "two",
    icon: "fas fa-user",
    name: "About Us",
    href: "/aboutUs",
  },
  {
    id: 2,
    class: "three",
    icon: "fas fa-file-code",
    name: "Courses",
    href: "/courses",
  },
  {
    id: 3,
    class: "four",
    icon: "fas fa-briefcase",
    name: "FAQ",
    href: "/#faq",
  },
  {
    id: 4,
    class: "five",
    icon: "fas fa-project-diagram",
    name: "Contact Us",
    href: "/#contact",
  },
];

export const heroMarqData = [
  { id: 1, name: "Python", img: "/assets/marq/python.svg", color: "#3776AB" },
  { id: 2, name: "SQL", img: "/assets/marq/postgresql.svg", color: "#4169E1" },
  {
    id: 3,
    name: "TensorFlow",
    img: "/assets/marq/tensorflow.svg",
    color: "#FF6F00",
  },
  { id: 4, name: "PyTorch", img: "/assets/marq/pytorch.svg", color: "#EE4C2C" },
  { id: 5, name: "Jupyter", img: "/assets/marq/jupyter.svg", color: "#F37626" },
  {
    id: 6,
    name: "Scikit-learn",
    img: "/assets/marq/sklearn.svg",
    color: "#F7931E",
  },
  {
    id: 7,
    name: "Pandas",
    img: "/assets/marq/pandas.svg",
    color: "#150458",
    darkLogo: true,
  },
  {
    id: 8,
    name: "NumPy",
    img: "/assets/marq/numpy.svg",
    color: "#4DABCF",
    darkLogo: true,
  },
  {
    id: 9,
    name: "OpenAI",
    img: "/assets/marq/openai.svg",
    color: "#10A37F",
    darkLogo: true,
  },
  {
    id: 10,
    name: "LangChain",
    img: "/assets/marq/langchain.svg",
    color: "#1C3C3C",
    darkLogo: true,
  },
  { id: 11, name: "Excel", icon: "fas fa-file-excel", color: "#217346" },
  { id: 12, name: "Power BI", icon: "fas fa-chart-pie", color: "#F2C811" },
  { id: 13, name: "Tableau", icon: "fas fa-chart-bar", color: "#E97627" },
  { id: 14, name: "ML / AI", icon: "fas fa-brain", color: "#9333EA" },
];

/* ----- Course Data ----- */

export const coursesData = [
  /* -- 1. Data Analytics & Visualisation (Complete Bundle) -- */
  {
    id: "analytics",
    slug: "data-analytics",

    /* Homepage */
    homepageOrder: 1,
    homepageTitle: "Data Analytics & Visualisation",
    badge: "Most Popular",
    badgeColor: "badge-green",
    accent: "#e63946",
    chapters: ["Excel", "SQL", "Python", "Power BI", "Tableau", "Capstone"],
    desc: "The complete analytics bundle -Excel, SQL, Python, Power BI & Tableau in one fast-track program. The fastest route to a data analyst role.",

    /* Courses page */
    category: "Data Analytics",
    categoryLabel: "Data",
    bannerImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
    icon: "fas fa-chart-bar",
    level: "Beginner → Intermediate",
    duration: "10 weeks",
    modules: 10,
    color: "card-red",
    enrolledCount: 312,
    title: "Data Analytics Bundle",
    subtitle: "Complete Analyst Toolkit -Excel, SQL, Python, Power BI",
    description:
      "The complete data analytics program covering Excel, SQL, Python, Power BI, and Tableau in one structured fast-track bundle. Covers the same tools as the individual deep-dive courses but as a focused analyst career program -ideal for those who want the full toolkit without separate enrollments.",
    skills: [
      "Excel & Pivot Tables",
      "SQL for Analytics",
      "Python & Pandas",
      "Power BI Dashboards",
      "Tableau Visualizations",
      "End-to-End Analytics Projects",
    ],
    outcomes: [
      "Master all major data analyst tools in one program",
      "Build interactive dashboards in both Power BI and Tableau",
      "Perform exploratory data analysis (EDA) with Python",
      "Present data insights confidently to stakeholders",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹10,999",
    originalPrice: "₹16,999",
    emi: "₹917/mo",
    nextBatch: "April 5, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "10 weeks of live weekend sessions",
      "Recorded sessions & datasets",
      "10 real-world analytics projects",
      "Power BI & Tableau starter templates",
      "Course completion certificate",
      "Career placement support",
    ],
    whoIsItFor: [
      "Freshers targeting data analyst roles at top companies",
      "Excel users who want to level up to Python and BI tools",
      "Business professionals who work with data daily",
      "Students who want the full analytics toolkit in one program",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Excel Foundations & Advanced Formulas",
        desc: "Core functions, VLOOKUP, INDEX-MATCH, pivot tables, slicers, and dashboard design fundamentals",
      },
      {
        week: "Week 2",
        title: "SQL for Analytics",
        desc: "SELECT, JOINs, GROUP BY, window functions (ROW_NUMBER, LAG, LEAD), CTEs, and business query patterns",
      },
      {
        week: "Week 3–4",
        title: "Python for Data Analysis",
        desc: "NumPy, pandas -data loading, cleaning, transformation, EDA, and working with real-world datasets",
      },
      {
        week: "Week 5",
        title: "Statistical Analysis",
        desc: "Descriptive statistics, hypothesis testing, A/B testing, distributions, and statistical thinking for analysts",
      },
      {
        week: "Week 6–7",
        title: "Power BI -Data Modeling & Dashboards",
        desc: "Connecting data sources, star schema modeling, DAX measures (CALCULATE, SUMX, time intelligence), and interactive executive dashboards",
      },
      {
        week: "Week 8–9",
        title: "Tableau -Visualization & Storytelling",
        desc: "Core chart types, calculated fields, LOD expressions, actions, and building interactive Tableau dashboards",
      },
      {
        week: "Week 10",
        title: "Capstone Project",
        desc: "End-to-end analytics project using all 5 tools -collect, clean, analyse, visualize, and present insights to stakeholders",
      },
    ],
  },

  /* -- 2. Data Analytics with Python -- */
  {
    id: "datascience",
    slug: "data-science",

    /* Homepage */
    homepageOrder: 2,
    homepageTitle: "Data Analytics with Python",
    badge: null,
    badgeColor: "",
    accent: "#0d9488",
    chapters: ["Python", "NumPy", "Pandas", "EDA", "Matplotlib", "Seaborn"],
    desc: "Learn how to analyze real-world data using Python and turn it into meaningful business insights -from cleaning to visualization.",

    /* Courses page */
    category: "Data Science",
    categoryLabel: "Data",
    bannerImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80&auto=format&fit=crop",
    icon: "fas fa-flask",
    level: "Intermediate",
    duration: "8 weeks",
    modules: 8,
    color: "card-green",
    enrolledCount: 198,
    title: "Data Analytics with Python",
    subtitle: "From Raw Data to Business Insights",
    description:
      "Learn how to analyze real-world data using Python and turn it into meaningful business insights. Focuses on practical data workflows -cleaning, processing, EDA, and impactful visualizations.",
    skills: [
      "Python for Data Analysis",
      "NumPy & Pandas",
      "Data Cleaning & Transformation",
      "Exploratory Data Analysis (EDA)",
      "Matplotlib & Seaborn",
      "End-to-End Analytics Workflows",
    ],
    outcomes: [
      "Analyze and interpret real datasets with confidence",
      "Perform data cleaning, transformation, and exploration",
      "Build clear and impactful visualizations",
      "Solve real-world business problems using data",
      "Create portfolio-ready data analysis projects",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹15,999",
    originalPrice: "₹24,999",
    emi: "₹1,334/mo",
    nextBatch: "May 3, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "8 weeks of live weekend sessions",
      "Recorded lectures & Jupyter notebooks",
      "8 end-to-end analytics projects",
      "Real-world dataset collection",
      "Course completion certificate",
      "1-on-1 career mentorship session",
    ],
    whoIsItFor: [
      "Students looking to build strong data analysis skills",
      "Professionals transitioning into data analytics roles",
      "Anyone who knows basic Python and wants to apply it to real data",
      "Aspiring data analysts who want hands-on, practical experience",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Python for Data Analytics (Quick Foundation)",
        desc: "Python essentials for data analysis, Jupyter Notebook, data structures, functions, and introduction to analytics workflow",
      },
      {
        week: "Week 2",
        title: "NumPy for Data Processing",
        desc: "Arrays, vectorized operations, indexing, slicing, reshaping, and mathematical operations on datasets",
      },
      {
        week: "Week 3",
        title: "Pandas – Data Handling",
        desc: "Series & DataFrames, importing data (CSV, Excel, APIs), exploring datasets, filtering & selection",
      },
      {
        week: "Week 4",
        title: "Data Cleaning & Preparation",
        desc: "Handling missing values, removing duplicates, data type conversions, feature engineering (binning, encoding), transformation techniques",
      },
      {
        week: "Week 5",
        title: "Exploratory Data Analysis (EDA)",
        desc: "Understanding data distributions, summary statistics, correlation & relationships, grouping & aggregation, identifying patterns & trends",
      },
      {
        week: "Week 6",
        title: "Data Visualization with Python",
        desc: "Matplotlib & Seaborn -bar, line, scatter, histogram, heatmaps, pairplots, data storytelling, and best practices",
      },
      {
        week: "Week 7",
        title: "Advanced Analysis & Real-World Scenarios",
        desc: "Working with large datasets, applying functions across datasets, time series basics, business problem-solving, end-to-end workflows",
      },
      {
        week: "Week 8",
        title: "Case Studies & Projects",
        desc: "Real-world data analysis project: data cleaning → analysis → visualization → business insights generation and portfolio presentation",
      },
    ],
  },

  /* -- 3. Generative AI Development -- */
  {
    id: "ai",
    slug: "artificial-intelligence",

    /* Homepage */
    homepageOrder: 3,
    homepageTitle: "Generative AI Development",
    badge: "Trending",
    badgeColor: "badge-orange",
    accent: "#7c3aed",
    chapters: [
      "Python",
      "LLMs",
      "LangChain",
      "Prompt Engineering",
      "OpenAI API",
      "RAG",
    ],
    desc: "Build real-world AI applications with LLMs, LangChain, and modern GenAI tools. Designed for developers ready to go beyond the basics.",

    /* Courses page */
    category: "Generative AI",
    categoryLabel: "AI & ML",
    bannerImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&auto=format&fit=crop",
    icon: "fas fa-brain",
    level: "Beginner → Advanced",
    duration: "8 weeks",
    modules: 8,
    color: "card-green",
    enrolledCount: 284,
    title: "Applied AI",
    subtitle: "From ML Foundations to GenAI Applications",
    description:
      "Build real-world AI applications -from ML fundamentals and neural networks to LLMs, RAG pipelines, and deployed AI tools. The complete applied AI journey.",
    skills: [
      "Python, NumPy & Pandas",
      "Machine Learning (scikit-learn)",
      "Neural Networks & Deep Learning",
      "Generative AI & LLMs",
      "RAG & Vector Databases",
      "AI App Deployment",
    ],
    outcomes: [
      "Build and train ML models from scratch",
      "Work with LLMs and prompt engineering",
      "Build document Q&A systems with RAG",
      "Deploy AI applications with Streamlit/Gradio",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹12,999",
    originalPrice: "₹19,999",
    emi: "₹1,083/mo",
    nextBatch: "April 5, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "8 weeks of live weekend sessions",
      "Recorded lectures for all modules",
      "8 hands-on projects & case studies",
      "Doubt resolution support",
      "Course completion certificate",
      "Lifetime community access",
    ],
    whoIsItFor: [
      "Developers who want to build AI-powered applications",
      "Data professionals exploring Generative AI",
      "Engineers looking to upskill in modern AI tools",
      "Tech enthusiasts who want hands-on AI experience",
    ],
    curriculum: [
      {
        week: "Week 1–2",
        title: "ML Foundations & Python for AI",
        desc: "Python, NumPy, pandas, ML basics with scikit-learn, train/test splits, and your first ML model",
      },
      {
        week: "Week 3",
        title: "Deep Learning Fundamentals",
        desc: "Neural networks basics, backpropagation, and CNN introduction (practical, not heavy theory)",
      },
      {
        week: "Week 4",
        title: "Generative AI & LLMs",
        desc: "What are LLMs, prompt engineering, OpenAI / HuggingFace APIs, and build a simple chatbot",
      },
      {
        week: "Week 5",
        title: "RAG & AI Systems",
        desc: "Embeddings, vector DB with FAISS, document Q&A system, LangChain / LlamaIndex basics",
      },
      {
        week: "Week 6",
        title: "Applied AI Use Cases",
        desc: "Chatbots, recommendation systems, and text classification on real datasets",
      },
      {
        week: "Week 7",
        title: "Deployment",
        desc: "Streamlit / Gradio apps, deploy LLM applications, API + UI integration",
      },
      {
        week: "Week 8",
        title: "Capstone Project",
        desc: "Build one of: AI chatbot with memory, document Q&A system, or business AI use-case (sales / HR / analytics AI)",
      },
    ],
  },

  /* -- 4. Agentic AI (courses page only) -- */
  {
    id: "agentic",
    slug: "agentic-ai",

    /* Homepage */
    homepageOrder: null,
    badge: "New",
    badgeColor: "badge-purple",
    accent: "#7c3aed",
    chapters: [
      "LangChain",
      "LangGraph",
      "AutoGen",
      "CrewAI",
      "Tool Use",
      "Multi-Agent Systems",
    ],
    desc: "Design, build, and deploy autonomous AI agents using LangChain, LangGraph, AutoGen, and modern agentic frameworks.",

    /* Courses page */
    category: "Generative AI",
    categoryLabel: "AI & ML",
    bannerImage:
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80&auto=format&fit=crop",
    icon: "fas fa-robot",
    level: "Intermediate → Advanced",
    duration: "8 weeks",
    modules: 8,
    color: "card-purple",
    enrolledCount: 143,
    title: "Agentic AI",
    subtitle: "Build Autonomous AI Agents",
    description:
      "Design, build, and deploy autonomous AI agents using LangChain, LangGraph, AutoGen, and modern agentic frameworks. Go beyond chatbots -build systems that reason, plan, and act.",
    skills: [
      "LLM APIs & Prompt Engineering",
      "LangChain & LangGraph",
      "RAG & Vector Databases",
      "Tool Use & Function Calling",
      "Multi-Agent Systems (AutoGen / CrewAI)",
      "Evaluation, Guardrails & Deployment",
    ],
    outcomes: [
      "Design multi-step agentic workflows",
      "Build agents that use tools and APIs autonomously",
      "Create multi-agent collaboration pipelines",
      "Add monitoring, guardrails, and deploy production-ready AI agents",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹14,999",
    originalPrice: "₹22,999",
    emi: "₹1,250/mo",
    nextBatch: "April 12, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "8 weeks of live weekend sessions",
      "Recorded sessions & code notebooks",
      "8 agentic AI projects (one per week)",
      "LangChain & LangGraph starter kits",
      "Course completion certificate",
      "Access to private Discord community",
    ],
    whoIsItFor: [
      "AI/ML engineers who want to go beyond chatbots",
      "Developers already familiar with Python and LLMs",
      "Product managers exploring agentic AI architectures",
      "Builders who want to create autonomous AI workflows",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "LLM Foundations & Prompting",
        desc: "How LLMs work, OpenAI / Anthropic APIs, prompt engineering (zero-shot, few-shot, CoT), structured outputs (JSON), and hallucination handling",
      },
      {
        week: "Week 2",
        title: "From LLM Apps to Agents",
        desc: "LLM app vs agent vs workflow, ReAct pattern, tool calling basics, function calling, and when NOT to use agents",
      },
      {
        week: "Week 3",
        title: "RAG -Retrieval-Augmented Generation",
        desc: "Embeddings, vector DB (FAISS), chunking strategies, semantic search, and context injection -build a document Q&A agent",
      },
      {
        week: "Week 4",
        title: "LangChain as an Enabler",
        desc: "Chains vs agents, memory types, tools integration, LCEL basics -build a conversational agent with memory & tools",
      },
      {
        week: "Week 5",
        title: "LangGraph & Stateful Agents",
        desc: "Stateless vs stateful agents, graph-based workflows, multi-step reasoning pipelines, error handling & retries",
      },
      {
        week: "Week 6",
        title: "Multi-Agent Systems",
        desc: "AutoGen / CrewAI, agent roles (planner, researcher, executor), communication patterns, cost & latency tradeoffs",
      },
      {
        week: "Week 7",
        title: "Evaluation, Debugging & Guardrails",
        desc: "Why agents fail, debugging reasoning traces, observability (LangSmith / logs), output validation, safety checks, and prompt versioning",
      },
      {
        week: "Week 8",
        title: "Deployment & Capstone",
        desc: "FastAPI backend, Streamlit / Gradio UI, API + UI integration, cost optimization -build and deploy a full autonomous agent system",
      },
    ],
  },

  /* -- 5. RAG Systems (courses page only) -- */
  {
    id: "rag",
    slug: "rag-systems",

    /* Homepage */
    homepageOrder: null,
    badge: "Hot",
    badgeColor: "badge-red",
    accent: "#0d9488",
    chapters: [
      "Vector Databases",
      "Embeddings",
      "Pinecone",
      "Chroma / FAISS",
      "OpenAI API",
      "Hybrid Search",
    ],
    desc: "Build powerful RAG pipelines using vector databases, embeddings, and LLMs. Make AI systems smarter with your own private data.",

    /* Courses page */
    category: "Generative AI",
    categoryLabel: "AI & ML",
    bannerImage:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80&auto=format&fit=crop",
    icon: "fas fa-layer-group",
    level: "Intermediate → Advanced",
    duration: "4 weeks",
    modules: 4,
    color: "card-teal",
    enrolledCount: 97,
    title: "Advanced RAG",
    subtitle: "Production-Grade Retrieval-Augmented Generation",
    description:
      "Go beyond basic RAG. Build production-ready RAG systems with hybrid search, advanced retrieval strategies, agentic RAG, and full evaluation pipelines.",
    skills: [
      "RAG Architecture & Chunking Strategies",
      "Hybrid Search (BM25 + Vector)",
      "Query Transformation & Re-ranking",
      "Multi-hop & Agentic RAG",
      "RAG Evaluation (Retrieval & Answer Quality)",
      "Latency, Caching & Cost Optimization",
    ],
    outcomes: [
      "Build and optimize production-grade RAG pipelines",
      "Implement hybrid search and advanced retrieval strategies",
      "Evaluate RAG systems using retrieval precision & answer quality metrics",
      "Deploy a full RAG system with UI, observability, and cost controls",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹9,999",
    originalPrice: "₹14,999",
    emi: "₹834/mo",
    nextBatch: "April 19, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "4 weeks of live weekend sessions",
      "Recorded sessions & Jupyter notebooks",
      "4 production-grade RAG projects",
      "Vector DB & evaluation framework starter kits",
      "Course completion certificate",
      "Lifetime community access",
    ],
    whoIsItFor: [
      "AI engineers who want to build knowledge-base chatbots",
      "Developers integrating private data into LLM applications",
      "Data engineers building production-grade AI pipelines",
      "Anyone who wants to go beyond naive, generic RAG systems",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "RAG Foundations Done Right",
        desc: "RAG anatomy (Ingestion → Chunking → Embeddings → Retrieval → Generation), chunking strategies (fixed vs semantic vs hierarchical), embedding quality, FAISS hands-on, and why naive RAG fails",
      },
      {
        week: "Week 2",
        title: "Retrieval Optimization",
        desc: "Hybrid search (BM25 + vector), metadata filtering, query transformation (rewriting, multi-query generation), re-ranking with cross-encoders, and context optimization (top-k tuning, token budgeting)",
      },
      {
        week: "Week 3",
        title: "Advanced RAG Architectures",
        desc: "Multi-hop RAG, agentic RAG (RAG + tools), knowledge graphs intro, structured + unstructured data blending, and long-context handling (sliding windows, hierarchical retrieval)",
      },
      {
        week: "Week 4",
        title: "Evaluation, Scaling & Production",
        desc: "RAG evaluation (retrieval precision/recall, answer quality), debugging retrieval vs generation failures, latency optimization, caching, cost control, observability -capstone: production-ready RAG system with Streamlit UI",
      },
    ],
  },

  /* -- 6. SQL Mastery (courses page only) -- */
  {
    id: "sql",
    slug: "sql-for-data-analysis",

    /* Homepage */
    homepageOrder: null,
    badge: "Essential",
    badgeColor: "badge-blue",
    accent: "#4169E1",
    chapters: [
      "SELECT & JOINs",
      "Window Functions",
      "CTEs & Subqueries",
      "Query Optimization",
      "PostgreSQL / MySQL",
    ],
    desc: "Go from basic SELECT statements to advanced window functions, query optimization, and database design.",

    /* Courses page */
    category: "Data Analytics",
    categoryLabel: "Tools & SQL",
    bannerImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&auto=format&fit=crop",
    icon: "fas fa-server",
    level: "Beginner → Advanced",
    duration: "8 weeks",
    modules: 8,
    color: "card-teal",
    enrolledCount: 426,
    title: "SQL Mastery",
    subtitle: "From Queries to Query Optimization",
    description:
      "Master SQL for querying, analyzing, and managing data in real-world systems -from basic SELECT statements to advanced window functions, stored procedures, and query optimization.",
    skills: [
      "SELECT, WHERE, ORDER BY & Aggregations",
      "JOINs & Relationships",
      "Subqueries, CTEs & UNION",
      "Window Functions (ROW_NUMBER, RANK, LAG, LEAD)",
      "Query Optimization & Indexing",
      "Stored Procedures & User-Defined Functions",
    ],
    outcomes: [
      "Extract insights from databases with complex queries",
      "Write advanced window functions and analytics queries",
      "Work with and optimize large datasets",
      "Write production-level SQL and ace data interviews",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹6,999",
    originalPrice: "₹10,999",
    emi: "₹584/mo",
    nextBatch: "April 12, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "8 weeks of live weekend sessions",
      "Recorded sessions & query workbooks",
      "8 real-world SQL projects",
      "PostgreSQL & MySQL practice datasets",
      "Course completion certificate",
      "SQL interview question bank (200+)",
    ],
    whoIsItFor: [
      "Beginners who have never written a SQL query before",
      "Analysts who want to write faster, more complex queries",
      "Developers who want to understand database design",
      "Anyone preparing for data analyst or BI engineer interviews",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Introduction to Databases & SQL",
        desc: "What is SQL and why it's used, RDBMS concepts, database design fundamentals (schema, ER diagrams), data types, NULL values, constraints, and installing SQL Server & tools",
      },
      {
        week: "Week 2",
        title: "Getting Started with SQL Queries",
        desc: "SELECT statements, filtering data (WHERE), sorting (ORDER BY), removing duplicates (DISTINCT), and basic logical & relational operators",
      },
      {
        week: "Week 3",
        title: "Data Manipulation & Aggregation",
        desc: "INSERT, UPDATE, DELETE statements, GROUP BY & HAVING, aggregate functions (SUM, COUNT, AVG, MIN, MAX), multiple conditions, data summarization",
      },
      {
        week: "Week 4",
        title: "Working with Multiple Tables",
        desc: "INNER, LEFT, RIGHT, FULL JOINs, cross joins & self joins, combining datasets, primary & foreign keys, real-world data modeling",
      },
      {
        week: "Week 5",
        title: "Advanced Querying Techniques",
        desc: "Subqueries (nested queries), inline views, UNION / UNION ALL, INTERSECT & EXCEPT, query structuring for readability",
      },
      {
        week: "Week 6",
        title: "Window Functions & Analytics",
        desc: "ROW_NUMBER, RANK, DENSE_RANK, LEAD & LAG, partitioning & ordering, running totals, cumulative calculations, analytical queries",
      },
      {
        week: "Week 7",
        title: "Optimization & Real-World Usage",
        desc: "Query optimization techniques, indexing basics, stored procedures, user-defined functions, and working with large datasets",
      },
      {
        week: "Week 8",
        title: "Case Studies & Projects",
        desc: "End-to-end SQL project, business problem-solving using SQL, data extraction for analytics, production-level queries, and interview preparation",
      },
    ],
  },

  /* -- 7. Advanced Excel (courses page only) -- */
  {
    id: "excel",
    slug: "advanced-excel",

    /* Homepage */
    homepageOrder: null,
    badge: null,
    badgeColor: "",
    accent: "#217346",
    chapters: [
      "XLOOKUP / INDEX-MATCH",
      "Pivot Tables",
      "Power Query",
      "Dynamic Arrays",
      "VBA Macros",
      "Dashboard Design",
    ],
    desc: "Unlock Excel's full potential -from advanced formulas and pivot tables to Power Query automation and VBA macros.",

    /* Courses page */
    category: "Data Analytics",
    categoryLabel: "Tools & SQL",
    bannerImage:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80&auto=format&fit=crop",
    icon: "fas fa-table",
    level: "Beginner → Advanced",
    duration: "8 weeks",
    modules: 8,
    color: "card-orange",
    enrolledCount: 389,
    title: "Excel & Advanced Excel",
    subtitle: "From Fundamentals to Data Dashboards",
    description:
      "Master Excel for data analysis, reporting, and dashboard creation -from basic navigation and core functions to advanced pivot tables, dashboards, and dynamic interactive reports.",
    skills: [
      "Core Functions (SUM, IF, VLOOKUP, INDEX-MATCH)",
      "Advanced Formulas & Lookup Techniques",
      "Data Cleaning & Transformation",
      "Pivot Tables & Reporting",
      "Data Visualization & Chart Design",
      "Interactive Dashboard Design",
    ],
    outcomes: [
      "Automate reports and analyze business data efficiently",
      "Build interactive, executive-ready dashboards",
      "Master advanced formulas and data analysis techniques",
      "Create portfolio-worthy business Excel projects",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹4,999",
    originalPrice: "₹7,999",
    emi: "₹417/mo",
    nextBatch: "April 5, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "8 weeks of live weekend sessions",
      "Recorded sessions & Excel workbooks",
      "8 dashboard & automation projects",
      "Excel template starter kit",
      "Course completion certificate",
      "Excel interview question bank",
    ],
    whoIsItFor: [
      "Beginners who want to build strong Excel fundamentals",
      "Working professionals who use Excel but haven't mastered it",
      "Finance, operations, and marketing professionals",
      "Anyone who wants to automate and visualize data in Excel",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Excel Fundamentals",
        desc: "Introduction to Excel environment, basic navigation & interface, data entry & formatting, sorting, filtering, data validation, and understanding data types",
      },
      {
        week: "Week 2",
        title: "Core Functions & Data Handling",
        desc: "SUM, COUNT, AVERAGE; logical functions (IF, AND, OR, NOT); text functions (LEFT, RIGHT, MID, TRIM); date & time functions; named ranges & structured references",
      },
      {
        week: "Week 3",
        title: "Advanced Functions & Lookups",
        desc: "VLOOKUP, HLOOKUP (use cases & limitations), INDEX-MATCH (advanced lookup), nested functions, dynamic formulas, and introduction to data modeling in Excel",
      },
      {
        week: "Week 4",
        title: "Data Analysis & Transformation",
        desc: "Data cleaning techniques, handling large datasets, conditional formatting, data manipulation using formulas, and preparing data for analysis",
      },
      {
        week: "Week 5",
        title: "Pivot Tables & Reporting",
        desc: "Introduction to pivot tables, rows/columns/values/filters, data summarization & aggregation, creating summary reports, and cross-tab analysis",
      },
      {
        week: "Week 6",
        title: "Advanced Pivot & Data Analysis",
        desc: "Calculated fields in pivot tables, grouping & binning, slicers & timelines, changing report layouts, and advanced data analysis techniques",
      },
      {
        week: "Week 7",
        title: "Data Visualization & Dashboarding",
        desc: "Chart types (bar, line, pie, scatter, etc.), choosing the right chart, chart formatting & customization, introduction to dashboards, and designing interactive dashboards",
      },
      {
        week: "Week 8",
        title: "Advanced Dashboarding & Project",
        desc: "Building dynamic dashboards using pivot controls, slicers, timelines, and interactivity; advanced charts (waterfall, thermometer); dashboard design best practices; end-to-end business dashboard project",
      },
    ],
  },

  /* -- 8. Python (Foundation + Data) -- */
  {
    id: "python",
    slug: "python-foundation",

    /* Homepage */
    homepageOrder: null,
    badge: "Foundation",
    badgeColor: "badge-blue",
    accent: "#3776AB",
    chapters: [
      "Python Basics",
      "OOP",
      "NumPy",
      "Pandas",
      "Data Cleaning",
      "Case Studies",
    ],
    desc: "Learn Python from scratch and use it to solve real-world data problems, automate workflows, and build analytical solutions.",

    /* Courses page */
    category: "Data Analytics",
    categoryLabel: "Data",
    bannerImage:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80&auto=format&fit=crop",
    icon: "fab fa-python",
    level: "Beginner",
    duration: "8 weeks",
    modules: 8,
    color: "card-teal",
    enrolledCount: 210,
    title: "Python (Foundation + Data)",
    subtitle: "Python from Scratch to Real-World Data",
    description:
      "Learn Python from scratch and use it to solve real-world data problems, automate workflows, and build analytical solutions. Covers fundamentals, OOP, NumPy, and Pandas.",
    skills: [
      "Python Fundamentals & Logic",
      "Data Structures & Functions",
      "Object-Oriented Programming (OOP)",
      "NumPy for Numerical Computing",
      "Pandas for Data Analysis",
      "Data Cleaning & Transformation",
    ],
    outcomes: [
      "Write production-ready Python code",
      "Analyze and manipulate real datasets",
      "Automate repetitive tasks",
      "Build reusable data pipelines",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹8,999",
    originalPrice: "₹13,999",
    emi: "₹750/mo",
    nextBatch: "May 10, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "8 weeks of live weekend sessions",
      "Recorded sessions & Jupyter notebooks",
      "8 hands-on data projects",
      "Python & pandas starter workbooks",
      "Course completion certificate",
      "Career placement support",
    ],
    whoIsItFor: [
      "Beginners with zero programming experience",
      "Data aspirants who want to start with Python",
      "Professionals looking to automate workflows with Python",
      "Anyone who wants a strong Python foundation before moving to ML or AI",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Getting Started with Python",
        desc: "Introduction to Python & its applications in data science, setting up environment (Anaconda, Jupyter), Python IDEs, packages & libraries, basic syntax & first programs",
      },
      {
        week: "Week 2",
        title: "Python Fundamentals",
        desc: "Data types & data structures (strings, lists, tuples, dictionaries), basic operations (mathematical, string, date), control flow (if-else, loops), list & dictionary comprehensions",
      },
      {
        week: "Week 3",
        title: "Functions & Programming Concepts",
        desc: "Built-in functions (text, numeric, date, utility), user-defined functions, lambda functions, apply functions, functional programming basics, debugging & code profiling",
      },
      {
        week: "Week 4",
        title: "Object-Oriented Programming (OOP)",
        desc: "Python objects & OOP concepts, classes & objects, modules & reusable code, writing structured and scalable Python programs",
      },
      {
        week: "Week 5",
        title: "NumPy – Numerical Computing",
        desc: "Introduction to NumPy, arrays & data structures, array creation & initialization, indexing, slicing, reshaping, mathematical operations with NumPy",
      },
      {
        week: "Week 6",
        title: "Pandas – Data Handling",
        desc: "Introduction to Pandas, Series & DataFrames, data import (CSV, Excel, files), basic data exploration, filtering, slicing, indexing",
      },
      {
        week: "Week 7",
        title: "Data Cleaning & Transformation",
        desc: "Handling missing values, duplicates, outliers; sorting & indexing; data type conversions; column operations; feature engineering (binning, dummy variables); applying functions across datasets",
      },
      {
        week: "Week 8",
        title: "Case Studies & Projects",
        desc: "End-to-end data analysis project -real-world dataset handling, data cleaning + transformation + insights, project presentation & best practices",
      },
    ],
  },

  /* -- 9. Tableau -- */
  {
    id: "tableau",
    slug: "tableau-dashboarding",

    /* Homepage */
    homepageOrder: null,
    badge: null,
    badgeColor: "",
    accent: "#E97627",
    chapters: [
      "Tableau Basics",
      "Calculated Fields",
      "LOD Expressions",
      "Dashboards",
      "Data Storytelling",
      "Real Projects",
    ],
    desc: "Learn how to turn raw data into powerful dashboards that drive decisions -from visualization principles to advanced interactive Tableau dashboards.",

    /* Courses page */
    category: "Data Analytics",
    categoryLabel: "Tools & SQL",
    bannerImage:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80&auto=format&fit=crop",
    icon: "fas fa-chart-bar",
    level: "Beginner → Intermediate",
    duration: "8 weeks",
    modules: 8,
    color: "card-orange",
    enrolledCount: 174,
    title: "Tableau Dashboarding",
    subtitle: "Data Visualization & Storytelling",
    description:
      "Learn how to turn raw data into powerful dashboards that drive decisions. Covers visualization principles, design ethics, Tableau fundamentals, advanced calculations, and end-to-end dashboard projects.",
    skills: [
      "Data Visualization Principles",
      "Tableau Workspace & Core Charts",
      "Calculated Fields & Table Calculations",
      "LOD (Level of Detail) Expressions",
      "Interactive Dashboards & Actions",
      "Data Storytelling & Presentation",
    ],
    outcomes: [
      "Build professional interactive dashboards in Tableau",
      "Present insights clearly with data storytelling",
      "Design effective, ethical visualizations",
      "Complete real-world business dashboard projects",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹7,999",
    originalPrice: "₹12,999",
    emi: "₹667/mo",
    nextBatch: "May 17, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "8 weeks of live weekend sessions",
      "Recorded sessions & Tableau workbooks",
      "8 dashboard design projects",
      "Tableau dashboard template kit",
      "Course completion certificate",
      "Career placement support",
    ],
    whoIsItFor: [
      "Analysts and business professionals moving beyond Excel charts",
      "Anyone who needs to present data insights to stakeholders",
      "Beginners in visualization looking for a structured path",
      "BI professionals wanting to master Tableau",
    ],
    curriculum: [
      {
        week: "Week 1",
        title: "Introduction to Data Visualization",
        desc: "Importance and benefits of data visualization, types (exploratory vs explanatory), basic principles (clarity, simplicity, accuracy), and how data tells a story",
      },
      {
        week: "Week 2",
        title: "Design Principles for Effective Visualizations",
        desc: "Gestalt principles, whitespace & alignment, color theory & effective palettes, typography & readability, avoiding clutter (chartjunk)",
      },
      {
        week: "Week 3",
        title: "Visualization Ethics & Tools Overview",
        desc: "Common pitfalls (misleading charts, truncation, scaling), ethical visualization practices (bias, transparency, accuracy), overview of tools (Excel, Tableau, Power BI)",
      },
      {
        week: "Week 4",
        title: "Getting Started with Tableau",
        desc: "Introduction to Tableau & its architecture, workspace overview, connecting to data sources, dimensions vs measures, data types & properties, shelves, marks card, and Show Me",
      },
      {
        week: "Week 5",
        title: "Core Visualizations in Tableau",
        desc: "Bar charts, line charts, scatter plots, tree maps, cross-tabs, tables; sorting, filtering, grouping; totals & aggregations; trend lines, reference lines, forecasting",
      },
      {
        week: "Week 6",
        title: "Advanced Tableau Concepts",
        desc: "Sets, bins, hierarchies, context filters, drill-down & drill-through, data blending & joins, working with large datasets",
      },
      {
        week: "Week 7",
        title: "Calculations & Interactivity",
        desc: "Calculated fields, table calculations, LOD (Level of Detail) expressions, parameters & what-if analysis, actions (filter, highlight, URL), building dynamic dashboards",
      },
      {
        week: "Week 8",
        title: "Dashboarding & Real-World Project",
        desc: "Dashboard design principles, combining multiple visualizations, interactive dashboard creation, performance optimization, end-to-end project (sales/business dashboard), and storytelling presentation",
      },
    ],
  },

  /* -- 10. GenAI Development -- */
  {
    id: "genai",
    slug: "generative-ai-development",

    /* Homepage */
    homepageOrder: null,
    badge: "Trending",
    badgeColor: "badge-purple",
    accent: "#7c3aed",
    chapters: [
      "LLM Foundations",
      "Prompt Engineering",
      "LLM APIs",
      "Chatbots",
      "RAG Systems",
      "AI Agents",
      "Deployment",
    ],
    desc: "Learn how to build real-world applications using Generative AI and LLMs -from prompt engineering to deploying AI-powered apps with RAG and agents.",

    /* Courses page */
    category: "Generative AI",
    categoryLabel: "AI & ML",
    bannerImage:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80&auto=format&fit=crop",
    icon: "fas fa-microchip",
    level: "Beginner → Advanced",
    duration: "16 weeks",
    modules: 16,
    color: "card-purple",
    enrolledCount: 128,
    title: "GenAI Development",
    subtitle: "Build Real-World AI Applications with LLMs",
    description:
      "Learn how to build real-world applications using Generative AI and Large Language Models. Goes beyond theory -from prompt engineering to building advanced chatbots, RAG pipelines, and AI agents, all the way to production deployment.",
    skills: [
      "Generative AI & LLM Fundamentals",
      "Prompt Engineering Techniques",
      "OpenAI & LLM APIs",
      "Chatbots & AI-Powered Applications",
      "Embeddings, Vector DBs & RAG",
      "AI Agents & Automation Workflows",
    ],
    outcomes: [
      "Build real-world AI applications using LLMs",
      "Design intelligent chatbots and assistants",
      "Integrate AI into web apps and workflows",
      "Work with embeddings, vector search, and RAG systems",
      "Create portfolio-ready AI projects and deploy them",
    ],

    /* Registration */
    regFee: "₹500",
    price: "₹24,999",
    originalPrice: "₹34,999",
    emi: "₹2,084/mo",
    nextBatch: "May 10, 2026",
    batchType: "Weekend Batch",
    instructor: "Faizan Ansari",
    includes: [
      "16 weeks of live weekend sessions",
      "Recorded lectures for all modules",
      "16 hands-on build-along projects",
      "LLM API starter kits & vector DB guides",
      "Course completion certificate",
      "Lifetime community access",
    ],
    whoIsItFor: [
      "Developers who want to build AI-powered applications",
      "Data professionals exploring Generative AI",
      "Engineers looking to upskill in modern AI tools",
      "Tech enthusiasts who want hands-on AI experience",
      "Anyone who wants to stay ahead in the AI-driven future",
    ],
    curriculum: [
      {
        week: "Week 1–2",
        title: "Foundations of Generative AI",
        desc: "Introduction to AI, ML, and Generative AI; understanding LLMs (GPT, Claude, etc.); use cases across industries; AI tools ecosystem overview",
      },
      {
        week: "Week 3–4",
        title: "Prompt Engineering",
        desc: "Basics of prompting, zero-shot & few-shot prompting, chain-of-thought prompting, prompt optimization techniques, and real-world prompt design",
      },
      {
        week: "Week 5–6",
        title: "Working with LLM APIs",
        desc: "OpenAI API (or equivalent), handling requests & responses, token usage & cost optimization, building simple AI applications",
      },
      {
        week: "Week 7–8",
        title: "Building AI Applications",
        desc: "Chatbots & assistants, text-based applications, integrating AI into workflows, error handling & reliability",
      },
      {
        week: "Week 9–10",
        title: "Embeddings & Vector Databases",
        desc: "What are embeddings, semantic search, vector databases (FAISS / Pinecone / Chroma), building search-based applications",
      },
      {
        week: "Week 11–12",
        title: "Retrieval-Augmented Generation (RAG)",
        desc: "RAG architecture, document ingestion & chunking, building knowledge-based AI systems, improving response accuracy",
      },
      {
        week: "Week 13–14",
        title: "AI Agents & Automation",
        desc: "Introduction to AI agents, tool usage & orchestration, multi-step reasoning systems, automating workflows using AI",
      },
      {
        week: "Week 15",
        title: "Deployment & Scaling",
        desc: "Deploying AI applications, APIs & backend integration, performance & cost optimization, monitoring AI systems",
      },
      {
        week: "Week 16",
        title: "Capstone Project",
        desc: "End-to-end AI application with a real-world use case -project presentation and portfolio preparation",
      },
    ],
  },

  /* -- 11. Web Development (homepage only, coming soon) -- */
  {
    id: "webdev",
    slug: "web-development",
    comingSoon: false,

    /* Homepage */
    homepageOrder: 4,
    homepageTitle: "Web Development",
    badge: null,
    badgeColor: "",
    accent: "#f97316",
    chapters: ["HTML", "CSS", "JavaScript", "ReactJS", "NextJS", "NodeJS"],
    desc: "Build production-ready web apps from scratch. Learn modern frontend and full-stack development with React and Next.js.",

    /* Courses page */
    category: "Web Development",
    categoryLabel: "Web",
    icon: "fas fa-code",
    level: "Beginner",
    duration: "4–5 Months",
    modules: null,
    color: "card-orange",
    enrolledCount: null,
    title: "Web Development",
    subtitle: "Modern Full-Stack Development",
    description:
      "Build production-ready web apps from scratch. Learn modern frontend and full-stack development with React, Next.js, and Node.js.",
    skills: [
      "HTML & CSS",
      "JavaScript (ES6+)",
      "ReactJS",
      "Next.js",
      "Node.js & Express",
      "REST APIs",
    ],
    outcomes: [
      "Build responsive, accessible web interfaces",
      "Create full-stack web applications",
      "Work with APIs and databases",
      "Deploy projects to production",
    ],

    /* Registration -coming soon */
    regFee: null,
    price: null,
    originalPrice: null,
    emi: null,
    nextBatch: "Coming Soon",
    batchType: null,
    instructor: "Riyaz Akhtar",
    includes: [],
    whoIsItFor: [],
    curriculum: [],
  },

  /* -- 12. Data Science & AI for Leaders (homepage, coming soon) -- */
  {
    id: "leaders",
    slug: "data-science-for-leaders",
    comingSoon: true,

    /* Homepage */
    homepageOrder: 5,
    homepageTitle: "Data Science & AI for Leaders",
    badge: "New",
    badgeColor: "badge-purple",
    accent: "#ec4899",
    chapters: ["ML Strategy", "Model Evaluation", "AI Ethics", "Case Studies"],
    desc: "Designed for managers and senior professionals. Understand AI strategy, model evaluation, and data-driven decision making at scale.",

    /* Courses page */
    category: "Data Science",
    categoryLabel: "Data",
    icon: "fas fa-brain",
    level: "Advanced",
    duration: "Coming Soon",
    modules: null,
    color: "card-purple",
    enrolledCount: null,
    title: "Data Science & AI for Leaders",
    subtitle: "Strategic AI for Decision Makers",
    description:
      "Designed for managers and senior professionals. Understand AI strategy, model evaluation, and data-driven decision making at scale.",
    skills: [
      "ML Strategy",
      "Model Evaluation",
      "AI Ethics",
      "Case Studies",
      "AI for Business",
    ],
    outcomes: [
      "Evaluate AI models and tools critically",
      "Build data-driven strategy for your team",
      "Understand AI limitations and risks",
      "Lead AI-powered business transformations",
    ],

    /* Registration -coming soon */
    regFee: null,
    price: null,
    originalPrice: null,
    emi: null,
    nextBatch: "Coming Soon",
    batchType: null,
    instructor: "Faizan Ansari",
    includes: [],
    whoIsItFor: [],
    curriculum: [],
  },
];

export const courseListData = coursesData.filter(
  (c) => c.price && c.curriculum.length > 0,
);

export const courseRegData = Object.fromEntries(
  courseListData.map((c) => {
    const fees = courseFees[c.id];
    return [
      c.id,
      {
        regFee: fees ? fmt(fees.regFee) : c.regFee,
        price: fees ? fmt(fees.price) : c.price,
        originalPrice: fees ? fmt(fees.originalPrice) : c.originalPrice,
        emi: fees ? emi(fees.price) : c.emi,
        nextBatch: c.nextBatch,
        batchType: c.batchType,
        instructor: c.instructor,
        includes: c.includes,
        whoIsItFor: c.whoIsItFor,
        curriculum: c.curriculum,
      },
    ];
  }),
);

/* Re-export so WorkshopForm / WorkshopDetails can read live fees */
export { workshopFees, fmt as fmtPrice };

/* ----- WORKSHOPS DATA ----- */
export const workshopData = {
  upcoming: [
    {
      id: 1001,
      slug: "excel-for-data-analysis",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
      category: "Data Analytics",
      categoryColor: "#16a34a",
      level: "Beginner",
      title: "Excel for Data Analysis",
      desc: "Master formulas, pivot tables, charts, and dashboards. The fastest path from spreadsheet user to data analyst.",
      tags: ["Excel", "Pivot Tables", "Dashboards", "Data Cleaning"],
      date: "March 29, Saturday",
      time: "10:00 AM – 1:00 PM",
      duration: "3 Hours",
      eventMode: ["Online", "Offline"],
      instructor: "Faizan Ansari",
      seatsLeft: 8,
      totalSeats: 30,
      price: "₹999",
      originalPrice: "₹1,999",
      outcomes: [
        "Master 30+ essential Excel formulas used in real analyst roles",
        "Build pivot tables to summarise and analyse large datasets",
        "Create interactive dashboards with slicers and dynamic charts",
        "Clean and transform messy, real-world data efficiently",
        "Automate repetitive tasks using named ranges and dynamic arrays",
      ],
      curriculum: [
        {
          time: "10:00 – 10:45",
          title: "Excel Foundations & Formula Mastery",
          desc: "VLOOKUP, INDEX-MATCH, IF nesting, SUMIFS -formulas every analyst needs",
        },
        {
          time: "10:45 – 11:30",
          title: "Pivot Tables & Data Summarisation",
          desc: "Group, filter, and aggregate large datasets in minutes",
        },
        {
          time: "11:30 – 12:00",
          title: "Data Cleaning & Transformation",
          desc: "Remove duplicates, handle blanks, and reshape raw data",
        },
        {
          time: "12:00 – 12:45",
          title: "Interactive Dashboard Design",
          desc: "Build a live Excel dashboard with slicers, charts, and named ranges",
        },
        {
          time: "12:45 – 13:00",
          title: "Q&A & Interview Tips",
          desc: "Common Excel interview questions and how to showcase your work",
        },
      ],
      whoIsItFor: [
        "Freshers entering the job market who want an analyst-ready skill",
        "Working professionals who use Excel daily but haven't fully mastered it",
        "Anyone preparing for data or operations analyst interviews",
        "Students who want job-ready Excel experience before graduation",
      ],
    },
    {
      id: 1002,
      slug: "sql-masterclass",
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80&auto=format&fit=crop",
      category: "Data Analytics",
      categoryColor: "#16a34a",
      level: "Intermediate",
      title: "SQL Masterclass for Analysts",
      desc: "From SELECT to advanced window functions -become the SQL analyst every data team wants to hire.",
      tags: ["SQL", "Window Functions", "Query Optimization", "PostgreSQL"],
      date: "April 5, Saturday",
      time: "11:00 AM – 2:00 PM",
      duration: "3 Hours",
      eventMode: ["Online"],
      instructor: "Waseem Ahmad",
      seatsLeft: 12,
      totalSeats: 25,
      price: "₹1,499",
      originalPrice: "₹2,499",
      outcomes: [
        "Write complex multi-table JOINs with full confidence",
        "Use window functions -ROW_NUMBER, RANK, LAG, LEAD -like a pro",
        "Understand query execution and speed up slow, costly queries",
        "Master CTEs, subqueries, and conditional aggregations",
        "Solve the SQL problems that come up in real analyst interviews",
      ],
      curriculum: [
        {
          time: "11:00 – 11:40",
          title: "SQL Refresher & Database Setup",
          desc: "PostgreSQL environment, schema navigation, and SELECT fundamentals",
        },
        {
          time: "11:40 – 12:15",
          title: "Advanced JOINs & Set Operations",
          desc: "INNER, LEFT, FULL OUTER, CROSS JOIN, UNION vs UNION ALL",
        },
        {
          time: "12:15 – 12:45",
          title: "CTEs, Subqueries & Aggregations",
          desc: "WITH clauses, nested queries, GROUP BY, and HAVING",
        },
        {
          time: "12:45 – 13:25",
          title: "Window Functions Deep Dive",
          desc: "ROW_NUMBER, RANK, DENSE_RANK, LEAD, LAG, running totals",
        },
        {
          time: "13:25 – 14:00",
          title: "Query Optimisation & Interview Problems",
          desc: "EXPLAIN plans, indexing basics, and 10 live interview questions",
        },
      ],
      whoIsItFor: [
        "Analysts who know basic SQL but want to handle complex queries",
        "Anyone preparing for data engineer or data analyst interviews",
        "Developers who want to write faster, cleaner database queries",
        "BI professionals who want to move beyond simple report queries",
      ],
    },
    {
      id: 1003,
      slug: "power-bi-dashboard-bootcamp",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
      category: "Data Visualization",
      categoryColor: "#f97316",
      level: "Intermediate",
      title: "Power BI Dashboard Bootcamp",
      desc: "Build interactive, executive-level dashboards from scratch. Learn DAX, data modelling, and visual storytelling.",
      tags: ["Power BI", "DAX", "Data Modelling", "Dashboards"],
      date: "April 12, Saturday",
      time: "10:00 AM – 1:00 PM",
      duration: "3 Hours",
      eventMode: ["Online", "Offline"],
      instructor: "Faizan Ansari",
      seatsLeft: 5,
      totalSeats: 20,
      price: "₹1,999",
      originalPrice: "₹3,499",
      outcomes: [
        "Build executive-level dashboards from raw data in Power BI",
        "Write DAX measures for KPIs, YoY growth, and rolling averages",
        "Model data with star schemas and well-structured relationships",
        "Apply visual storytelling best practices for leadership presentations",
        "Publish dashboards to Power BI Service and share with stakeholders",
      ],
      curriculum: [
        {
          time: "10:00 – 10:30",
          title: "Power BI Interface & Data Import",
          desc: "Connect to Excel, CSV, and SQL sources; navigate the Power Query editor",
        },
        {
          time: "10:30 – 11:15",
          title: "Data Modelling & Relationships",
          desc: "Star schema design, fact vs dimension tables, cardinality settings",
        },
        {
          time: "11:15 – 12:00",
          title: "DAX Formulas & Custom Measures",
          desc: "CALCULATE, FILTER, SUMX, time intelligence -build real KPIs",
        },
        {
          time: "12:00 – 12:45",
          title: "Dashboard Design & Visualisations",
          desc: "Charts, maps, slicers, bookmarks, and drill-through navigation",
        },
        {
          time: "12:45 – 13:00",
          title: "Publishing, Sharing & Q&A",
          desc: "Deploy to Power BI Service, manage permissions, and present findings",
        },
      ],
      whoIsItFor: [
        "Business analysts and report developers moving beyond Excel",
        "Managers who want to build their own self-service dashboards",
        "Excel power users ready to step up to enterprise BI tools",
        "Anyone in a data-heavy role who reports to leadership regularly",
      ],
    },
    {
      id: 1004,
      slug: "python-for-data-science",
      image:
        "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80&auto=format&fit=crop",
      category: "Data Science & AI",
      categoryColor: "#0d9488",
      level: "Intermediate",
      title: "Python for Data Science",
      desc: "pandas, NumPy, Matplotlib, and Seaborn -learn the entire Python data stack in one intensive day.",
      tags: ["Python", "Pandas", "NumPy", "Matplotlib"],
      date: "April 19, Saturday",
      time: "10:00 AM – 4:00 PM",
      duration: "6 Hours",
      eventMode: ["Online"],
      instructor: "Faizan Ansari",
      seatsLeft: 18,
      totalSeats: 30,
      price: "₹2,499",
      originalPrice: "₹3,999",
      outcomes: [
        "Write clean Python code for data manipulation using pandas",
        "Perform statistical analysis and array operations with NumPy",
        "Create publication-ready visualisations with Matplotlib and Seaborn",
        "Explore, clean, and prepare real-world datasets end-to-end",
        "Complete a portfolio-worthy EDA project on a real dataset",
      ],
      curriculum: [
        {
          time: "10:00 – 11:00",
          title: "Python & Jupyter Fundamentals",
          desc: "Data types, functions, control flow, and Jupyter notebook setup",
        },
        {
          time: "11:00 – 12:00",
          title: "NumPy & pandas Deep Dive",
          desc: "Arrays, DataFrames, indexing, merging, groupby, and aggregations",
        },
        {
          time: "12:00 – 12:30",
          title: "Data Cleaning in Practice",
          desc: "Handle missing values, remove duplicates, and fix data types",
        },
        {
          time: "12:30 – 14:00",
          title: "Visualisation with Matplotlib & Seaborn",
          desc: "Bar, line, scatter, heatmaps, pairplots, and correlation matrices",
        },
        {
          time: "14:00 – 16:00",
          title: "Capstone: End-to-End EDA Project",
          desc: "Analyse and visualise a real-world dataset and present key insights",
        },
      ],
      whoIsItFor: [
        "Analysts who want to go beyond Excel and SQL into Python",
        "Freshers targeting data analyst or junior data scientist roles",
        "Anyone who started Python but never got past the basics",
        "Professionals who work with large datasets and need automation",
      ],
    },
    {
      id: 1005,
      slug: "ml-fundamentals",
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format&fit=crop",
      category: "Data Science & AI",
      categoryColor: "#0d9488",
      level: "Advanced",
      title: "ML Fundamentals with Python",
      desc: "Supervised & unsupervised learning, model evaluation, and scikit-learn pipelines. Build real predictive models.",
      tags: [
        "Machine Learning",
        "Scikit-learn",
        "Regression",
        "Classification",
      ],
      date: "April 26, Saturday",
      time: "10:00 AM – 4:00 PM",
      duration: "6 Hours",
      eventMode: ["Online"],
      instructor: "Faizan Ansari",
      seatsLeft: 3,
      totalSeats: 20,
      price: "₹3,499",
      originalPrice: "₹4,999",
      outcomes: [
        "Understand the machine learning workflow end-to-end",
        "Implement regression and classification models with scikit-learn",
        "Evaluate models using accuracy, precision, recall, and ROC-AUC",
        "Handle feature engineering, scaling, and train-test splits correctly",
        "Build a complete predictive model on a real dataset from scratch",
      ],
      curriculum: [
        {
          time: "10:00 – 10:45",
          title: "ML Concepts & the Scikit-learn API",
          desc: "Supervised vs unsupervised learning, the fit/predict pattern, pipelines",
        },
        {
          time: "10:45 – 11:45",
          title: "Regression Models",
          desc: "Linear regression, Ridge, Lasso -theory, implementation, and tuning",
        },
        {
          time: "11:45 – 12:45",
          title: "Classification Models",
          desc: "Logistic regression, decision trees, random forests, and SVM",
        },
        {
          time: "12:45 – 13:30",
          title: "Model Evaluation & Hyperparameter Tuning",
          desc: "Confusion matrix, cross-validation, GridSearchCV, and ROC-AUC",
        },
        {
          time: "13:30 – 16:00",
          title: "Capstone: Build a Real Predictive Model",
          desc: "Full pipeline from raw data to a working, evaluated ML model",
        },
      ],
      whoIsItFor: [
        "Python users who are ready to step into machine learning",
        "Data analysts who want to transition into data science roles",
        "Students preparing for DS and ML technical interviews",
        "Anyone curious about how AI systems actually work under the hood",
      ],
    },
    {
      id: 1006,
      slug: "genai-for-business",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop",
      category: "Generative AI",
      categoryColor: "#7c3aed",
      level: "Beginner",
      title: "GenAI for Business Professionals",
      desc: "Use ChatGPT, Copilot, and AI tools to automate reports, analyse data, and make smarter decisions -no coding needed.",
      tags: ["ChatGPT", "Copilot", "Prompt Engineering", "AI Tools"],
      date: "May 3, Saturday",
      time: "11:00 AM – 2:00 PM",
      duration: "3 Hours",
      eventMode: ["Online", "Offline"],
      instructor: "Waseem Ahmad",
      seatsLeft: 20,
      totalSeats: 40,
      price: "₹999",
      originalPrice: "₹1,499",
      outcomes: [
        "Use ChatGPT and Copilot to automate reports, emails, and presentations",
        "Write effective prompts that produce reliable, high-quality AI outputs",
        "Analyse data and generate insights with AI -no coding required",
        "Build AI-powered workflows to 10x your daily productivity",
        "Understand AI limitations and avoid common costly mistakes",
      ],
      curriculum: [
        {
          time: "11:00 – 11:40",
          title: "Introduction to Generative AI",
          desc: "How LLMs work, ChatGPT vs Gemini vs Copilot -the real differences",
        },
        {
          time: "11:40 – 12:10",
          title: "Prompt Engineering Essentials",
          desc: "Zero-shot, few-shot, chain-of-thought -write prompts that actually work",
        },
        {
          time: "12:10 – 12:40",
          title: "AI for Data & Business Reporting",
          desc: "Analyse spreadsheets, generate charts, and summarise long reports with AI",
        },
        {
          time: "12:40 – 13:10",
          title: "Automating Business Workflows",
          desc: "Emails, proposals, meeting notes, SOPs -automate the boring parts",
        },
        {
          time: "13:10 – 14:00",
          title: "Hands-on Practice & Real Use Cases",
          desc: "Live demos on real business scenarios and personalised Q&A",
        },
      ],
      whoIsItFor: [
        "Business professionals who want to work smarter with AI tools",
        "Managers and team leads looking to boost their team's productivity",
        "Non-technical professionals curious about AI's real business value",
        "Entrepreneurs and freelancers who want to automate their workflows",
      ],
    },
  ],
  previous: [
    {
      id: 2001,
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80&auto=format&fit=crop",
      category: "Data Analytics",
      categoryColor: "#16a34a",
      title: "Data Warehousing for Data Engineering",
      date: "November 15, 2024",
      duration: "3 Hours",
      eventMode: ["Offline", "Online"],
      attendees: 28,
      rating: 4.9,
    },
    {
      id: 2002,
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80&auto=format&fit=crop",
      category: "Data Science & AI",
      categoryColor: "#0d9488",
      title: "Introduction to Machine Learning",
      date: "December 21, 2024",
      duration: "6 Hours",
      eventMode: ["Online"],
      attendees: 34,
      rating: 4.8,
    },
    {
      id: 2003,
      image:
        "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80&auto=format&fit=crop",
      category: "Data Visualization",
      categoryColor: "#f97316",
      title: "Tableau for Business Intelligence",
      date: "January 18, 2025",
      duration: "3 Hours",
      eventMode: ["Offline", "Online"],
      attendees: 22,
      rating: 5.0,
    },
    {
      id: 2004,
      image:
        "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&q=80&auto=format&fit=crop",
      category: "Data Analytics",
      categoryColor: "#16a34a",
      title: "Advanced SQL & Query Optimization",
      date: "February 8, 2025",
      duration: "3 Hours",
      eventMode: ["Online"],
      attendees: 31,
      rating: 4.9,
    },
  ],
};

/* ----- TEAM DATA ----- */
export const teamData = [
  {
    id: 1,
    name: "Waseem Ahmad",
    position: "Founder",
    image: "/assets/hobbies/dev_2.jpg",
    bio: "Founder of AnalyticShala and career analytics mentor. With years of hands-on experience in data, Waseem built AnalyticShala to make industry-grade data education accessible to everyone -not just those who can afford premium institutes.",
    social: [
      {
        href: "https://www.linkedin.com/in/waseem-ahmad-59386617a/",
        iconClass: "fab fa-linkedin-in",
      },
    ],
  },
  {
    id: 2,
    name: "Faizan Ansari",
    position: "Data Science & AI Trainer, Career Coach",
    college: "ISB Alumnus",
    image: "/assets/hobbies/dev_2.jpg",
    bio: "ISB alumnus and Data Science & AI Trainer with 8+ years of industry experience. Has trained 500+ professionals at Fortune 500 companies and mentored dozens of candidates into top data roles at Accenture, Deloitte, and more.",
    social: [
      {
        href: "https://www.linkedin.com/in/faizan-ansari-8989ab125",
        iconClass: "fab fa-linkedin-in",
      },
    ],
  },
  {
    id: 3,
    name: "Aishvarya Joshi",
    position: "Business Development Manager",
    image: "/assets/hobbies/dev_1.jpg",
    bio: "Drives growth and partnerships at AnalyticShala, connecting aspiring data professionals with the right programs and career opportunities.",
    social: [],
  },
  {
    id: 4,
    name: "Tanfiz Hussain",
    position: "Business Development Manager",
    image: "/assets/hobbies/dev_3.jpg",
    bio: "Helps learners navigate the AnalyticShala ecosystem -from program selection to placement support -ensuring every student gets the most out of their learning journey.",
    social: [],
  },
  {
    id: 5,
    name: "Riyaz Akhtar",
    position: "Web Developer & Trainer",
    image: "/assets/hobbies/dev_3.jpg",
    bio: "Full-stack developer and web technology trainer at AnalyticShala. Builds and maintains the platform while teaching modern web development to the next generation of developers.",
    social: [
      { href: "https://github.com/SonuAkhtar", iconClass: "fab fa-github" },
      {
        href: "https://www.linkedin.com/in/riyaz-akhtar-03bb59129/",
        iconClass: "fab fa-linkedin-in",
      },
    ],
  },
];

/* ----- CONTACT DATA ----- */
export const contactData = [
  {
    id: 0,
    icon: "/assets/contact/call.gif",
    name: "Call",
    info: "+91-88826 41988",
    href: "tel:+918882641988",
    alt: "call",
  },
  {
    id: 1,
    icon: "/assets/contact/email.gif",
    name: "Email",
    info: "team@analyticshala.in",
    href: "mailto:team@analyticshala.in",
    alt: "email",
  },
  {
    id: 2,
    icon: "/assets/contact/location.gif",
    name: "Location",
    info: "Gurgaon, India",
    alt: "location",
  },
];

/* ----- TESTIMONIALS ----- */
export const testimonyData = [
  {
    id: 1,
    image: "/assets/testimony/boy.jpg",
    review:
      "I had a highly positive experience completing the SQL course with AnalyticShala. The instructor is very knowledgeable, clear and responsive, ensuring an engaging and effective learning experience. I look forward to enrolling in future courses.",
    name: "Sameer",
    position: "Data Analyst @ Infosys",
  },
  {
    id: 2,
    image: "/assets/testimony/girl.webp",
    review:
      "I recently took Data Analytics using Python classes with AnalyticShala, and my experience was exceptional. The course provided a deep and practical understanding of the subject, with the instructor's knowledge and clear teaching style making complex concepts easy to grasp.",
    name: "Neha",
    position: "Manager @ Genpact",
  },
  {
    id: 3,
    image: "/assets/testimony/boy.jpg",
    review:
      "I received excellent support from AnalyticShala in my analytics career. The support was helpful and responsive, with clear explanations throughout. The online format allowed me to learn at my own pace. The course content was concise and highly practical.",
    name: "Tabjeel",
    position: "Data Analyst @ Wipro",
  },
  {
    id: 4,
    image: "/assets/testimony/girl.webp",
    review:
      "Thank you AnalyticShala for providing an outstanding learning experience. The trainer's enthusiasm and passion for Data Science and AI made complex concepts easy to understand, while keeping the sessions engaging and enjoyable.",
    name: "Tavleen",
    position: "Business Analyst @ Accenture",
  },
];

/* ----- FAQ DATA ----- */
export const questionsData = [
  {
    id: 1,
    question:
      "Can I join these classes even if I am from a non-technical background?",
    answer:
      "Yes, absolutely. AnalyticShala is open to everyone, regardless of their technical background. We use straightforward teaching methods to help students understand analytics easily and develop a strong interest in the subject. Our aim is to make analytics accessible and enjoyable for all participants.",
  },
  {
    id: 2,
    question: "What if I miss a class?",
    answer:
      "All live sessions are recorded and shared with enrolled students within 24 hours, so you never miss out on course content. Comprehensive notes are also provided for every session. We do recommend attending live classes for the interactive Q&A, but life happens -the recordings have you covered.",
  },
  {
    id: 3,
    question: "Do you offer placement assistance?",
    answer:
      "Yes. We provide resume reviews, LinkedIn profile audits, mock interviews, and introductions to our hiring partners. Our career team stays with you until you land the role. We focus on making every student interview-ready and confident enough to crack data roles at top companies.",
  },
  {
    id: 4,
    question:
      "Will I be able to manage these classes alongside my office work?",
    answer:
      "Absolutely. Our classes are held on weekends only, and recorded sessions are shared after every class. With just 1 hour of daily revision on weekdays, you can comfortably keep pace. Most of our students are working professionals who successfully complete the course alongside their jobs.",
  },
];

/* ----- WHY US -SCROLL CARDS ----- */
export const scrollCardsData = [
  {
    id: 1,
    title: "Live Weekend Batches",
    info: "Join live classes every weekend led by working data professionals -not just teachers. Get real-time feedback, doubt resolution, and a structured learning environment that fits your schedule.",
  },
  {
    id: 2,
    title: "Recorded Sessions + Notes",
    info: "Missed a class? No problem. Every session is recorded and paired with comprehensive notes so you can revisit complex topics at your own pace and never fall behind.",
  },
  {
    id: 3,
    title: "Interview Prep & Mock Tests",
    info: "We simulate real data analyst and data science interviews -from SQL rounds and case studies to Python coding challenges. Graduate ready to ace your first interview.",
  },
  {
    id: 4,
    title: "Real-World Capstone Projects",
    info: "Build a portfolio employers will notice. Work on actual datasets from e-commerce, finance, and healthcare domains -the kind of projects you can demo in your next job interview.",
  },
  {
    id: 5,
    title: "Career Support & Alumni Network",
    info: "From resume reviews to LinkedIn profile audits and introductions to hiring partners -our career team stays with you until you land the role, and beyond.",
  },
];

/* ----- ABOUT US ----- */
export const aboutUsText =
  "At AnalyticShala, we empower learners to thrive in today's data-driven and AI-powered world. We offer industry-focused courses in Data Analytics, Data Science, Artificial Intelligence, Generative AI, Data Visualization, and Web Development, designed to turn concepts into real-world skills. Our programs blend hands-on learning, practical projects, and real-life use cases, helping you build strong foundations and stay ahead in a rapidly evolving tech landscape.";
