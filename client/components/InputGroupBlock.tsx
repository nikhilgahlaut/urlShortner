"use client";

import { CopyIcon, FileCodeIcon } from "lucide-react";

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import sendURL from "../api/sendURL";

export function InputGroupBlockStart() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const longUrlButtonClickHandler = async () => {
    try {
      const response = await sendURL(longUrl);
      setShortUrl(response.shortUrl);
      console.log("Short URL generated:", response.shortUrl);
      // You can update the state or perform any other actions with the response here
    } catch (error) {
      console.error("Error generating short URL:", error);
    }
  };

  function isPresent(value:string):boolean {
    return value !== null && value !== undefined && value.trim() !== "";
  }

  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-start-input">Enter URL below</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput
            id="block-start-input"
            placeholder="Enter URL"
            value={longUrl}
            onChange={(e) => setLongUrl(e.target.value)}
          />
          <InputGroupAddon align="block-start">
            <InputGroupText>Enter URL</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <Button
          variant="outline"
          size="sm"
          className="mt-2"
          onClick={longUrlButtonClickHandler}
        >
          Generate My Short URL
        </Button>
      </Field>
      <Field>
        <FieldLabel htmlFor="block-start-textarea">Short URL</FieldLabel>
        <InputGroup>
          <InputGroupTextarea
            id="block-start-textarea"
            placeholder="console.log('Hello, world!');"
            className="font-mono text-sm"
            disabled={isPresent(shortUrl) ? false : true}
            value={shortUrl}
          />
          <InputGroupAddon align="block-start">
            <FileCodeIcon className="text-muted-foreground" />
            <InputGroupText className="font-mono">URL</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto" onClick={() => {
                navigator.clipboard.writeText(shortUrl);
                setTimeout(() => {
                    alert("Short URL copied to clipboard!");
                }, 500);
            }}>
              <CopyIcon />
              <span className="sr-only">Copy</span>
            </InputGroupButton>
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>
          Copy the generated short URL to your clipboard.
        </FieldDescription>
      </Field>
    </FieldGroup>
  );
}
