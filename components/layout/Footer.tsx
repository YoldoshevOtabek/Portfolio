import Link from "next/link";
import { ArrowUp, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer wrap">
      <Link href="#home" className="wordmark">
        Otabek<span>.</span><i>dev</i>
      </Link>

      <p>
        © {new Date().getFullYear()} Otabek Yo‘ldoshev. Barcha huquqlar
        himoyalangan.
      </p>

      <span>
        Ehtiros va <Heart className="footer-heart" size={12} fill="currentColor" />
        {" "}bilan yaratilgan
      </span>

      <a href="#home" className="back-top">
        YUQORIGA
        <ArrowUp size={14} />
      </a>
    </footer>
  );
}

