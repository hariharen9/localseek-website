import { useEffect, useState, useRef } from "react";
import {
  Terminal,
  Cpu,
  Shield,
  Zap,
  Github,
  Code2,
  MessageSquare,
  Settings2,
  Braces,
  Database,
  Lock,
  Cloud,
  Sparkles,
  Command,
  BookOpen,
  Heart,
  PawPrint,
} from "lucide-react";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorDotRef.current) {
        cursorRef.current.style.left = e.clientX - 10 + "px";
        cursorRef.current.style.top = e.clientY - 10 + "px";
        cursorDotRef.current.style.left = e.clientX - 2 + "px";
        cursorDotRef.current.style.top = e.clientY - 2 + "px";
      }
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  const features = [
    {
      icon: <PawPrint className="w-8 h-8 text-green-500" />,
      title: "UI/UX Focused",
      description:
        "Designed with developers in mind, LocalSeek offers a visually stunning and intuitive interface that integrates seamlessly into your VSCode workflow.",
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: "100% Private",
      description:
        "All AI processing happens locally on your machine. Your code and conversations never leave your computer.",
    },
    {
      icon: <Cpu className="w-8 h-8 text-green-500" />,
      title: "Local Processing",
      description:
        "Zero cloud dependencies. Works offline with any Ollama-compatible model for maximum flexibility.",
    },
    {
      icon: <Zap className="w-8 h-8 text-green-500" />,
      title: "Lightning Fast",
      description:
        "Direct local model access means minimal latency and instant responses to your queries.",
    },
    {
      icon: <Code2 className="w-8 h-8 text-green-500" />,
      title: "Seamless Code Workflow",
      description:
        "Send code to chat, insert AI responses back into your editor, and copy code blocks with a single click.",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-green-500" />,
      title: "Smart Conversation Management",
      description:
        "Automatically saves chat history with generated titles. Resume any conversation exactly where you left off.",
    },
    {
      icon: <Settings2 className="w-8 h-8 text-green-500" />,
      title: "Built-in Ollama Model Manager",
      description:
        "Download, remove, and manage your Ollama models directly from within the VSCode extension.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "RAG Integration",
      description:
        "Index your local files to provide the AI with project-specific context for more relevant answers.",
    },
    {
      icon: <Braces className="w-8 h-8 text-green-500" />,
      title: "VSCode-Native Interface",
      description:
        "A beautiful, responsive, and intuitive UI that feels native to VSCode.",
    },
  ];

  const models = [
    {
      name: "DeepSeek-R1",
      description:
        "Exceptional performance for code understanding and generation",
      icon: <Braces className="w-6 h-6" />,
      size: "14B parameters",
    },
    {
      name: "Mistral",
      description: "Balanced performance for general development tasks",
      icon: <Sparkles className="w-6 h-6" />,
      size: "7B parameters",
    },
    {
      name: "CodeLlama",
      description: "Specialized for programming and code analysis",
      icon: <Command className="w-6 h-6" />,
      size: "34B parameters",
    },
  ];

  const additionalModels = [
    "Llama 3.1",
    "Llama 3.2",
    "Mixtral",
    "Phi-2",
    "Phi-3",
    "OpenHermes",
    "Wizard Coder",
    "Qwen",
    "And many more...",
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white bg-grid">
      <div className="cursor" ref={cursorRef}></div>
      <div className="cursor-dot" ref={cursorDotRef}></div>

      {/* Navigation */}
      <nav className="fixed z-50 w-full border-b backdrop-blur-md bg-black/20 border-green-500/10">
        <div className="container flex items-center justify-between px-6 py-4 mx-auto">
          <div className="flex items-center space-x-2">
            <Terminal className="w-8 h-8 text-green-500 animate-float" />
            <span className="text-2xl font-bold gradient-text">LocalSeek</span>
          </div>
          <div className="items-center hidden space-x-8 md:flex">
            <a
              href="#features"
              className="transition-colors hover:text-green-500">
              Features
            </a>
            <a
              href="#models"
              className="transition-colors hover:text-green-500">
              Models
            </a>
            <a
              href="#installation"
              className="transition-colors hover:text-green-500">
              Installation
            </a>
            <a
              href="https://github.com/hariharen9/localseek"
              className="flex items-center px-4 py-2 space-x-2 transition-all border rounded-full bg-white/5 hover:bg-white/10 border-green-500/20">
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative px-6 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-600/10 to-transparent"></div>
        <div className="container relative max-w-6xl mx-auto">
          <div
            className={`space-y-6 text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}>
            {/* <div className="logo-placeholder">
              <Image className="w-8 h-8 text-green-500/50" />
              <img src='../assets/logo.svg' height={100} alt="Logo" />
            </div> */}

            <h1 className="text-5xl font-bold md:text-7xl">
              <span className="gradient-text">Privacy-First AI Chat</span>
              <br />
              for VS Code
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-gray-400 md:text-2xl">
              Bring conversational AI directly to your development environment -
              completely locally, completely private with{" "}
              <span className="max-w-2xl mx-auto text-xl text-green-300 md:text-2xl">
                Visually Stunning UI
              </span>{" "}
              🚀.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 pt-8 md:flex-row">
              <a
                href="#installation"
                className="px-8 py-4 text-lg font-semibold transition-all bg-green-600 rounded-full hover:bg-green-500 animate-glow">
                Get Started
              </a>
              <a
                href="https://marketplace.visualstudio.com/items?itemName=Hariharen.localseek"
                className="px-8 py-4 text-lg font-semibold transition-all bg-green-600 rounded-full hover:bg-green-500 animate-glow">
                Install from VSCode Marketplace
              </a>
              <a
                href="https://github.com/hariharen9/localseek/releases"
                className="px-8 py-4 text-lg font-semibold transition-all bg-green-600 rounded-full hover:bg-green-500 animate-glow">
                Install from GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Features Grid */}
      <section id="features" className="px-6 py-20 bg-black/40">
        <div className="container max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center gradient-text">
            Powerful Features
          </h2>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl gradient-border card-hover ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}>
                {feature.icon}
                <h3 className="mt-4 mb-2 text-xl font-semibold">
                  {feature.title}
                </h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="models" className="px-6 py-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center gradient-text">
            Supported Models
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {models.map((model, index) => (
              <div
                key={index}
                className="p-8 rounded-2xl gradient-border card-hover">
                <div className="flex items-center mb-4 space-x-4">
                  {model.icon}
                  <div>
                    <h3 className="text-xl font-semibold">{model.name}</h3>
                    <span className="text-sm text-green-400">{model.size}</span>
                  </div>
                </div>
                <p className="text-gray-400">{model.description}</p>
              </div>
            ))}
          </div>

          {/* Additional Models */}
          <div className="mt-16">
            <h3 className="mb-8 text-2xl font-bold text-center">
              And Many More...
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {additionalModels.map((model, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-gray-300 transition-all border rounded-full bg-white/5 border-green-500/20 hover:bg-white/10">
                  {model}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Installation Section */}
      <section id="installation" className="px-6 py-20 bg-black/40">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold gradient-text">
              Get Started in Minutes
            </h2>
            <p className="text-xl text-gray-400">
              Simple installation process to get you up and running
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="p-8 rounded-2xl gradient-border card-hover">
              <h3 className="mb-4 text-2xl font-semibold">
                Method 1: VS Code Marketplace
              </h3>
              <ol className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-full">
                    1
                  </span>
                  <span>Open VSCode Extensions (Ctrl+Shift+X)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-full">
                    2
                  </span>
                  <span>Search for "LocalSeek"</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-full">
                    3
                  </span>
                  <span>Click "Install"</span>
                </li>
              </ol>
            </div>

            <div className="p-8 rounded-2xl gradient-border card-hover">
              <h3 className="mb-4 text-2xl font-semibold">
                Method 2: Manual VSIX
              </h3>
              <ol className="space-y-4 text-gray-300">
                <li className="flex items-center space-x-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-full">
                    1
                  </span>
                  <span>Download VSIX from GitHub Releases</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-full">
                    2
                  </span>
                  <span>Open VSCode Extensions view</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="flex items-center justify-center w-6 h-6 bg-green-600 rounded-full">
                    3
                  </span>
                  <span>Install from VSIX file</span>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Why LocalSeek Section */}
      <section className="px-6 py-20">
        <div className="container max-w-6xl mx-auto">
          <h2 className="mb-16 text-4xl font-bold text-center gradient-text">
            Why LocalSeek?
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Lock className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    100% Local Processing
                  </h3>
                  <p className="text-gray-400">
                    All AI inference happens on your machine. Your code and
                    conversations never leave your computer.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Cloud className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    No Data Transmission
                  </h3>
                  <p className="text-gray-400">
                    Your code and conversations never leave your computer. Zero
                    tracking or analytics.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BookOpen className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Offline Capable
                  </h3>
                  <p className="text-gray-400">
                    Works completely without an internet connection.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Database className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    Your Data, Your Control
                  </h3>
                  <p className="text-gray-400">
                    Full ownership of all conversations and data.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Command className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">
                    No API Keys Required
                  </h3>
                  <p className="text-gray-400">No risk of key exposure.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Heart className="flex-shrink-0 w-6 h-6 mt-1 text-green-500" />
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Open Source</h3>
                  <p className="text-gray-400">
                    Transparent and auditable code. Built with love by
                    developers for developers. Contribute and help shape the
                    future of LocalSeek.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t bg-black/40 border-green-500/10">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            Developed with <span className="text-green-500">❤️</span> by{" "}
            <a
              className="name-linkedin"
              href="https://www.linkedin.com/in/hariharen9/">
              Hariharen
            </a>
          </p>
          <div className="flex items-center justify-center mt-4 space-x-6">
            <a
              href="https://github.com/hariharen9/localseek"
              className="text-gray-400 transition-colors hover:text-green-500">
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
