import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/hooks/useAuth';
import { apiRequest } from '@/lib/api';
import { format } from 'date-fns';
import { CreditCard, Plus, Download, Receipt, DollarSign, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import type { Invoice } from '@/types';

interface FeeStructure {
  id: string;
  name: string;
  amount: string;
  frequency: string;
  classId?: string;
  isActive: boolean;
}

interface PaymentRecord {
  id: string;
  invoiceId: string;
  amount: string;
  paymentMethod: string;
  status: string;
  paymentDate: Date;
  transactionId?: string;
}

export default function FeeManagement() {
  const { user } = useAuth();
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [isCreateFeeOpen, setIsCreateFeeOpen] = useState(false);
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Fetch fee structures
  const { data: feeStructures, isLoading: feesLoading } = useQuery<FeeStructure[]>({
    queryKey: ['/api/fee-structures'],
  });

  // Fetch invoices for selected student
  const { data: invoices, isLoading: invoicesLoading } = useQuery<Invoice[]>({
    queryKey: ['/api/invoices/student', selectedStudent],
    enabled: !!selectedStudent,
  });

  // Create fee structure mutation
  const createFeeMutation = useMutation({
    mutationFn: async (feeData: any) => {
      const response = await apiRequest('POST', '/api/fee-structures', feeData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Fee structure created successfully'
      });
      queryClient.invalidateQueries({ queryKey: ['/api/fee-structures'] });
      setIsCreateFeeOpen(false);
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  });

  // Process payment mutation
  const paymentMutation = useMutation({
    mutationFn: async (paymentData: any) => {
      const response = await apiRequest('POST', '/api/payments', paymentData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: 'Success',
        description: 'Payment processed successfully'
      });
      queryClient.invalidateQueries({ queryKey: ['/api/invoices'] });
      setIsPaymentModalOpen(false);
      setSelectedInvoice(null);
    },
    onError: (error: Error) => {
      toast({
        title: 'Error',
        description: error.message,
        variant: 'destructive'
      });
    }
  });

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'paid': return 'default';
      case 'pending': return 'secondary';
      case 'overdue': return 'destructive';
      case 'cancelled': return 'outline';
      default: return 'outline';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'paid': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'pending': return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'overdue': return <AlertCircle className="h-4 w-4 text-red-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  const handlePayment = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsPaymentModalOpen(true);
  };

  const processPayment = (paymentMethod: string) => {
    if (!selectedInvoice) return;

    paymentMutation.mutate({
      invoiceId: selectedInvoice.id,
      amount: selectedInvoice.totalAmount,
      paymentMethod,
      transactionId: `TXN${Date.now()}`
    });
  };

  // Calculate fee statistics
  const feeStats = invoices ? {
    totalInvoices: invoices.length,
    totalAmount: invoices.reduce((sum, inv) => sum + parseFloat(inv.totalAmount), 0),
    paidAmount: invoices.filter(inv => inv.status === 'paid').reduce((sum, inv) => sum + parseFloat(inv.totalAmount), 0),
    pendingAmount: invoices.filter(inv => inv.status === 'pending').reduce((sum, inv) => sum + parseFloat(inv.totalAmount), 0),
    overdueAmount: invoices.filter(inv => inv.status === 'overdue').reduce((sum, inv) => sum + parseFloat(inv.totalAmount), 0)
  } : { totalInvoices: 0, totalAmount: 0, paidAmount: 0, pendingAmount: 0, overdueAmount: 0 };

  return (
    <div className="space-y-6">
      {/* Fee Management Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle className="flex items-center space-x-2">
              <CreditCard className="h-5 w-5 text-blue-600" />
              <span>Fee Management</span>
            </CardTitle>
            <div className="flex space-x-2">
              {user?.role === 'admin' && (
                <Dialog open={isCreateFeeOpen} onOpenChange={setIsCreateFeeOpen}>
                  <DialogTrigger asChild>
                    <Button className="flex items-center space-x-2">
                      <Plus className="h-4 w-4" />
                      <span>Create Fee Structure</span>
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Create New Fee Structure</DialogTitle>
                    </DialogHeader>
                    <CreateFeeForm 
                      onSubmit={(data) => createFeeMutation.mutate(data)}
                      isLoading={createFeeMutation.isPending}
                    />
                  </DialogContent>
                </Dialog>
              )}
              <Button variant="outline" className="flex items-center space-x-2">
                <Download className="h-4 w-4" />
                <span>Export Report</span>
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Select Student</Label>
              <Select value={selectedStudent} onValueChange={setSelectedStudent}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose a student" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="student-1">John Doe - 2023001</SelectItem>
                  <SelectItem value="student-2">Jane Smith - 2023002</SelectItem>
                  <SelectItem value="student-3">Mike Johnson - 2023003</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Fee Statistics */}
      {selectedStudent && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">{feeStats.totalInvoices}</div>
              <div className="text-sm text-gray-600">Total Invoices</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-gray-800">${feeStats.totalAmount.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Total Amount</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">${feeStats.paidAmount.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Paid Amount</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">${feeStats.pendingAmount.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Pending Amount</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-red-600">${feeStats.overdueAmount.toFixed(2)}</div>
              <div className="text-sm text-gray-600">Overdue Amount</div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Student Invoices */}
      {selectedStudent && (
        <Card>
          <CardHeader>
            <CardTitle>Fee Invoices</CardTitle>
          </CardHeader>
          <CardContent>
            {invoicesLoading ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : invoices && invoices.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice ID</TableHead>
                      <TableHead>Total Amount</TableHead>
                      <TableHead>Paid Amount</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.map((invoice) => (
                      <TableRow key={invoice.id}>
                        <TableCell className="font-medium">#{invoice.id.slice(-8)}</TableCell>
                        <TableCell>${invoice.totalAmount}</TableCell>
                        <TableCell>${invoice.paidAmount}</TableCell>
                        <TableCell>{format(new Date(invoice.dueDate), 'MMM dd, yyyy')}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            {getStatusIcon(invoice.status)}
                            <Badge variant={getStatusBadgeVariant(invoice.status)}>
                              {invoice.status.charAt(0).toUpperCase() + invoice.status.slice(1)}
                            </Badge>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {invoice.status === 'pending' || invoice.status === 'overdue' ? (
                              <Button 
                                size="sm" 
                                onClick={() => handlePayment(invoice)}
                                className="flex items-center space-x-1"
                              >
                                <DollarSign className="h-3 w-3" />
                                <span>Pay Now</span>
                              </Button>
                            ) : (
                              <Button size="sm" variant="outline" className="flex items-center space-x-1">
                                <Receipt className="h-3 w-3" />
                                <span>Receipt</span>
                              </Button>
                            )}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">No invoices found</p>
                <p className="text-sm">This student has no fee invoices</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Fee Structures (Admin Only) */}
      {user?.role === 'admin' && (
        <Card>
          <CardHeader>
            <CardTitle>Fee Structures</CardTitle>
          </CardHeader>
          <CardContent>
            {feesLoading ? (
              <div className="flex items-center justify-center h-32">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : feeStructures && feeStructures.length > 0 ? (
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fee Name</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Frequency</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feeStructures.map((fee) => (
                      <TableRow key={fee.id}>
                        <TableCell className="font-medium">{fee.name}</TableCell>
                        <TableCell>${fee.amount}</TableCell>
                        <TableCell className="capitalize">{fee.frequency}</TableCell>
                        <TableCell>
                          <Badge variant={fee.isActive ? 'default' : 'secondary'}>
                            {fee.isActive ? 'Active' : 'Inactive'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">Edit</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500">
                <CreditCard className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-medium">No fee structures found</p>
                <p className="text-sm">Create your first fee structure to get started</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}

      {/* Payment Modal */}
      <Dialog open={isPaymentModalOpen} onOpenChange={setIsPaymentModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Process Payment</DialogTitle>
          </DialogHeader>
          {selectedInvoice && (
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Invoice Amount</p>
                <p className="text-2xl font-bold">${selectedInvoice.totalAmount}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Button 
                  onClick={() => processPayment('credit_card')}
                  disabled={paymentMutation.isPending}
                  className="flex items-center justify-center space-x-2"
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Credit Card</span>
                </Button>
                <Button 
                  onClick={() => processPayment('bank_transfer')}
                  disabled={paymentMutation.isPending}
                  variant="outline"
                  className="flex items-center justify-center space-x-2"
                >
                  <DollarSign className="h-4 w-4" />
                  <span>Bank Transfer</span>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {!selectedStudent && (
        <Card>
          <CardContent className="text-center py-12">
            <CreditCard className="h-16 w-16 mx-auto mb-4 text-gray-400" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">Select a Student</h3>
            <p className="text-gray-500">Choose a student from the dropdown above to view their fee information</p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}

// Create Fee Form Component
function CreateFeeForm({ onSubmit, isLoading }: { onSubmit: (data: any) => void; isLoading: boolean }) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      name,
      amount: parseFloat(amount),
      frequency,
      isActive: true
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="feeName">Fee Name</Label>
        <Input
          id="feeName"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g., Tuition Fee"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="amount">Amount ($)</Label>
        <Input
          id="amount"
          type="number"
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.00"
          required
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="frequency">Frequency</Label>
        <Select value={frequency} onValueChange={setFrequency}>
          <SelectTrigger>
            <SelectValue placeholder="Select frequency" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="monthly">Monthly</SelectItem>
            <SelectItem value="quarterly">Quarterly</SelectItem>
            <SelectItem value="yearly">Yearly</SelectItem>
            <SelectItem value="one_time">One Time</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading ? 'Creating...' : 'Create Fee Structure'}
      </Button>
    </form>
  );
}
