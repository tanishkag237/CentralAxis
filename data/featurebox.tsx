import FeatureBox from "@/components/FeatureBox";

export default function HomeScreen() {
  return (
    <>
    <div className="mb-35">

    
  <FeatureBox 
  heading={"Advanced Monitoring"} 
  description={"CentralAxis provides cutting-edge monitoring solutions for your data center, offering real-time insights and comprehensive analytics to optimize performance, reduce costs, and enhance reliability."} 
  points={["Real-time performance metrics and predictive analytics","Automated alerts and intelligent incident response","Comprehensive reporting and trend analysis"]} 
  url={"homevideos/01hb-monitoring.mp4"}
  />

  <FeatureBox 
  heading={"Network Management and Monitoring"} 
  description={"Comprehensive network monitoring and management that ensures optimal performance, security, and reliability across your entire data center infrastructure."} 
  points={["Real-time network performance monitoring and bandwidth optimization","Automated network security and threat detection","Advanced network diagnostics and troubleshooting tools"]} 
  url={"homevideos/02networking-b.mp4"}
  reverse={true}
  />

  <FeatureBox 
  heading={"Asset Management"} 
  description={"Streamline your data center operations with our comprehensive asset management system. Track, maintain, and optimize your infrastructure with precision and ease."} 
  points={["Automated inventory tracking and lifecycle management","Intelligent ticketing based on asset health and performance","Efficient resource allocation and optimization"]} 
  url={"homevideos/03asset-management-b.mp4"}/>

  <FeatureBox 
  heading={"A Single Pane of Glass"} 
  description={"A unified view across all of your BMS and EPMS systems, tailored to your needs."} 
  points={["Comprehensive visibility across all of your colocation infrastructure","Customizable interface tailored to your specific operational requirements and priorities.","Unified dashboard integrating all BMS and EPMS systems for seamless monitoring and management."]} 
  url={"homevideos/04SinglePane-b.mp4"}
  reverse={true}
  />

  <FeatureBox 
  heading={"Built-In Compliance"} 
  description={"CentralAxis provides compliance as a service for data centers."} 
  points={["Track data for EU, US, and global regulatary standards.","We guarantee compliance and handle every step between monitoring and reporting."]} 
  url={"homevideos/05__compliance.mp4"}/>

  <FeatureBox 
  heading={"Data Center Planning"} 
  description={"Want to support the latest and greatest architectures on the market? Modern GPUs and even CPUs are more water and energy intensive than ever."} 
  points={["Model new architectures and see detailed implications on power and cooling needs.","Design unique specifications for your data center.","Our continuous monitoring is the most advanced on the market, lowering costs while increasing reliability."]} 
  url={"homevideos/06dc-planning.mp4"}
  reverse={true}
  />
  </div>
    </>
  );
}