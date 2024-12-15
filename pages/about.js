import { useState } from 'react';
import config from '../src/config';
import Sidebar from '../src/components/Sidebar';

const About = () => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <h1 className="text-4xl font-bold mb-6">About {config.productName}</h1>
        
        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
          <p className="text-lg mb-4">
            Our product is designed to streamline your workflow, improve productivity, and provide comprehensive insights into your tasks and projects. 
            We offer a suite of features that include:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Real-time task tracking with detailed reports.</li>
            <li className="mb-2">Integrated calendar to manage your schedule effectively.</li>
            <li className="mb-2">User-friendly interface for easy navigation and task management.</li>
            <li className="mb-2">Customizable dashboards to fit your needs.</li>
          </ul>
          <p className="text-lg">
            Our goal is to provide a solution that adapts to your unique requirements, making task management and project tracking more efficient and enjoyable.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Advanced Reporting</h3>
              <p>
                Generate in-depth reports on task progress, team performance, and project status. Our reporting tools help you make data-driven decisions and keep track of key metrics.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Seamless Integration</h3>
              <p>
                Integrate with popular tools and services to streamline your workflow. Our product supports various integrations to ensure a smooth experience.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Customizable Dashboard</h3>
              <p>
                Tailor your dashboard to display the most relevant information for your needs. Customize widgets, layouts, and themes to create a workspace that suits you.
              </p>
            </div>
            <div className="bg-white p-6 rounded-md shadow-md">
              <h3 className="text-2xl font-semibold mb-2">Real-time Notifications</h3>
              <p>
                Stay updated with real-time notifications on task updates, project changes, and upcoming deadlines. Never miss an important update with our notification system.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-lg mb-4">
            Have questions or need support? Our team is here to help. Contact us through the following channels:
          </p>
          <ul className="list-disc ml-6 mb-4">
            <li className="mb-2">Email: support@yourcompany.com</li>
            <li className="mb-2">Phone: +1 (123) 456-7890</li>
            <li className="mb-2">Address: 1234 Your Street, City, State, ZIP</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;
