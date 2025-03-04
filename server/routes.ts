import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the portfolio
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  // Contact form endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, subject, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          message: 'All fields are required' 
        });
      }
      
      // In a real application, we would save to a database or send an email
      // For now, just log the message and return success
      console.log('Contact form submission:', { name, email, subject, message });
      
      // Simulate a delay to make the submission feel more realistic
      await new Promise(resolve => setTimeout(resolve, 500));
      
      res.status(200).json({ 
        success: true, 
        message: 'Message received successfully!' 
      });
    } catch (error) {
      console.error('Error in contact form submission:', error);
      res.status(500).json({ 
        success: false, 
        message: 'There was a problem processing your request' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
