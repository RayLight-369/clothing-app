import React, { useState, useCallback } from 'react';
import { Editor, EditorState, RichUtils, Modifier } from 'draft-js';
import 'draft-js/dist/Draft.css';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline, List, ListOrdered, Highlighter } from "lucide-react";

// Custom style map for the highlighter
const styleMap = {
  'HIGHLIGHT': {
    backgroundColor: 'yellow',
  },
};

const RichTextEditor = () => {
  const [ editorState, setEditorState ] = useState( EditorState.createEmpty() );

  const handleStyleToggle = ( style ) => {
    setEditorState( RichUtils.toggleInlineStyle( editorState, style ) );
  };

  const handleBlockToggle = ( blockType ) => {
    setEditorState( RichUtils.toggleBlockType( editorState, blockType ) );
  };

  const getCurrentInlineStyles = useCallback( () => {
    return editorState.getCurrentInlineStyle();
  }, [ editorState ] );

  const getCurrentBlockType = useCallback( () => {
    const selection = editorState.getSelection();
    const blockType = editorState
      .getCurrentContent()
      .getBlockForKey( selection.getStartKey() )
      .getType();
    return blockType;
  }, [ editorState ] );

  return (
    <div className="p-4 border rounded-lg w-full">
      <ToggleGroup type="multiple" className="mb-4">
        <ToggleGroupItem
          value="BOLD"
          onClick={ () => handleStyleToggle( 'BOLD' ) }
          data-state={ getCurrentInlineStyles().has( 'BOLD' ) ? "on" : "off" }
        >
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="ITALIC"
          onClick={ () => handleStyleToggle( 'ITALIC' ) }
          data-state={ getCurrentInlineStyles().has( 'ITALIC' ) ? "on" : "off" }
        >
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="UNDERLINE"
          onClick={ () => handleStyleToggle( 'UNDERLINE' ) }
          data-state={ getCurrentInlineStyles().has( 'UNDERLINE' ) ? "on" : "off" }
        >
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="HIGHLIGHT"
          onClick={ () => handleStyleToggle( 'HIGHLIGHT' ) }
          data-state={ getCurrentInlineStyles().has( 'HIGHLIGHT' ) ? "on" : "off" }
        >
          <Highlighter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="unordered-list-item"
          onClick={ () => handleBlockToggle( 'unordered-list-item' ) }
          data-state={ getCurrentBlockType() === 'unordered-list-item' ? "on" : "off" }
        >
          <List className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem
          value="ordered-list-item"
          onClick={ () => handleBlockToggle( 'ordered-list-item' ) }
          data-state={ getCurrentBlockType() === 'ordered-list-item' ? "on" : "off" }
        >
          <ListOrdered className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>
      <Editor
        editorState={ editorState }
        onChange={ setEditorState }
        customStyleMap={ styleMap }
        placeholder="Start typing here..."
        className="p-2 border rounded min-h-[200px]"
      />
    </div>
  );
};

export default RichTextEditor;
