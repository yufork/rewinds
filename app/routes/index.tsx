import {
  ExampleAlerts,
  ExampleButtons,
  ExampleFooters,
  ExampleForms,
  ExampleToasts,
  Intro,
} from '~/contents';
import { ExampleNotifications } from '~/contents/example-notifications';

export default function IndexRoute() {
  return (
    <>
      <Intro />
      <ExampleButtons />
      <ExampleForms />
      <ExampleAlerts />
      <ExampleToasts />
      <ExampleNotifications />
      <ExampleFooters />
    </>
  );
}
