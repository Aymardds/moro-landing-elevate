import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Smartphone, Users, Zap, ArrowRight, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

type MessageType = 'text' | 'action-card';
type Sender = 'bot' | 'user';

interface Action {
    label: string;
    value: string;
    icon?: React.ReactNode;
}

interface Message {
    id: string;
    text: string;
    sender: Sender;
    type: MessageType;
    actions?: Action[];
    timestamp: Date;
}

const INITIAL_MESSAGES: Message[] = [
    {
        id: '1',
        text: "Bonjour ! Je suis Miss Monique votre assistante Moro. 👋 Comment puis-je vous aider aujourd'hui ?",
        sender: 'bot',
        type: 'text',
        timestamp: new Date(),
    },
];

const QUICK_ACTIONS: Action[] = [
    { label: 'Inscrire ma coopérative', value: 'Je fais l\'inscription', icon: <Users className="w-4 h-4" /> },
    { label: 'Télécharger l\'application', value: 'Je veux télécharger l\'application', icon: <Smartphone className="w-4 h-4" /> },
    { label: 'Découvrir nos services', value: 'Je veux découvrir nos services', icon: <Zap className="w-4 h-4" /> },
];

export const ChatWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>(INITIAL_MESSAGES);
    const [inputValue, setInputValue] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, isOpen]);
    const handleSend = () => {
        if (!inputValue.trim()) return;
        handleAction(inputValue);
        setInputValue('');
    };

    const handleAction = (actionValue: string) => {
        // Handle external links directly
        if (actionValue.startsWith('http')) {
            window.open(actionValue, '_blank');
            return;
        }

        // Add user message
        const userMsg: Message = {
            id: Date.now().toString(),
            text: QUICK_ACTIONS.find(a => a.value === actionValue)?.label || actionValue,
            sender: 'user',
            type: 'text',
            timestamp: new Date(),
        };
        setMessages(prev => [...prev, userMsg]);
        setIsTyping(true);

        // Simulate bot delay
        setTimeout(() => {
            let botResponse: Message;

            // Simple keyword matching for free text
            const lowerValue = actionValue.toLowerCase();

            if (QUICK_ACTIONS.some(qa => qa.value === actionValue)) {
                // It's a quick action, fall through to switch
            } else if (lowerValue.includes('bonjour') || lowerValue.includes('salut') || lowerValue.includes('hello')) {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
                    sender: 'bot',
                    type: 'text',
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, botResponse]);
                setIsTyping(false);
                return;
            } else if (lowerValue.includes('prix') || lowerValue.includes('tarif') || lowerValue.includes('coût') || lowerValue.includes('offre') || lowerValue.includes('payer')) {
                botResponse = {
                    id: (Date.now() + 1).toString(),
                    text: "Nos tarifs sont adaptés à toutes les couches sociales. Voici nos différentes offres :",
                    sender: 'bot',
                    type: 'action-card',
                    actions: [
                        { label: "Moro Basic", value: 'plan_basic', icon: <Zap className="w-4 h-4" /> },
                        { label: "Moro Premium", value: 'plan_premium', icon: <Zap className="w-4 h-4" /> },
                        { label: "Moro Business", value: 'plan_business', icon: <Zap className="w-4 h-4" /> }
                    ],
                    timestamp: new Date(),
                };
                setMessages(prev => [...prev, botResponse]);
                setIsTyping(false);
                return;
            }

            switch (actionValue) {
                case "Je fais l'inscription":
                case 'register': // Fallback support
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "Excellent choix ! Pour inscrire votre coopérative, vous pouvez cliquer sur le bouton ci-dessous pour accéder au formulaire d'inscription.",
                        sender: 'bot',
                        type: 'action-card',
                        actions: [{ label: "Aller à l'inscription", value: 'go_register', icon: <ArrowRight className="w-4 h-4" /> }],
                        timestamp: new Date(),
                    };
                    break;
                case "Je veux télécharger l'application":
                case 'download': // Fallback
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "L'application Moro est disponible sur iOS et Android. Téléchargez-la dès maintenant via les liens ci-dessous :",
                        sender: 'bot',
                        type: 'action-card',
                        actions: [
                            { label: "App Store (iOS)", value: 'https://apps.apple.com/fr/app/moro/id6569222115', icon: <Smartphone className="w-4 h-4" /> },
                            { label: "Google Play (Android)", value: 'https://play.google.com/store/apps/details?id=com.litekev.moro', icon: <Smartphone className="w-4 h-4" /> }
                        ],
                        timestamp: new Date(),
                    };
                    break;
                case "Je veux découvrir nos services":
                case 'services': // Fallback
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "Moro propose une suite complète pour votre coopérative. Voici nos services et nos offres :",
                        sender: 'bot',
                        type: 'action-card',
                        actions: [
                            { label: "Nos Tarifs / Offres", value: 'Voir vos tarifs', icon: <Zap className="w-4 h-4" /> },
                            { label: "Gestion des Membres", value: 'Je veux gérer mes membres', icon: <Users className="w-4 h-4" /> },
                            { label: "Paiements Sécurisés", value: 'Je veux effectuer des paiements sécurisés', icon: <Check className="w-4 h-4" /> },
                            { label: "Traçabilité", value: 'Je veux tracer mes transactions', icon: <Zap className="w-4 h-4" /> },
                            { label: "Accès au Crédit", value: 'Je veux accéder au crédit', icon: <Zap className="w-4 h-4" /> }
                        ],
                        timestamp: new Date(),
                    };
                    break;
                case 'Voir vos tarifs':
                case 'show_pricing': // Fallback
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "Découvrez nos packs conçus pour votre croissance :",
                        sender: 'bot',
                        type: 'action-card',
                        actions: [
                            { label: "Moro Basic (200 FCFA)", value: 'plan_basic', icon: <Zap className="w-4 h-4" /> },
                            { label: "Moro Premium", value: 'plan_premium', icon: <Zap className="w-4 h-4" /> },
                            { label: "Moro Business", value: 'plan_business', icon: <Zap className="w-4 h-4" /> }
                        ],
                        timestamp: new Date(),
                    };
                    break;
                case 'plan_basic':
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "🌱 **Moro Basic (200 FCFA / 24h)**\n\nIdéale pour usage personnel ou microprojet.\n\n• Gestion des opérations (Illimité)\n• Gestion autonome de projet (05)\n• Gestion de 2 utilisateurs\n• État de caisse\n• Annonces (1 par semaine)\n• Envoyer ou recevoir de l'argent par Wave, Momo",
                        sender: 'bot',
                        type: 'text',
                        timestamp: new Date(),
                    };
                    break;
                case 'plan_premium':
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "🚀 **Moro Premium (25 600 FCFA/an)**\n\nPour les structures professionnelles.\n\n• Gestion opérations & projets (Illimité)\n• Tableau de bord intelligent\n• Utilisateurs illimités\n• Résultat d'exploitation\n• Assistance accès financement\n• Annonces illimitées\n• Support 24/7 & OCR Intelligente\n• Envoyer ou recevoir de l'argent par Wave, Momo",
                        sender: 'bot',
                        type: 'text',
                        timestamp: new Date(),
                    };
                    break;
                case 'plan_business':
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "🏢 **Moro Business (Gratuit*)**\n\nAccès gratuit + services payants obligatoires (dès 100 membres).\n\n• Tout illimité (Opérations, Projets, Annonces)\n• Tableau de bord intelligent\n• Résultat d’exploitation\n• Assistance financement\n• Support 24/7 & OCR Intelligente\n• Envoyer ou recevoir de l'argent par Wave, Momo",
                        sender: 'bot',
                        type: 'text',
                        timestamp: new Date(),
                    };
                    break;
                case 'Je veux gérer mes membres':
                case 'service_members':
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "Digitalisez votre registre de membres. Enrôlez facilement les producteurs et suivez leurs activités en temps réel.",
                        sender: 'bot',
                        type: 'text',
                        timestamp: new Date(),
                    };
                    break;
                case 'Je veux effectuer des paiements sécurisés':
                case 'service_payments':
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "Payez vos producteurs instantanément via Mobile Money. Sécurisé, rapide et transparent.",
                        sender: 'bot',
                        type: 'text',
                        timestamp: new Date(),
                    };
                    break;
                case 'Je veux tracer mes transactions':
                case 'service_traceability':
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "Garantissez la provenance de vos produits du champ à l'export. Conforme aux normes internationales (RDUE).",
                        sender: 'bot',
                        type: 'text',
                        timestamp: new Date(),
                    };
                    break;
                case 'Je veux accéder au crédit':
                case 'service_credit':
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "Facilitez l'accès au financement pour votre coopérative et vos membres grâce à leur historique de transaction.",
                        sender: 'bot',
                        type: 'text',
                        timestamp: new Date(),
                    };
                    break;
                case 'go_register':
                    // Handle navigation logic or showing a modal here if integrated deeper
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "Redirection vers la page d'inscription...",
                        sender: 'bot',
                        type: 'text',
                        timestamp: new Date(),
                    };
                    window.location.href = '#cta-section'; // Simple anchor link for demo
                    break;
                default:
                    botResponse = {
                        id: (Date.now() + 1).toString(),
                        text: "Je n'ai pas compris cette demande spécifique, mais je transfère votre message à notre équipe support qui vous recontactera bientôt.",
                        sender: 'bot',
                        type: 'text',
                        timestamp: new Date(),
                    };
            }

            setMessages(prev => [...prev, botResponse]);
            setIsTyping(false);
        }, 1500);
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className="w-[380px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col border border-gray-100"
                    >
                        {/* Header */}
                        <div className="bg-primary p-4 flex items-center justify-between text-white shadow-md">
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                                        <MessageCircle className="w-6 h-6 text-white" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-primary rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="font-bold text-lg leading-tight">Moro Assistant</h3>
                                    <p className="text-xs text-white/80">Toujours là pour vous</p>
                                </div>
                            </div>
                            <Button
                                variant="ghost"
                                size="icon"
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:bg-white/20 rounded-full"
                            >
                                <X className="w-5 h-5" />
                            </Button>
                        </div>

                        {/* Messages Area */}
                        <ScrollArea className="flex-1 p-4 bg-gray-50/50">
                            <div className="flex flex-col gap-4">
                                {messages.map((msg) => (
                                    <motion.div
                                        key={msg.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                                    >
                                        <div
                                            className={`max-w-[85%] p-3 rounded-2xl shadow-sm text-sm ${msg.sender === 'user'
                                                ? 'bg-primary text-white rounded-tr-none'
                                                : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                                                }`}
                                        >
                                            <p className="leading-relaxed">{msg.text}</p>

                                            {msg.actions && (
                                                <div className="mt-3 flex flex-col gap-2">
                                                    {msg.actions.map(action => (
                                                        <Button
                                                            key={action.value}
                                                            variant="outline"
                                                            size="sm"
                                                            onClick={() => handleAction(action.value)}
                                                            className="w-full justify-start bg-gray-50 hover:bg-white hover:border-primary/50 text-primary transition-all duration-200"
                                                        >
                                                            {action.icon && <span className="mr-2">{action.icon}</span>}
                                                            {action.label}
                                                        </Button>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <div className="flex justify-start">
                                        <div className="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
                                            <div className="flex gap-1.5">
                                                <motion.span
                                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                                    transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
                                                    className="w-2 h-2 bg-gray-400 rounded-full"
                                                />
                                                <motion.span
                                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}
                                                    className="w-2 h-2 bg-gray-400 rounded-full"
                                                />
                                                <motion.span
                                                    animate={{ opacity: [0.4, 1, 0.4] }}
                                                    transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}
                                                    className="w-2 h-2 bg-gray-400 rounded-full"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </ScrollArea>

                        {/* Input / Quick Actions */}
                        <div className="p-4 bg-white border-t border-gray-100">
                            <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">
                                {QUICK_ACTIONS.map(action => (
                                    <button
                                        key={action.value}
                                        onClick={() => handleAction(action.value)}
                                        className="whitespace-nowrap px-3 py-1.5 bg-secondary text-primary text-xs font-medium rounded-full hover:bg-primary hover:text-white transition-colors border border-transparent hover:border-primary/20"
                                    >
                                        {action.label}
                                    </button>
                                ))}
                            </div>
                            <div className="relative flex items-center">
                                <input
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    placeholder="Écrivez votre message..."
                                    className="w-full bg-gray-50 border border-gray-200 rounded-full px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter') {
                                            handleSend();
                                        }
                                    }}
                                />
                                <Button
                                    size="icon"
                                    onClick={handleSend}
                                    className="absolute right-1 w-8 h-8 rounded-full bg-primary hover:bg-primary-dark"
                                >
                                    <Send className="w-4 h-4 text-white" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Button (FAB) */}
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="relative group w-14 h-14 bg-primary rounded-full shadow-lg shadow-primary/30 flex items-center justify-center text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary/40 z-50"
            >
                {/* Pulse Effect */}
                <span className="absolute inset-0 rounded-full bg-primary opacity-20 animate-ping group-hover:animate-none"></span>

                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                        >
                            <X className="w-7 h-7" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="chat"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                        >
                            <MessageCircle className="w-7 h-7" />
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </div>
    );
};
