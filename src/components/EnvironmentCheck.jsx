// While we *can* make remote calls, etc, here, that makes it not client-side
// only anymore, so I'd rather use React just for display, not actual
// interactivity. For now, anyway.
//
// We *could* use Typescript up in here more if need be...

import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const showLog = (value) => {
  console.log(`switch toggled: ${value}`);
};

export function SwitchDemo() {
  return (
    <div className="flex space-x-2 items-center ">
      <Switch id="airplane-mode" onClick={showLog} />
      <Label htmlFor="airplane-mode">Airplane Mode</Label>
    </div>
  );
}

export default function ({ testProp, children }) {
  const isDev = window.location.href.includes("localhost");
  if (!isDev) return <></>;

  return (
    <div className="dev-env grid justify-end py-2 px-4 text-zinc-800 font-black">
      <Switch onCheckedChange={showLog} />
      <Label>DEV ENVIRONMENT</Label>
    </div>
  );
}
