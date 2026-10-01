import { siteContent, isPlaceholder } from "../src/content/site";

interface PlaceholderFinding {
  path: string;
  placeholderText: string;
  note?: string;
}

function findPlaceholders(obj: unknown, currentPath = "siteContent"): PlaceholderFinding[] {
  const findings: PlaceholderFinding[] = [];

  if (!obj || typeof obj !== "object") {
    return findings;
  }

  if (isPlaceholder(obj)) {
    findings.push({
      path: currentPath,
      placeholderText: obj.placeholder,
      note: obj.note,
    });
    return findings;
  }

  if (Array.isArray(obj)) {
    obj.forEach((item, index) => {
      findings.push(...findPlaceholders(item, `${currentPath}[${index}]`));
    });
  } else {
    for (const [key, value] of Object.entries(obj)) {
      findings.push(...findPlaceholders(value, `${currentPath}.${key}`));
    }
  }

  return findings;
}

function main() {
  // eslint-disable-next-line no-console
  console.log("=================================================");
  // eslint-disable-next-line no-console
  console.log("🔍 Scanning content for unresolved placeholders...");
  // eslint-disable-next-line no-console
  console.log("=================================================\n");

  const placeholders = findPlaceholders(siteContent);
  const isLaunchMode = process.env.NEXT_PUBLIC_LAUNCH === "true";

  if (placeholders.length === 0) {
    // eslint-disable-next-line no-console
    console.log("✅ All content is resolved! Ready for live production launch.");
    process.exit(0);
  }

  // eslint-disable-next-line no-console
  console.log(`Found ${placeholders.length} unresolved client item(s) / placeholder(s):\n`);

  placeholders.forEach((p, idx) => {
    // eslint-disable-next-line no-console
    console.log(`  ${idx + 1}. [${p.placeholderText}]`);
    // eslint-disable-next-line no-console
    console.log(`     📍 Path: ${p.path}`);
    if (p.note) {
      // eslint-disable-next-line no-console
      console.log(`     ℹ️  Note: ${p.note}`);
    }
    // eslint-disable-next-line no-console
    console.log("");
  });

  if (isLaunchMode) {
    // eslint-disable-next-line no-console
    console.error(
      "❌ Launch check failed: NEXT_PUBLIC_LAUNCH is true but unresolved placeholders exist in src/content/site.ts!"
    );
    process.exit(1);
  } else {
    // eslint-disable-next-line no-console
    console.log(
      "ℹ️  Dev / Staging Mode: Placeholders will be visibly badged on the website."
    );
    // eslint-disable-next-line no-console
    console.log("💡 To enforce zero placeholders before launch, set NEXT_PUBLIC_LAUNCH=true\n");
    process.exit(0);
  }
}

main();
