import sharp from "sharp"
import fs from "fs"
import path from "path"

const inputDir = path.resolve("src/assets")
const outputDir = path.resolve("src/assets/optimized")

async function getImages(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  const files = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    if (entry.isDirectory() && entry.name !== "optimized") {
      files.push(...(await getImages(fullPath)))
    }

    if (
      entry.isFile() &&
      /\.(jpg|jpeg|png)$/i.test(entry.name)
    ) {
      files.push(fullPath)
    }
  }

  return files
}

const files = await getImages(inputDir)

for (const input of files) {
  const relativePath = path.relative(inputDir, input)
  const parsed = path.parse(relativePath)

  const output = path.join(
    outputDir,
    parsed.dir,
    `${parsed.name}.webp`
  )

  fs.mkdirSync(path.dirname(output), { recursive: true })

  const isLogo = parsed.name === "school-logo"
  const isPrincipal = parsed.name === "principal"

  const width = isLogo
    ? 600
    : isPrincipal
      ? 900
      : 1400

  await sharp(input)
    .resize({
      width,
      withoutEnlargement: true,
      fit: "inside",
    })
    .webp({
      quality: 82,
      effort: 6,
    })
    .toFile(output)

  console.log(
    `${relativePath} -> ${path.relative(inputDir, output)}`
  )
}

console.log("\nOptimization complete.")