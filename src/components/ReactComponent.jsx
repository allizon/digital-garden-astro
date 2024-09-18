// While we *can* make remote calls, etc, here, that makes it not client-side
// only anymore, so I'd rather use React just for display, not actual
// interactivity. For now, anyway.
//
// We *could* use Typescript up in here more if need be...

export default function ({ testProp, children }) {
  return (
    <div>
      this is a <b>react</b> component {testProp}
      <br />
      {children}
    </div>
  );
}
