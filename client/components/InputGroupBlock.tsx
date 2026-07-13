import { CopyIcon, FileCodeIcon } from "lucide-react"

import {
  Field,
  FieldDescription,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import {Button} from "@/components/ui/button"

export function InputGroupBlockStart() {
  return (
    <FieldGroup className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="block-start-input">Enter URL below</FieldLabel>
        <InputGroup className="h-auto">
          <InputGroupInput
            id="block-start-input"
            placeholder="Enter URL"
          />
          <InputGroupAddon align="block-start">
            <InputGroupText>Enter URL</InputGroupText>
          </InputGroupAddon>
        </InputGroup>
        <Button variant="outline" size="sm" className="mt-2">
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
            disabled
          />
          <InputGroupAddon align="block-start">
            <FileCodeIcon className="text-muted-foreground" />
            <InputGroupText className="font-mono">URL</InputGroupText>
            <InputGroupButton size="icon-xs" className="ml-auto">
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
  )
}
