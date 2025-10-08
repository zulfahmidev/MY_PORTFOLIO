import fs from "fs"
import path from "path"

export async function ReadData(filename: string) {
  const filePath = path.join(process.cwd(), 'data', filename)
  const data = fs.readFileSync(filePath, "utf-8")
  const result = JSON.parse(data)

  return result
}