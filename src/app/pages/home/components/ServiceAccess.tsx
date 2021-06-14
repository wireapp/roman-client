export interface ServiceAccessInfoProps {
  serviceCode: string
  serviceAuthentication: string
  appKey: string
}

export default function ServiceAccessInfo(accessInfo: ServiceAccessInfoProps) {
  return (
    <div>
      <div>Code: {accessInfo.serviceCode}</div>
      <div>Authentication: {accessInfo.serviceAuthentication}</div>
      <div>AppKey: {accessInfo.appKey}</div>
    </div>
  );
}

