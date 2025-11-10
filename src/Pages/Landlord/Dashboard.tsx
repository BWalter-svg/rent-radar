import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../api/supabaseClient";
import "../../App.css";

const LandlordDashboard: React.FC = () => {
  const navigate = useNavigate();
  const [propertyCount, setPropertyCount] = useState(0);
  const [messagesCount, setMessagesCount] = useState(0);
  const [rentCount, setRentCount] = useState(0);
  const [maintenanceCount, setMaintenanceCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
     const { data: { user } } = await supabase.auth.getUser();

      if (!user) return;

      // Count landlord properties
      const { data: properties } = await supabase
        .from("properties")
        .select("*", { count: "exact" })
        .eq("landlord_id", user.id);

      setPropertyCount(properties?.length || 0);

      // Count messages
      const { data: messages } = await supabase
        .from("messages")
        .select("*", { count: "exact" })
        .eq("landlord_id", user.id);

      setMessagesCount(messages?.length || 0);

      // Count rent payments
      const { data: rents } = await supabase
        .from("rent_payments")
        .select("*", { count: "exact" })
        .eq("landlord_id", user.id);

      setRentCount(rents?.length || 0);

      // Count maintenance requests
      const { data: maintenance } = await supabase
        .from("maintenance_requests")
        .select("*", { count: "exact" })
        .eq("landlord_id", user.id);

      setMaintenanceCount(maintenance?.length || 0);
    };

    fetchData();
  }, []);

  const cards = [
    {
      title: "Properties",
      description: `You have ${propertyCount} properties.`,
      path: "/landlord/properties",
    },
    {
      title: "Messages",
      description: `You have ${messagesCount} unread messages.`,
      path: "/landlord/messages",
    },
    {
      title: "Rent Tracking",
      description: `You have ${rentCount} rent entries.`,
      path: "/landlord/renttracking",
    },
    {
      title: "Maintenance Requests",
      description: `You have ${maintenanceCount} open requests.`,
      path: "/landlord/maintenance",
    },
  ];

  return (
    <div className="page-container">
      <h1>Landlord Dashboard</h1>
      <div className="card-grid">
        {cards.map((card, index) => (
          <div
            key={index}
            className="card"
            onClick={() => navigate(card.path)}
            style={{ cursor: "pointer" }}
          >
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandlordDashboard;
