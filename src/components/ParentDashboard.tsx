import React, { useState } from 'react';
import { Bell, MapPin, Shield, Phone, MessageSquare, AlertTriangle, CheckCircle, Clock, User, School, Activity } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import SimpleLocationMap from './SimpleLocationMap';
import SendAlert from './SendAlert';

const ParentDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Mock data for parent dashboard
  const childInfo = {
    name: "Priya Sharma",
    class: "7A",
    school: "Delhi Public School, Sector 45",
    currentStatus: "Safe",
    lastUpdated: "2 minutes ago"
  };

  const safetyMetrics = {
    drillsCompleted: 8,
    totalDrills: 10,
    safetyScore: 85,
    preparednessLevel: "Advanced"
  };

  const recentAlerts = [
    {
      id: 1,
      type: "drill",
      message: "Fire drill completed successfully",
      time: "Today, 11:30 AM",
      status: "completed"
    },
    {
      id: 2,
      type: "weather",
      message: "Heavy rain alert in your area",
      time: "Today, 9:15 AM",
      status: "active"
    },
    {
      id: 3,
      type: "safety",
      message: "Safety module completed - Earthquake preparedness",
      time: "Yesterday, 3:45 PM",
      status: "completed"
    }
  ];

  const nearbyZones = [
    { name: "Community Center", distance: "0.5 km", type: "safe" },
    { name: "Central Hospital", distance: "1.2 km", type: "medical" },
    { name: "Police Station", distance: "0.8 km", type: "emergency" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-primary-glow">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">SafeGuard Parent Portal</h1>
          <p className="text-green-50">Keep your child safe, stay informed and prepared</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-6 space-y-6">
        
        {/* Child Status Card */}
        <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white border-0 shadow-elegant">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold">Welcome back! 👋</h2>
                  <p className="text-lg">{childInfo.name} • {childInfo.class}</p>
                  <div className="flex items-center space-x-2 mt-2">
                    <CheckCircle className="w-4 h-4" />
                    <span className="text-sm">Currently {childInfo.currentStatus}</span>
                    <Badge variant="secondary" className="bg-white/20 text-white">
                      Level 4 Safety Hero
                    </Badge>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="bg-white/20 px-4 py-2 rounded-lg">
                  <div className="text-2xl font-bold">Safe</div>
                  <div className="text-sm opacity-90">Status</div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-2">
                <span>Safety Score Progress</span>
                <span>{safetyMetrics.safetyScore}/100</span>
              </div>
              <Progress value={safetyMetrics.safetyScore} className="h-2 bg-white/20" />
            </div>
          </CardContent>
        </Card>

        {/* Online Status */}
        <Card className="bg-green-50 border-green-200 shadow-sm">
          <CardContent className="p-4">
            <div className="flex items-center space-x-3">
              <Activity className="w-5 h-5 text-green-600" />
              <div>
                <p className="font-medium text-green-800">Online</p>
                <p className="text-sm text-green-600">All safety features and notifications active.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Quick Actions */}
          <Card className="bg-green-500 text-white border-0 shadow-elegant">
            <CardContent className="p-6 text-center">
              <Phone className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Emergency Contact</h3>
              <p className="text-sm text-green-100 mb-4">Quick access to emergency services</p>
              <Button 
                className="w-full bg-white text-green-500 hover:bg-green-50"
                onClick={() => window.open('tel:911', '_self')}
              >
                Call Now
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-blue-500 text-white border-0 shadow-elegant">
            <CardContent className="p-6 text-center">
              <MessageSquare className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Emergency Alert</h3>
              <p className="text-sm text-blue-100 mb-4">Send emergency notifications</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-white text-blue-500 hover:bg-blue-50">
                    Send Message
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Emergency Alert System</DialogTitle>
                  </DialogHeader>
                  <SendAlert />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>

          <Card className="bg-orange-500 text-white border-0 shadow-elegant">
            <CardContent className="p-6 text-center">
              <MapPin className="w-12 h-12 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Track Location</h3>
              <p className="text-sm text-orange-100 mb-4">View real-time location updates</p>
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="w-full bg-white text-orange-500 hover:bg-orange-50">
                    View Map
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Child Location Tracking</DialogTitle>
                  </DialogHeader>
                  <SimpleLocationMap childName={childInfo.name} />
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Safety Progress */}
          <Card className="shadow-elegant">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Shield className="w-5 h-5 text-green-600 mr-2" />
              <CardTitle className="text-lg">Safety Progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-sm text-muted-foreground">
                {safetyMetrics.drillsCompleted} of {safetyMetrics.totalDrills} safety drills completed
              </div>
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span>Overall Progress</span>
                  <span>{safetyMetrics.drillsCompleted}/{safetyMetrics.totalDrills} (80%)</span>
                </div>
                <Progress value={80} className="h-2" />
              </div>

              <div className="space-y-3 mt-6">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-green-800">Earthquake Safety</p>
                      <p className="text-xs text-green-600">Beginner</p>
                    </div>
                  </div>
                  <Badge className="bg-green-500 text-white">
                    Continue
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-orange-800">Fire Safety</p>
                      <p className="text-xs text-orange-600">Intermediate</p>
                    </div>
                  </div>
                  <Badge className="bg-orange-500 text-white">
                    Continue
                  </Badge>
                </div>

                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="font-medium text-blue-800">Flood Preparedness</p>
                      <p className="text-xs text-blue-600">Beginner</p>
                    </div>
                  </div>
                  <Badge className="bg-blue-500 text-white">
                    Continue
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Notifications */}
          <Card className="shadow-elegant">
            <CardHeader className="flex flex-row items-center space-y-0 pb-2">
              <Bell className="w-5 h-5 text-blue-600 mr-2" />
              <CardTitle className="text-lg">Recent Notifications</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentAlerts.map((alert) => (
                <div key={alert.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    alert.status === 'active' ? 'bg-red-500' : 'bg-green-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm font-medium">{alert.message}</p>
                    <div className="flex items-center space-x-2 mt-1">
                      <Clock className="w-3 h-3 text-muted-foreground" />
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Nearby Safe Zones */}
        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <MapPin className="w-5 h-5 text-purple-600 mr-2" />
            <CardTitle className="text-lg">Nearby Safe Zones</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {nearbyZones.map((zone, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium">{zone.name}</h4>
                    <Badge variant={zone.type === 'safe' ? 'default' : 'secondary'}>
                      {zone.type}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{zone.distance}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* School Information */}
        <Card className="shadow-elegant">
          <CardHeader className="flex flex-row items-center space-y-0 pb-2">
            <School className="w-5 h-5 text-indigo-600 mr-2" />
            <CardTitle className="text-lg">School Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between p-4 bg-indigo-50 rounded-lg">
              <div>
                <h4 className="font-medium text-indigo-800">{childInfo.school}</h4>
                <p className="text-sm text-indigo-600">Class: {childInfo.class}</p>
                <p className="text-xs text-indigo-500 mt-1">Last updated: {childInfo.lastUpdated}</p>
              </div>
              <Badge className="bg-indigo-500 text-white">
                Active
              </Badge>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default ParentDashboard;