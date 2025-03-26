import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Placeholder from "@tiptap/extension-placeholder";

const TextEditor = ({ value, onChange }) => {
  const editor = useEditor({
    editorProps: {
      attributes: {
        class:
          "prose prose-headings:text-primary-text dark:prose-headings:text-primary-text-dark prose-p:text-primary-text dark:prose-p:text-primary-text-dark prose-li:text-primary-text dark:prose-li:text-primary-text-dark prose-strong:text-primary-text dark:prose-strong:text-primary-text-dark prose-ol:text-primary-text dark:prose-ol:text-primary-text-dark prose-ul:text-primary-text dark:prose-ul:text-primary-text-dark max-w-none outline-none",
      },
    },
    extensions: [
      StarterKit.configure({
        heading: {
          levels: [1, 2, 3],
        },
      }),
      Underline,
      Placeholder.configure({
        placeholder: ({ node }) => {
          if (node.type.name === "paragraph") {
            return "Enter your content...";
          }
          return "content";
        },
      }),
    ],
    content: value || "<p></p>",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      onChange(html);
    },
  });

  useEffect(() => {
    if (editor && value !== editor.getHTML()) {
      editor.commands.setContent(value || "<p></p>");
    }
  }, [value, editor]);

  if (!editor) return null;

  const toolbarButtons = [
    {
      action: () => editor.chain().focus().toggleBold().run(),
      icon: "ri-bold",
      title: "Bold",
      isActive: editor.isActive("bold"),
    },
    {
      action: () => editor.chain().focus().toggleItalic().run(),
      icon: "ri-italic",
      title: "Italic",
      isActive: editor.isActive("italic"),
    },
    {
      action: () => editor.chain().focus().toggleUnderline().run(),
      icon: "ri-underline",
      title: "Underline",
      isActive: editor.isActive("underline"),
    },
    {
      action: () => editor.chain().focus().toggleHeading({ level: 1 }).run(),
      icon: "ri-h-1",
      title: "Heading 1",
      isActive: editor.isActive("heading", { level: 1 }),
    },
    {
      action: () => editor.chain().focus().toggleHeading({ level: 2 }).run(),
      icon: "ri-h-2",
      title: "Heading 2",
      isActive: editor.isActive("heading", { level: 2 }),
    },
    {
      action: () => editor.chain().focus().toggleHeading({ level: 3 }).run(),
      icon: "ri-h-3",
      title: "Heading 3",
      isActive: editor.isActive("heading", { level: 3 }),
    },
    {
      action: () => editor.chain().focus().toggleBulletList().run(),
      icon: "ri-list-unordered",
      title: "Bullet List",
      isActive: editor.isActive("bulletList"),
    },
    {
      action: () => editor.chain().focus().toggleOrderedList().run(),
      icon: "ri-list-ordered",
      title: "Ordered List",
      isActive: editor.isActive("orderedList"),
    },
    {
      action: () => {
        const url = window.prompt("Enter URL");
        if (url) {
          editor
            .chain()
            .focus()
            .extendMarkRange("link")
            .setLink({ href: url })
            .run();
        }
      },
      icon: "ri-link",
      title: "Add Link",
      isActive: editor.isActive("link"),
    },
  ];

  return (
    <div className="bg-secondary-bg dark:bg-secondary-bg-dark min-h-96">
      <div className="my-4 flex space-x-2">
        {toolbarButtons.map((btn, index) => (
          <button
            type="button"
            key={index}
            onClick={btn.action}
            title={btn.title}
            className={`flex items-center justify-center p-2 rounded transition-colors duration-200 ${
              btn.isActive
                ? "bg-primary text-white"
                : "bg-gray-200 text-black dark:bg-gray-700 dark:text-white"
            }`}
          >
            <i className={btn.icon}></i>
          </button>
        ))}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};

export default TextEditor;
