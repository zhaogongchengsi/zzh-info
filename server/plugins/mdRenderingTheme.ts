// import { visit } from "unist-util-visit";

export default defineNitroPlugin((nitroApp) => {
  console.log("Nitro plugin");

  nitroApp.hooks.hook("content:file:beforeParse", (file) => {
    if (file._id.endsWith(".md")) {
      console.log("file beforParse");
    }
  });

  nitroApp.hooks.hook("content:file:afterParse", (file) => {
    if (file._id.endsWith(".md")) {
      console.log("file afterParse");
      // visit(
      //   file.body,
      //   (n: any) => n.tag === "img",
      //   (node) => {
      //     file.coverImage = node.props.src;
      //   }
      // );
    }
  });
});
