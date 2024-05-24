import { BusinessIcon, ProductIcon } from "assets/internalIcon";
import { Link } from "react-router-dom";
import { businessesUrl, productsUrl } from "config";

export function NavMenu() {
  return (
    <div className="flex gap-3">
      <Link
        to={businessesUrl}
        className="flex gap-3 p-3 rounded-sm hover:bg-slate-300 max-h-fit"
      >
        <BusinessIcon />
        <span>Business</span>
      </Link>
      <Link
        to={productsUrl}
        className="flex gap-3 p-3 rounded-sm hover:bg-slate-300"
      >
        <ProductIcon />
        <span>Product</span>
      </Link>
    </div>
  );
}
