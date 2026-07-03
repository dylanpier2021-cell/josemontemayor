"use client";

import { useEffect } from "react";

const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";
const FORM_ID = "ylcfkIs7U6PFGEIKzKo1";
const FORM_SRC = `https://api.leadconnectorhq.com/widget/form/${FORM_ID}`;

/**
 * LeadFormEmbed
 * =============================================================================
 * Renders the GoHighLevel ("Website Form Jose") inline lead form. GHL's
 * form_embed.js auto-resizes the iframe to fit its content, so we seed the
 * iframe with the form's design height (data-height) and let the script adjust
 * it from there. The script is injected once per page load.
 * =============================================================================
 */
export default function LeadFormEmbed() {
  useEffect(() => {
    if (document.querySelector(`script[src="${EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      src={FORM_SRC}
      id={`inline-${FORM_ID}`}
      title="Website Form Jose"
      loading="lazy"
      data-layout="{'id':'INLINE'}"
      data-trigger-type="alwaysShow"
      data-trigger-value=""
      data-activation-type="alwaysActivated"
      data-activation-value=""
      data-deactivation-type="neverDeactivate"
      data-deactivation-value=""
      data-form-name="Website Form Jose"
      data-height="1516"
      data-layout-iframe-id={`inline-${FORM_ID}`}
      data-form-id={FORM_ID}
      style={{ width: "100%", height: 1516, border: "none", borderRadius: 8 }}
    />
  );
}
