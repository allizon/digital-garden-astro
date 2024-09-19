// While we *can* make remote calls, etc, here, that makes it not client-side
// only anymore, so I'd rather use React just for display, not actual
// interactivity. For now, anyway.
//
// We *could* use Typescript up in here more if need be...

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export function SwitchDemo() {
  return (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export default function ({ testProp, children }) {
  console.log(window.location.href);
  const isDev = window.location.href.includes("localhost");

  return (
    <>
      <div>
        this is a <b>react</b> component {testProp}
        <br />
        {isDev ? "DEV ENV" : ""}
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="airplane-mode" />
        <Label htmlFor="airplane-mode">Airplane Mode</Label>
      </div>
    </>
  );
}
