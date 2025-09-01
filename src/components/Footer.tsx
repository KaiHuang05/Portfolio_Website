const Footer = () => {
  return (
    <footer className="py-8 bg-card border-t border-primary/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="flex justify-center items-center space-x-2 mb-4">
            <div className="w-8 h-8 flex items-center justify-center">
              <img src="/k-logo.svg" alt="K Logo" className="w-8 h-8" />
            </div>
            <span className="text-xl font-bold bg-text-gradient bg-clip-text text-transparent">
              Kai Huang Portfolio
            </span>
          </div>
          
          <p className="text-muted-foreground mb-4">
            Built with React, TypeScript, and Tailwind CSS
          </p>
          
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>© 2025 Kai Huang. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;