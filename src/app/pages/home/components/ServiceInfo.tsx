export interface ServiceInfoProps {
  name: string
  webhook: string
}

/**
 * Editable part of the service data.
 */
export default function ServiceInfo(info: ServiceInfoProps) {


  return (
    <div>
      <div>Name: {info.name}</div>
      <div>WebHook: {info.webhook}</div>
    </div>
  );
}
