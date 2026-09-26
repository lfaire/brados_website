import { brand } from "../config/brand";

/** Temporary typography, not the official BRADOS logo. */
export function BrandMark({ large = false }: { large?: boolean }) {
  return (
    <span className={`brand-mark${large ? " brand-mark--large" : ""}`}>
      <span className="brand-name">{brand.name}</span>
      <span className="brand-descriptor">{brand.descriptor}</span>
    </span>
  );
}
