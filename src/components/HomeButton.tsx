import { useNavigate } from "react-router-dom";
import { Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const HomeButton = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-4 left-4 z-50">
      <Button
        onClick={() => navigate("/")}
        size="icon"
        className="rounded-full w-12 h-12 bg-primary/90 hover:bg-primary shadow-lg"
      >
        <Home className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default HomeButton;
