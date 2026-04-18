import {
  FileImage, FileText, Crop, ImageMinus, Palette, Calculator, QrCode, Ruler, FileDown,
  Type, Calendar, Hash, Clock, TrendingUp, Bitcoin, MapPin, Landmark, PiggyBank, ShoppingBag,
} from "lucide-react";

export const tools = [
  { title: "Image to PDF", description: "Convert images to PDF documents instantly", icon: FileImage, path: "/tools/image-to-pdf", color: "#0ea5e9", category: "image" },
  { title: "PDF to Image", description: "Extract images from PDF files", icon: FileText, path: "/tools/pdf-to-image", color: "#14b8a6", category: "pdf" },
  { title: "Image Cropper", description: "Crop and resize your images easily", icon: Crop, path: "/tools/image-cropper", color: "#8b5cf6", category: "image" },
  { title: "KB Converter", description: "Reduce to specific KB without quality loss", icon: FileDown, path: "/tools/kb-converter", color: "#f59e0b", category: "image" },
  { title: "Image Compressor", description: "Reduce image size in KB/MB", icon: FileDown, path: "/tools/image-compressor", color: "#fb923c", category: "image" },
  { title: "Remove Background", description: "Remove image background with AI", icon: ImageMinus, path: "/tools/remove-background", color: "#ec4899", category: "image" },
  { title: "Age Calculator", description: "Calculate exact age from birthdate", icon: Calendar, path: "/tools/age-calculator", color: "#06b6d4", category: "calculator" },
  { title: "QR Code Generator", description: "Create QR codes for any text or URL", icon: QrCode, path: "/tools/qr-generator", color: "#10b981", category: "utility" },
  { title: "Color Picker", description: "Pick colors and get color codes", icon: Palette, path: "/tools/color-picker", color: "#f43f5e", category: "utility" },
  { title: "Unit Converter", description: "Convert between different units", icon: Ruler, path: "/tools/unit-converter", color: "#6366f1", category: "utility" },
  { title: "Text on Photo", description: "Add text watermark to images", icon: Type, path: "/tools/text-on-photo", color: "#84cc16", category: "image" },
  { title: "Number System", description: "Convert between number systems", icon: Hash, path: "/tools/number-converter", color: "#a855f7", category: "utility" },
  { title: "BMI Calculator", description: "Calculate your Body Mass Index", icon: Calculator, path: "/tools/bmi-calculator", color: "#22c55e", category: "calculator" },
  { title: "Time Zone Converter", description: "Convert time between global zones", icon: Clock, path: "/tools/time-zone-converter", color: "#0891b2", category: "utility" },
  { title: "Currency Converter", description: "Convert currencies with live rates", icon: TrendingUp, path: "/tools/currency-converter", color: "#eab308", category: "calculator" },
  { title: "Crypto Converter", description: "Live crypto prices & converter", icon: Bitcoin, path: "/tools/crypto-converter", color: "#f7931a", category: "calculator" },
  { title: "Pincode Lookup", description: "Find area details by Indian pincode", icon: MapPin, path: "/tools/pincode-lookup", color: "#e11d48", category: "utility" },
  { title: "Loan EMI Calculator", description: "Calculate monthly EMI for any loan", icon: Calculator, path: "/tools/loan-emi-calculator", color: "#2563eb", category: "calculator" },
  { title: "SIP Calculator", description: "Calculate mutual fund SIP returns", icon: TrendingUp, path: "/tools/sip-calculator", color: "#16a34a", category: "calculator" },
  { title: "FD Calculator", description: "FD maturity & SIP vs FD comparison", icon: Landmark, path: "/tools/fd-calculator", color: "#7c3aed", category: "calculator" },
  { title: "PPF Calculator", description: "PPF maturity & tax-free returns", icon: PiggyBank, path: "/tools/ppf-calculator", color: "#0d9488", category: "calculator" },
  { title: "Etsy Fee Calculator", description: "Calculate Etsy fees & profit instantly", icon: ShoppingBag, path: "/tools/etsy-fee-calculator", color: "#f56a00", category: "calculator" },
];
