let path = require("path"),
  fs = require("fs");
const assert = require("assert");
(async () => {
  let e = path.join(__dirname, "./"),
    r = await fs.readdirSync(e);
  for (let e of r.filter(
    (e) => e.endsWith(".js") && e !== path.basename(__filename)
  )) {
    console.error("Run", e);
    try {
      require("./" + e), assert.ok(e), console.log("Done run", e);
    } catch (r) {
      assert.ok(r.length < 1, e + "\n\n" + r);
    }
  }
})();
