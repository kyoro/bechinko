
import { SerializedStyles } from "@emotion/react";

declare global {
  type CssStyle = SerializedStyles | SerializedStyles[]
}

export {}
