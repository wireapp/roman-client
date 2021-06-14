import ServiceAccessInfo, { ServiceAccessInfoProps } from './ServiceAccess';
import ServiceInfo, { ServiceInfoProps } from './ServiceInfo';


export default function Service({ serviceAccess, info }: { serviceAccess: ServiceAccessInfoProps, info: ServiceInfoProps }) {
  return (
    <div>
      <div>
        <ServiceInfo {...info}/>
      </div>
      <div>
        <ServiceAccessInfo {...serviceAccess}/>
      </div>
    </div>
  );
}
